/**
 * 1. Implement the methods: 
 *      insert 
 *      contains  
 *      get_max
 *      get_min
 *      depth_first_traversal
 *          in_order_traversal
 *          pre_order_traversal
 *          post_order_traversal
 *      breadth_first_traversal
 */

class BinarySearchTree {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
    
    //insert the given value into the tree
    insert(value){
        let new_leaf = new BinarySearchTree(value)

        //NEED TO MAKE SURE THERE IS A RECURSION FOR MORE THAN 2 LEAFS ADDED:

        //leaf to left:
        if(this.value > new_leaf.value){
            this.left = new_leaf
            return this
        }
        //leaf to right:
        else if(this.value < new_leaf.value){
            this.right = new_leaf
            return this
        }
        //if leaf/root is already taken:
        return this
    }
    
    //returns true if the tree contains the value otherwise it returns false
    contains(value){
        
    }
    
    //returns the maximum value found in the tree
    get_max(){}
    
    //returns the minimum value found in the tree
    get_min(){}
    
    /**
     * process all the left children (lesser values), then this node's value, then
     * the right children (greater values). This is the most useful for a BST as it
     * respects the intrinsic ordering of the tree; values are processed from
     * smallest to greatest.
     * 
     * Call the function `fn` on the 
     * value of each node 
     * 
     */
    in_order_traversal(fn){}
    
    /**
     * process the current node value, then go down the left branch, then the right
     * branch. This processes parents before leaves, so can be used to copy a tree.
     * 
     * Call the function `fn` on the 
     * value of each node 
     * 
     */
    pre_order_traversal(fn){}
    
    /**
     * process all the left children, then right children, then this node's value. 
     * 
     * Call the function `fn` on the 
     * value of each node 
     * 
     */
    post_order_traversal(fn){}
    
    /**
     * start at level 0, then go through all nodes at level 1, then all nodes at 
     * level 2, etc. This is meaningful when tree level actually has some meaning; 
     * for example, a hierarchical org chart. It is less useful for a BST, where 
     * levels don't usually have intrinsic meaning.
     * 
     * Call the function `fn` on the 
     * value of each node 
     */
    breadth_first_traversal(fn){}
}

module.exports = {BinarySearchTree};