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
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
    
    //Wrap the given value in a ListNode and insert it
    //after this node. Note that this node could already
    //have a next node it is point to.
    insert_after(value){
        let new_node = new Node(value)
        let current_node = this

        new_node.prev = current_node
        new_node.next = current_node.next
        current_node.next = new_node
    }
    
    //Wrap the given value in a ListNode and insert it
    //before this node. Note that this node could already
    //have a previous node it is point to.
    insert_before(value){
        let new_node = new Node(value)
        let current_node = this

        new_node.prev = current_node.prev
        new_node.next = current_node
        current_node.prev = new_node
    }
    
    //Rearranges this ListNode's previous and next pointers
    //accordingly, effectively deleting this ListNode
    delete(){
        let current_node = this
        let previous_node = this.prev
        let next_node = this.next
        
        next_node.prev = current_node.prev
        previous_node.next = current_node.next
    }
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
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
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