/**
 * Node
 * 
 * constructor takes a value and a next_node
 * Set the node's value to the provided value
 * Set the node's next pointer to the provided node. If no node provided set to null
 * 
 * Implement the following methods for each node:
 *      get_value
 *      get_next
 *      set_next
 */

class Node {
    constructor(){
        
    }
    
    //returns the node's value
    get_value(){}
    
    //returns the node's next node
    get_next(){}
    
    //set the node's next node pointer to the passed in node
    set_next(node){
    }
}

/**
 * each node points to the `next` node
 * 
 * Implement the following methods:
 *      add_to_tail
 *      remove_tail
 *      add_to_head
 *      remove_head
 *      contains
 *      get_max
 */

class SinglyLinkedList {
    constructor(){}
    
    //add a new node with the given value to the tail of the list
    add_to_tail(value){
        
    }
    
    //returns the value of the removed node or null if list is empty
    remove_tail(){}
    
    //add a new node with the given value to the head of the list
    add_to_head(value){}
    
    //returns the value of the removed node or null if list is empty
    remove_head() {}
    
    //returns true if the list contains the value otherwise returns false
    contains(value){}
    
    //returns the max value within the list
    get_max(){}
    
}

module.exports = {
    Node,
    SinglyLinkedList
}