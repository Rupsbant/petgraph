var searchIndex = {};
searchIndex['petgraph'] = {"items":[[0,"","petgraph","**petgraph** is a graph data structure library."],[3,"MinScored","","**MinScored\\<K, T\\>** holds a score **K** and a scored object **T** in\na pair for use with a **BinaryHeap**."],[3,"Directed","","Marker type for a directed graph."],[3,"Undirected","","Marker type for an undirected graph."],[3,"Ptr","","A reference that is hashed and compared by its pointer value."],[4,"EdgeDirection","","Edge direction"],[13,"Outgoing","","A **Outgoing** edge is an outward edge *from* the current node.",0],[13,"Incoming","","An **Incoming** edge is an inbound edge *to* the current node.",0],[11,"fmt","","",1],[11,"clone","","",1],[11,"eq","","",1],[11,"partial_cmp","","",1],[11,"cmp","","",1],[0,"graphmap","","**GraphMap\\<N, E\\>** is an undirected graph where node values are mapping keys."],[3,"GraphMap","petgraph::graphmap","**GraphMap\\<N, E\\>** is an undirected graph, with generic node values **N** and edge weights **E**."],[3,"Nodes","",""],[3,"Neighbors","",""],[3,"Edges","",""],[12,"from","","",2],[12,"edges","","",2],[12,"iter","","",2],[8,"NodeTrait","","A trait group for **GraphMap**'s node identifier."],[11,"clone","","",3],[11,"fmt","","",3],[11,"new","","Create a new **GraphMap**.",3],[11,"with_capacity","","Create a new **GraphMap** with estimated capacity.",3],[11,"node_count","","Return the number of nodes in the graph.",3],[11,"edge_count","","Return the number of edges in the graph.",3],[11,"clear","","Remove all nodes and edges",3],[11,"add_node","","Add node **n** to the graph.",3],[11,"remove_node","","Return **true** if node **n** was removed.",3],[11,"contains_node","","Return **true** if the node is contained in the graph.",3],[11,"add_edge","","Add an edge connecting **a** and **b** to the graph.",3],[11,"remove_edge","","Remove edge from **a** to **b** from the graph and return the edge weight.",3],[11,"contains_edge","","Return **true** if the edge connecting **a** with **b** is contained in the graph.",3],[11,"nodes","","Return an iterator over the nodes of the graph.",3],[11,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",3],[11,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",3],[11,"edge_weight","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",3],[11,"edge_weight_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",3],[6,"Item","",""],[11,"next","","",4],[11,"size_hint","","",4],[6,"Item","",""],[11,"next","","",5],[11,"size_hint","","",5],[6,"Item","",""],[11,"next","","",2],[6,"Output","",""],[11,"index","","Index **GraphMap** by node pairs to access edge weights.",3],[6,"Output","",""],[11,"index_mut","","Index **GraphMap** by node pairs to access edge weights.",3],[0,"graph","petgraph","**Graph\\<N, E, Ty, Ix\\>** is a graph datastructure using an adjacency list representation."],[3,"NodeIndex","petgraph::graph","Node identifier."],[3,"EdgeIndex","","Edge identifier."],[3,"Node","","The graph's node type."],[12,"weight","","Associated node data.",6],[3,"Edge","","The graph's edge type."],[12,"weight","","Associated edge data.",7],[3,"Graph","","**Graph\\<N, E, Ty, Ix\\>** is a graph datastructure using an adjacency list representation."],[3,"WithoutEdges","","An iterator over either the nodes without edges to them or from them."],[3,"Neighbors","","Iterator over the neighbors of a node."],[3,"Edges","","Iterator over the edges of a node."],[5,"is_isomorphic","","Return **true** if the graphs **g0** and **g1** are isomorphic."],[5,"toposort","","Perform a topological sort of a directed graph."],[5,"scc","","Compute *Strongly connected components* using Kosaraju's algorithm."],[5,"is_cyclic","","Return **true** if the input graph contains a cycle."],[5,"connected_components","","Return the number of connected components of the graph."],[5,"min_spanning_tree","","Return a *Minimum Spanning Tree* of a graph."],[6,"DefIndex","","The default integer type for node and edge indices in **Graph**.\n**u32** is the default to reduce the size of the graph's data and improve\nperformance in the common case."],[8,"IndexType","","Trait for the unsigned integer type used for node and edge indices."],[10,"new","","",8],[10,"index","","",8],[10,"max","","",8],[11,"hash","","",9],[11,"cmp","","",9],[11,"partial_cmp","","",9],[11,"lt","","",9],[11,"le","","",9],[11,"gt","","",9],[11,"ge","","",9],[11,"eq","","",9],[11,"ne","","",9],[11,"fmt","","",9],[11,"clone","","",9],[11,"new","","",9],[11,"index","","",9],[11,"end","","",9],[11,"hash","","",10],[11,"cmp","","",10],[11,"partial_cmp","","",10],[11,"lt","","",10],[11,"le","","",10],[11,"gt","","",10],[11,"ge","","",10],[11,"eq","","",10],[11,"ne","","",10],[11,"clone","","",10],[11,"new","","",10],[11,"index","","",10],[11,"end","","An invalid **EdgeIndex** used to denote absence of an edge, for example\nto end an adjacency list.",10],[11,"fmt","","",10],[11,"clone","","",6],[11,"fmt","","",6],[11,"next_edge","","Accessor for data structure internals: the first edge in the given direction.",6],[11,"clone","","",7],[11,"fmt","","",7],[11,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",7],[11,"source","","Return the source node index.",7],[11,"target","","Return the target node index.",7],[11,"clone","","",11],[11,"fmt","","",11],[11,"new","","Create a new **Graph** with directed edges.",11],[11,"new_undirected","","Create a new **Graph** with undirected edges.",11],[11,"with_capacity","","Create a new **Graph** with estimated capacity.",11],[11,"node_count","","Return the number of nodes (vertices) in the graph.",11],[11,"edge_count","","Return the number of edges in the graph.",11],[11,"clear","","Remove all nodes and edges",11],[11,"is_directed","","Return whether the graph has directed edges or not.",11],[11,"into_edge_type","","Cast the graph as either undirected or directed. No edge adjustments\nare done.",11],[11,"add_node","","Add a node (also called vertex) with weight **w** to the graph.",11],[11,"node_weight","","Access node weight for node **a**.",11],[11,"node_weight_mut","","Access node weight for node **a**.",11],[11,"neighbors","","Return an iterator of all nodes with an edge starting from **a**.",11],[11,"neighbors_directed","","Return an iterator of all neighbors that have an edge between them and **a**,\nin the specified direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",11],[11,"neighbors_undirected","","Return an iterator of all neighbors that have an edge between them and **a**,\nin either direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",11],[11,"edges","","Return an iterator over the neighbors of node **a**, paired with their respective edge\nweights.",11],[11,"edges_both","","Return an iterator over the edgs from **a** to its neighbors, then *to* **a** from its\nneighbors.",11],[11,"add_edge","","Add an edge from **a** to **b** to the graph, with its edge weight.",11],[11,"update_edge","","Add or update an edge from **a** to **b**.",11],[11,"edge_weight","","Access the edge weight for **e**.",11],[11,"edge_weight_mut","","Access the edge weight for **e** mutably.",11],[11,"remove_node","","Remove **a** from the graph if it exists, and return its weight.\nIf it doesn't exist in the graph, return **None**.",11],[11,"remove_edge","","Remove an edge and return its edge weight, or **None** if it didn't exist.",11],[11,"find_edge","","Lookup an edge from **a** to **b**.",11],[11,"find_edge_undirected","","Lookup an edge between **a** and **b**, in either direction.",11],[11,"reverse","","Reverse the direction of all edges",11],[11,"raw_nodes","","Access the internal node array",11],[11,"raw_edges","","Access the internal edge array",11],[11,"first_edge","","Accessor for data structure internals: the first edge in the given direction.",11],[11,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",11],[11,"without_edges","","Return an iterator over either the nodes without edges to them or from them.",11],[6,"Item","",""],[11,"next","","",12],[6,"Item","",""],[11,"next","","",13],[6,"Item","",""],[11,"next","","",14],[6,"Output","",""],[11,"index","","Index the **Graph** by **NodeIndex** to access node weights.",11],[6,"Output","",""],[11,"index_mut","","Index the **Graph** by **NodeIndex** to access node weights.",11],[6,"Output","",""],[11,"index","","Index the **Graph** by **EdgeIndex** to access edge weights.",11],[6,"Output","",""],[11,"index_mut","","Index the **Graph** by **EdgeIndex** to access edge weights.",11],[0,"visit","petgraph","Graph visitor algorithms.\n"],[3,"AsUndirected","petgraph::visit","Wrapper type for walking the graph as if it is undirected"],[3,"Reversed","","Wrapper type for walking edges the other way"],[3,"Dfs","","A depth first search (DFS) of a graph."],[12,"stack","","",15],[12,"discovered","","",15],[3,"DfsIter","","An iterator for a depth first traversal of a graph."],[3,"Bfs","","A breadth first search (BFS) of a graph."],[12,"stack","","",16],[12,"discovered","","",16],[3,"BfsIter","","An iterator for a breadth first traversal of a graph."],[5,"dijkstra","","Dijkstra's shortest path algorithm."],[8,"Graphlike","",""],[16,"NodeId","petgraph::visit::Graphlike",""],[8,"NeighborIter","petgraph::visit","A graph trait for accessing the neighbors iterator"],[16,"Iter","petgraph::visit::NeighborIter",""],[10,"neighbors","petgraph::visit","",17],[8,"VisitMap","",""],[10,"visit","","Return **true** if the value is not already present.",18],[10,"contains","","",18],[8,"Visitable","","Trait for GraphMap that knows which datastructure is the best for its visitor map"],[16,"Map","petgraph::visit::Visitable",""],[10,"visit_map","petgraph::visit","",19],[6,"Iter","",""],[11,"neighbors","petgraph::graph","",11],[6,"Iter","petgraph::visit",""],[11,"neighbors","petgraph::graphmap","",3],[6,"Iter","petgraph::visit",""],[11,"neighbors","","",20],[6,"Iter","",""],[11,"neighbors","","",21],[11,"visit","collections::bit","",22],[11,"contains","","",22],[11,"visit","std::collections::hash::set","",23],[11,"contains","","",23],[6,"NodeId","petgraph::visit",""],[6,"Map","",""],[11,"visit_map","petgraph::graph","",11],[6,"NodeId","petgraph::visit",""],[6,"Map","",""],[11,"visit_map","petgraph::graphmap","",3],[6,"NodeId","petgraph::visit",""],[6,"NodeId","",""],[6,"Map","",""],[11,"visit_map","","",20],[6,"Map","",""],[11,"visit_map","","",21],[11,"fmt","","",15],[11,"clone","","",15],[11,"new","","Create a new **Dfs**, using the graph's visitor map, and put **start**\nin the stack of nodes to visit.",15],[11,"empty","","Create a new **Dfs** using the graph's visitor map, and no stack.",15],[11,"move_to","","Keep the discovered map, but clear the visit stack and restart\nthe dfs from a particular node.",15],[11,"next","","Return the next node in the dfs, or **None** if the traversal is done.",15],[11,"clone","","",24],[11,"new","","",24],[6,"Item","",""],[11,"next","","",24],[11,"clone","","",16],[11,"new","","Create a new **Bfs**, using the graph's visitor map, and put **start**\nin the stack of nodes to visit.",16],[11,"next","","Return the next node in the dfs, or **None** if the traversal is done.",16],[11,"clone","","",25],[11,"new","","",25],[6,"Item","",""],[11,"next","","",25],[0,"unionfind","petgraph","**UnionFind\\<K\\>** is a disjoint-set data structure."],[3,"UnionFind","petgraph::unionfind","**UnionFind\\<K\\>** is a disjoint-set data structure. It tracks set membership of *n* elements\nindexed from *0* to *n - 1*. The scalar type is **K** which must be an unsigned integer type."],[11,"clone","","",26],[11,"fmt","","",26],[11,"new","","Create a new **UnionFind** of **n** disjoint sets.",26],[11,"find","","Return the representative for **x**.",26],[11,"find_mut","","Return the representative for **x**.",26],[11,"union","","Unify the two sets containing **x** and **y**.",26],[11,"into_labeling","","Return a vector mapping each element to its representative.",26],[8,"EdgeType","petgraph","A graph's edge type determines whether is has directed edges or not."],[10,"is_directed","","",27],[11,"eq","","",0],[11,"ne","","",0],[11,"fmt","","",0],[11,"clone","","",0],[11,"fmt","","",28],[11,"clone","","",28],[11,"fmt","","",29],[11,"clone","","",29],[11,"is_directed","","",28],[11,"is_directed","","",29],[11,"clone","","",30],[11,"eq","","Ptr compares by pointer equality, i.e if they point to the same value",30],[11,"partial_cmp","","",30],[11,"cmp","","Ptr is ordered by pointer value, i.e. an arbitrary but stable and total order.",30],[6,"Target","",""],[11,"deref","","",30],[11,"hash","","",30],[11,"fmt","","",30]],"paths":[[4,"EdgeDirection"],[3,"MinScored"],[3,"Edges"],[3,"GraphMap"],[3,"Nodes"],[3,"Neighbors"],[3,"Node"],[3,"Edge"],[8,"IndexType"],[3,"NodeIndex"],[3,"EdgeIndex"],[3,"Graph"],[3,"WithoutEdges"],[3,"Neighbors"],[3,"Edges"],[3,"Dfs"],[3,"Bfs"],[8,"NeighborIter"],[8,"VisitMap"],[8,"Visitable"],[3,"AsUndirected"],[3,"Reversed"],[3,"BitvSet"],[3,"HashSet"],[3,"DfsIter"],[3,"BfsIter"],[3,"UnionFind"],[8,"EdgeType"],[3,"Directed"],[3,"Undirected"],[3,"Ptr"]]};
initSearch(searchIndex);
