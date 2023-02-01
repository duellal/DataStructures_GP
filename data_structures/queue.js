/**
 * A queue is a data structure whose primary purpose is to 
 * store and return elements in First In First Out order.
 * 
 * 1. Implement the Queue class using an array as the 
 * underlying storage structure. Make sure the Queue tests pass.
 * 
 * 2. Re-implement the Queue class, this time using the linked list implementation as the underlying storage 
 * structure. Make sure the Queue tests pass.
 * 
 * 3. What is the difference between using an array vs. a 
 * linked list when implementing a Queue?
 * 
 * Implement the following methods in both implementations:
 *      len
 *      enqueue
 *      dequeue
 * 
 * Note: Make sure one Queue class is commented out when 
 * running tests 
 */

const {SinglyLinkedList} = require('../data_structures/singly_linked_list')

//implemented with an array
class Queue{
    constructor(){
        
    }
    
    //returns the current length of the queue
    len(){}
    
    //adds the value to the end of the queue
    enqueue(value){}
    
    //removes the value from the front of the queue
    dequeue(){}
}

//implemented with a linked list
// class Queue{
//     constructor(){
        
//     }
    
//     //returns the current length of the queue
//     len(){}
    
//     //adds the value to the end of the queue
//     enqueue(value){}
    
//     //removes the value from the front of the queue
//     dequeue(){}
// }

module.exports = {
    Queue
}