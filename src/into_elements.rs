use data::{DataMap, Element, FromElements};
use visit::{EdgeRef, Data, GraphBase, IntoNodeIdentifiers, IntoEdgeReferences};
use std::cell::RefCell;
use std::collections::HashMap;
use std::hash::Hash;
use std::rc::Rc;

/// Turn a graph with clonable weights that implementings the correct taits into its Elements.
pub struct IntoElements<'a, G>(pub &'a G) where G: 'a;


//Todo: weights do not need to be cloneable. I couldn't get the lifetimes of EdgeWeight to work.
/// Graphs that have a Cloneable weigths and implement the necessary traits can be deconstructed into elements.
impl<'a, G> IntoIterator for IntoElements<'a, G>
    where G: 'a + DataMap + Data,
          &'a G: IntoNodeIdentifiers + IntoEdgeReferences,
          &'a G: GraphBase<NodeId = G::NodeId, EdgeId = G::EdgeId>,
          &'a G: Data<EdgeWeight = G::EdgeWeight>,
          G::NodeWeight: Clone,
          G::EdgeWeight: Clone,
          G::NodeId: Eq + Hash + Clone,
          G::EdgeId: Clone
{
    type Item = Element<G::NodeWeight, G::EdgeWeight>;
    type IntoIter = Box<Iterator<Item = Self::Item> + 'a>;
    fn into_iter(self) -> Self::IntoIter {
        use std::iter;
        let nodes = self.0.node_identifiers();
        let edge_refs = self.0.edge_references();
        let map = Rc::new(RefCell::new(HashMap::<G::NodeId, usize>::new()));
        let nodes: iter::Map<<&'a G as IntoNodeIdentifiers>::NodeIdentifiers, _> = {
            let map = map.clone();
            nodes.map(move |ni: G::NodeId| {
                let len = map.borrow().len();
                map.borrow_mut().insert(ni.clone(), len);
                Element::Node {
                    weight: self.0
                        .node_weight(ni)
                        .expect("All nodes in the graph should have a weight")
                        .clone(),
                }
            })
        };
        let edges: iter::Map<<&'a G as IntoEdgeReferences>::EdgeReferences, _> = edge_refs
            .map(move |eref| {
                     let map = map.borrow();
                     Element::Edge {
                         source: map[&eref.source()],
                         target: map[&eref.target()],
                         weight: eref.weight().clone(),
                     }
                 });
        let all: iter::Chain<_, _> = nodes.chain(edges);
        Box::new(all)
    }
}

/// Rebuild a graph with Cloneable weights into another graph.
pub fn rebuild<'a, G, H>(g: &'a G) -> H
    where G: 'a + DataMap + Data,
          &'a G: IntoNodeIdentifiers + IntoEdgeReferences,
          &'a G: GraphBase<NodeId = G::NodeId, EdgeId = G::EdgeId>,
          &'a G: Data<EdgeWeight = G::EdgeWeight>,
          G::NodeWeight: Clone,
          G::EdgeWeight: Clone,
          G::NodeId: Eq + Hash + Clone,
          G::EdgeId: Clone,
          H: FromElements,
          H: Data<NodeWeight = G::NodeWeight, EdgeWeight = G::EdgeWeight>
{
    let mut elements = IntoElements(g).into_iter();
    return H::from_elements(&mut elements);
}
