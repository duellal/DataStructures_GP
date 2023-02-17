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

        if(this === null){ 
            return new_leaf
        }
        else{
            this.insertLeaf(this, new_leaf)
        }
        return this
    }

    insertLeaf(tree, newLeaf){
        if(newLeaf.value < tree.value){
            if(tree.left === null){
                tree.left = newLeaf
            }
            else{
                this.insertLeaf(tree.left, newLeaf)
            }
        }
        else{
            if(tree.right === null){
                tree.right = newLeaf
            }
            else{
                this.insertLeaf(tree.right, newLeaf)
            }
        }
    }

    
    
    //returns true if the tree contains the value otherwise it returns false
    contains(value){
        let current_leaf = this

        while(current_leaf !== null){
            if(current_leaf.value === value){
                return true
            }
            else if(value < current_leaf.value){
                current_leaf = current_leaf.left
            }
            else{
                current_leaf = current_leaf.right
            }
        }
        return false
    }
    
    //returns the maximum value found in the tree
    get_max(){
        if(!this){
            return null
        }
        else if(this.left === null && this.right === null){
            return this.value
        }
        
        let max_value = this
        while(max_value.right){
            max_value = max_value.right
        }
        return max_value.value
    }
    
    //returns the minimum value found in the tree
    get_min(){
        if(!this){
            return null
        }
        else if(this.left === null && this.right === null){
            return this.value
        }
        
        let min_value = this
         while(min_value.left){
            min_value = min_value.left
         }
        return min_value.value
    }
    
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
    in_order_traversal(fn){
        if(this.left){
            this.left.in_order_traversal(fn)
        }
        fn(this.value)

        if(this.right){
            this.right.in_order_traversal(fn)
        }
    }
    
    /**
     * process the current node value, then go down the left branch, then the right
     * branch. This processes parents before leaves, so can be used to copy a tree.
     * 
     * Call the function `fn` on the 
     * value of each node 
     * 
     */
    pre_order_traversal(fn){
        fn(this.value)

        if(this.left){
            this.left.pre_order_traversal(fn)
        }

        if(this.right){
            this.right.pre_order_traversal(fn)
        }
    }
    
    /**
     * process all the left children, then right children, then this node's value. 
     * 
     * Call the function `fn` on the 
     * value of each node 
     * 
     */
    post_order_traversal(fn){
        if(this.left){
            this.left.post_order_traversal(fn)
        }

        if(this.right){
            this.right.post_order_traversal(fn)
        }

        fn(this.value)
    }
    
    /**
     * start at level 0, then go through all nodes at level 1, then all nodes at 
     * level 2, etc. This is meaningful when tree level actually has some meaning; 
     * for example, a hierarchical org chart. It is less useful for a BST, where 
     * levels don't usually have intrinsic meaning.
     * 
     * Call the function `fn` on the 
     * value of each node 
     */
    breadth_first_traversal(fn){
        let q = []

        q.push(this)

        while(q.length > 0){
            let current_leaf = q.shift()

            if(current_leaf.left){
                q.push(current_leaf.left)
            }
            if(current_leaf.right){
                q.push(current_leaf.right)
            }

            fn(current_leaf.value)
        }

    }
}

module.exports = {BinarySearchTree};