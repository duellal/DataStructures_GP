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
    }
    
    //add a new node with the given value to the tail of the list
    add_to_tail(value){
        let new_node = new Node(value)

        if(!this.tail){
            this.head = new_node
            this.tail = new_node
            
            return this
        }

        let current_tail = this.tail
        new_node.prev = current_tail
        current_tail.next = new_node
        this.tail = new_node

        return this
    }
    
    //returns the value of the removed node or null if list is empty
    remove_tail(){
        if(!this.tail){
            return null
        }

        let tail = this.tail

        if(this.head === this.tail){
            this.head = null
            this.tail = null

            return tail.value
        }

        this.tail = tail.prev
        this.tail.next = null

        return tail.value
    }
    
    //add a new node with the given value to the head of the list
    add_to_head(value){
        let new_node = new Node(value)

        if(!this.head){
            this.head = new_node
            this.tail = new_node

            return this
        }

        let current_head = this.head

        this.head = new_node
        new_node.next = current_head
        current_head.prev = new_node

        return this
    }
    
    //returns the value of the removed node or null if list is empty
    remove_head() {
        if(!this.head){
            return null
        }

        let head = this.head

        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return head.value
        }

        this.head = head.next
        this.head.prev = null
        return head.value
    }
    
    //returns the max value within the list
    get_max(){
        if(!this.head){
            return null
        }
        else if(this.head === this.tail){
            return this.head.value
        }

        let maxNum = Number.MIN_VALUE
        let curr_node = this.head;

        while(curr_node !== null){
            if(maxNum < curr_node.value){
                maxNum = curr_node.value
            }
            
            curr_node = curr_node.next
        }

        return maxNum
    }
    
    //returns the length of the list
    len(){
        let current_node = this.head
        let length = 0

        while(current_node !== null){
            length += 1

            current_node = current_node.next
        }

        return length
    }
    
    //removes the input node from its current spot in the 
    // List and inserts it as the new head node of the List
    move_to_front(node){
        let current_head = this.head
        let node_prev = node.prev
        let node_next = node.next

        if(node === this.tail){
            this.tail = node_prev
            this.tail.next = node_next
            this.head = node
            node.next = current_head
            current_head.prev = node

            return this
        }

        node_prev.next = node_next
        node_next.prev = node_prev
        this.head = node
        current_head.prev = node
        node.prev = null
        node.next = current_head

        return this
    }
    
    //removes the input node from its current spot in the 
    // List and inserts it as the new tail node of the List

    //STOPPED HERE:
    move_to_end(node){
        let current_tail = this.tail
        let node_prev = node.prev
        let node_next = node.next

        if(node === this.head){
            this.head = node_next
            this.head.next = node_next
            this.tail = node
            node.next = null
            node.prev = current_tail

            return this
        }

        console.log(`node:`, node)
        console.log(`current_tail:`, current_tail)
        console.log(`node_prev:`, node_prev)
        console.log(`node_next:`, node_next)


        node_prev.next = node_next
        node_next.prev = node_prev
        this.tail = node
        node.prev = current_tail
        node.next = null
        current_tail.next = node

        console.log(`NEW NODE:`, node)

        return this
    }
    
    //removes a node from the list 
    //handles cases where the node was the head or tail
    delete(node){
        if(node === this.head){
            return
        }
        else if(node === this.tail){
            return
        }

        return
    }
    
}

module.exports = {
    Node,
    DoublyLinkedList
}