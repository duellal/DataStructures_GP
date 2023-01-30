/**
 * Node
 * 
 * constructor takes a value and a next_node
 * Set the node's value to the provided value
 * Set the node's next pointer to the provided node. If no node provided set to null
 * Set the node's prev pointer to the provided node. If no node provided set to null
 * 
 * Implement the following methods for each node:
 *      insert_after
 *      insert_before
 *      delete
 */

class Node {
    constructor(){
        
    }
    
    //Wrap the given value in a ListNode and insert it
    //after this node. Note that this node could already
    //have a next node it is point to.
    insert_after(value){}
    
    //Wrap the given value in a ListNode and insert it
    //before this node. Note that this node could already
    //have a previous node it is point to.
    insert_before(value){}
    
    //Rearranges this ListNode's previous and next pointers
    //accordingly, effectively deleting this ListNode
    delete(){}
}

/**
 * each node points to the `next` node and the `prev` node
 * 
 * Implement the following methods:
 *      add_to_tail
 *      remove_tail
 *      add_to_head
 *      remove_head
 *      get_max
 *      len
 *      move_to_front
 *      move_to_end
 *      delete
 */

class DoublyLinkedList {
    constructor(){}
    
    //add a new node with the given value to the tail of the list
    add_to_tail(value){}
    
    //returns the value of the removed node or null if list is empty
    remove_tail(){}
    
    //add a new node with the given value to the head of the list
    add_to_head(value){}
    
    //returns the value of the removed node or null if list is empty
    remove_head() {}
    
    //returns the max value within the list
    get_max(){}
    
    //returns the length of the list
    len(){}
    
    //removes the input node from its current spot in the 
    // List and inserts it as the new head node of the List
    move_to_front(){}
    
    //removes the input node from its current spot in the 
    // List and inserts it as the new tail node of the List
    move_to_end(){}
    
    //removes a node from the list 
    //handles cases where the node was the head or tail
    delete(){}
    
}

module.exports = {
    Node,
    DoublyLinkedList
}