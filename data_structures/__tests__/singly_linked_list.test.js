const {Node, SinglyLinkedList} = require('../singly_linked_list')

describe('Singly Linked List', ()=>{
    let list;
    
    beforeEach(() =>{
        list = new SinglyLinkedList();
    })
    
    describe('Node Class', ()=>{
        it('should take a value argument in the constructor and define next to be null by default', () => {
            const node = new Node('test')
            expect(node.value).toEqual('test')
            expect(node.next).toEqual(null)
        })
        
        describe('methods', ()=>{
            it("get_value returns the node's value", () => {
                const node = new Node(5)
                expect(node.get_value()).toEqual(5)
            })
            
            it("get_next returns the node's next pointer reference", () => {
                const node = new Node(5)
                const next_node = new Node(10)
                node.next = next_node
                expect(node.get_next()).toEqual(next_node)
            })
            
            it("set_next set's the node's next pointer", () => {
                const node = new Node(5)
                node.set_next(new Node(10))
                expect(node.next.value).toEqual(10)
            })
        })
    })
    
    describe('SinglyLinkedList Class', ()=>{
        it('should take no arguments in the constructor and define head and tail to be null', () => {
            expect(list.head).toEqual(null)
            expect(list.tail).toEqual(null)
        })
        
        it('has methods `add_to_tail`, `add_to_head`, `remove_head`, `remove_tail`, `contains`, and `get_max`', () => {
            expect(typeof list.add_to_tail).toEqual('function')
            expect(typeof list.add_to_head).toEqual('function')
            expect(typeof list.remove_head).toEqual('function')
            expect(typeof list.remove_tail).toEqual('function')
            expect(typeof list.contains).toEqual('function')
            expect(typeof list.get_max).toEqual('function')
          })
          
          describe('methods', ()=>{
            describe('add_to_tail', ()=>{
                it('should take a value as a parameter', () => {
                    // the length of a function returns how many parameters it has
                    expect(list.add_to_tail.length).toEqual(1)
                  })
                
                  it('should use `Node` class to add nodes', () => {
                    list.add_to_tail('first')
                    expect(list.tail instanceof Node).toEqual(true)
                  })
                  
                  it('should be able to add to tail without removing or overwriting existing nodes', () => {
                    list.add_to_tail('first')
                    expect(list.tail.value).toEqual('first')
            
                    list.add_to_tail('second')
                    expect(list.tail.value).toEqual('second')
                  })
                  
                  it('if the linked list consists of a single node after adding to tail, that node should be both the head and the tail', () => {
                    list.add_to_tail('only')
                    expect(list.head.value).toEqual('only')
                    expect(list.head).toEqual(list.tail)
                    expect(list.head.next).toEqual(null)
                  })
            
            })
            
            describe('remove_tail', ()=>{
                it('should return the `value` of the removed tail node', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')

                    expect(list.remove_tail()).toEqual('third')
                    expect(list.remove_tail()).toEqual('second')
                    expect(list.remove_tail()).toEqual('first')
                  })
                  
                  it('should reassign the `tail` after the current tail node is removed', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
            
                    list.remove_tail() // remove 'third'
                    expect(list.tail.value).toEqual('second')
            
                    list.remove_tail() // remove 'second'
                    expect(list.tail.value).toEqual('first')
                  })
                  
                  it('should make sure the `next` of any newly appointed tail is null', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
            
                    list.remove_tail()
                    expect(list.tail.value).toEqual('second')
                    expect(list.tail.next).toEqual(null)
            
                    list.remove_tail()
                    expect(list.tail.value).toEqual('first')
                    expect(list.tail.next).toEqual(null)
                  })
                  
                  it('returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)', () => {
                    expect(list.remove_tail()).toEqual(null)
            
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
                    list.remove_tail()
                    list.remove_tail()
                    list.remove_tail()
                    expect(list.remove_tail()).toEqual(null)
                  })
            })
            
            describe('add_to_head', ()=>{
                it('should take a value as a parameter', () => {
                    // the length of a function returns how many parameters it has
                    expect(list.add_to_head.length).toEqual(1)
                  })
            
                  it('should use `Node` class to add nodes', () => {
                    list.add_to_head('first')
                    expect(list.head instanceof Node).toEqual(true)
                  })
            
                  it('should be able to add to head without removing or overwriting existing nodes', () => {
                    list.add_to_head('first')
                    expect(list.head.value).toEqual('first')
            
                    list.add_to_head('zeroth')
                    expect(list.head.value).toEqual('zeroth')
                    expect(list.head.next.value).toEqual('first')
                  })
            
                  it('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
                    list.add_to_head('only')
                    expect(list.head.value).toEqual('only')
                    expect(list.head).toEqual(list.tail)
                    expect(list.head.next).toEqual(null)
                  })
            })
            
            describe('remove_head', ()=>{
                it('should return the `value` of the removed head node', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
                    expect(list.remove_head()).toEqual('first')
                    expect(list.remove_head()).toEqual('second')
                    expect(list.remove_head()).toEqual('third')
                  })
            
                  it('should reassign the `head` after the current head node is removed', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
            
                    list.remove_head() // remove 'first'
                    expect(list.head.value).toEqual('second')
            
                    list.remove_head() // remove 'second'
                    expect(list.head.value).toEqual('third')
                  })
            
                  it('should make sure the `previous` of any newly appointed head is null', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
            
                    list.remove_head()
                    expect(list.head.value).toEqual('second')
                    expect(list.head.previous).toEqual(null)
            
                    list.remove_head()
                    expect(list.head.value).toEqual('third')
                    expect(list.head.previous).toEqual(null)
                  })
            
                  it('returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)', () => {
                    expect(list.remove_head()).toEqual(null)
            
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
                    list.remove_head()
                    list.remove_head()
                    list.remove_head()
                    expect(list.remove_head()).toEqual(null)
                  })
            
                  it('should reset head and tail to null when last node is removed', () => {
                    list.add_to_tail('first')
                    list.remove_head()
                    expect(list.head).toEqual(null)
                    expect(list.tail).toEqual(null)
                  })
            })
            
            describe('contains', ()=>{
                it('returns false for an empty list', () => {
                    expect(list.contains('second')).toEqual(false)
                  })
                  
                it('returns true if the value is in the list', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
                    expect(list.contains('second')).toEqual(true)
                    expect(list.contains('first')).toEqual(true)
                    expect(list.contains('third')).toEqual(true)
                  })
                  
                  it('returns false if the value is NOT in the list', () => {
                    list.add_to_tail('first')
                    list.add_to_tail('second')
                    list.add_to_tail('third')
                    expect(list.contains(2)).toEqual(false)
                  })
            })
            
            describe('get_max', ()=>{
                it('returns null for an empty list', () => {
                    expect(list.get_max()).toEqual(null)
                  })
                  
                it('returns true if the value is in the list', () => {
                    list.add_to_tail(10)
                    list.add_to_tail(150)
                    list.add_to_tail(0)
                    expect(list.get_max()).toEqual(150)
                  })
            })
          })
    })
})