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
    constructor(value){
        this.value = value
        this.next = null
    }
    
    //returns the node's value
    get_value(){
        return this.value
    }
    
    //returns the node's next node
    get_next(){
        return this.next
    }
    
    //set the node's next node pointer to the passed in node
    set_next(value){
        this.next = value
        return this.next
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
    constructor(){
        this.head = null
        this.tail = null 
    }
    
    //add a new node with the given value to the tail of the list
    add_to_tail(value){
        const new_node = new Node(value)

        if(!this.head){
            this.head = new_node
            this.tail = new_node
        }
        else {
            this.tail.next = new_node
            this.tail = new_node
        }
    }
    
    //returns the value of the removed node or null if list is empty
    remove_tail(){
        if(!this.tail){
            return null
        }

        let value = this.tail.value
        let head = this.head

        if(this.tail === this.head){
            this.head = null
            this.tail = null
            return value
        }

        while(this.head.next.next !== null){
            this.head = this.head.next
        }
        
       this.tail = this.head
       this.tail.next = null
       this.head = head
       this.head.next = head.next

        return value
    }
    
    //add a new node with the given value to the head of the list
    add_to_head(value){
        const new_node = new Node(value)

        if(!this.head){
            this.head = new_node
            this.tail = new_node
        } else{
            new_node.next = this.head
            this.head = new_node
        }
    }
    
    //returns the value of the removed node or null if list is empty
    remove_head() {
        if(!this.head){
            return null
        }

        let value = this.head.value

        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return value
        } else {
            this.head = this.head.next
            this.head.previous = null
            return value
        }
    }
    
    //returns true if the list contains the value otherwise returns false
    contains(value){
        if(!this.head){
            return false
        }
        else if(this.head.value === value){
            return true
        }
        else {
            let current_node = this.head
            
            while(current_node !== null){
                if(current_node.value === value){
                    return true
                }
                current_node = current_node.next
            }
            return false
        }
    }
    
    //returns the max value within the list
    get_max(){
        if(!this.head){
            return null
        }
        else if(this.head === this.tail){
            return this.head.value
        }
        else {
            let maxNum = Number.MIN_VALUE
            
            while(this.head !== null){
                if(maxNum < this.head.value){
                    maxNum = this.head.value
                }
                this.head = this.head.next
            }

            return maxNum
        }
    }
    
}

module.exports = {
    Node,
    SinglyLinkedList
}