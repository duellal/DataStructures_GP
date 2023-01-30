/**
 * 1. Implement the methods: 
 *      insert 
 *      contains  
 *      get_max
 *      get_min
 *      for_each
 *      depth_first_traversal
 *          in_order_traversal
 *          pre_order_traversal
 *          post_order_traversal
 *      breadth_first_traversal
 */

class BinarySearchTree {
    constructor(){
        
    }
    
    //insert the given value into the tree
    insert(value){
        
    }
    
    //returns true if the tree contains the value otherwise it returns false
    contains(value){
        
    }
    
    //returns the maximum value found in the tree
    get_max(){}
    
    //returns the minimum value found in the tree
    get_min(){}
    
    // Calls the function `fn` on the value of each node
    for_each(fn){}
    
    /**
     * process all the left children (lesser values), then this node's value, then
     * the right children (greater values). This is the most useful for a BST as it
     * respects the intrinsic ordering of the tree; values are processed from
     * smallest to greatest.
     * 
     * Returns the value of every node, starting with the given node,
     * 
     */
    in_order_traversal(){}
    
    /**
     * process the current node value, then go down the left branch, then the right
     * branch. This processes parents before leaves, so can be used to copy a tree.
     * 
     * Returns the value of every node, starting with the given node,
     * 
     */
    pre_order_traversal(){}
    
    /**
     * process all the left children, then right children, then this node's value. 
     * 
     * Returns the value of every node, starting with the given node,
     * 
     */
    post_order_traversal(){}
    
    /**
     * start at level 0, then go through all nodes at level 1, then all nodes at 
     * level 2, etc. This is meaningful when tree level actually has some meaning; 
     * for example, a hierarchical org chart. It is less useful for a BST, where 
     * levels don't usually have intrinsic meaning.
     * 
     * Returns the value of every node, starting with the given node,
     */
    breadth_first_traversal(){}
}

module.exports = BinarySearchTree;