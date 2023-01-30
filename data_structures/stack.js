/**
 * A stack is a data structure whose primary purpose is to store and return elements in Last In First Out order. 
 * 
 * 1. Implement the Stack class using an array as the 
 * underlying storage structure. Make sure the Stack tests 
 * pass.
 * 
 * 2. Re-implement the Stack class, this time using the 
 * linked list implementation as the underlying storage 
 * structure. Make sure the Stack tests pass.
 * 
 * 3. What is the difference between using an array vs. a 
 * linked list when implementing a Stack?
 * 
 * Implement the following methods:
 *      len
 *      push
 *      pop
 * 
 * Note: Make sure one Queue class is commented out when 
 * running tests 
 */
const {SinglyLinkedList} = require('../data_structures/singly_linked_list')

//implemented with array
class Stack {
    constructor(){
        this.size = 0;
        this.storage = []
    }
    
    //returns the length of the stack
    len(){
        return this.size;
    }
    
    //adds the value to the end of the stack
    push(value){
        this.size += 1;
        this.storage.push(value);
    }
    
    //removes and returns the value from the end of the 
    //stack
    pop(){
        if(this.size === 0){
            return null
        }
        this.size -= 1;
        return this.storage.pop();
    }
}

//implemented with linked list
// class Stack {
//     constructor(){}
    
//     //returns the length of the stack
//     len(){}
    
//     //adds the value to the end of the stack
//     push(value){}
    
//     //removes and returns the value from the end of the 
//     //stack
//     pop(){}
// }

module.exports = {Stack}