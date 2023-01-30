const {Stack} = require('../stack');

describe('test Stack', () =>{
    let stack;
    beforeEach(() =>{
        stack = new Stack();
    })
    
    describe('methods', ()=>{
        describe('len', ()=>{
            it('returns 0 for empty stack', ()=>{
                expect(stack.len()).toBe(0)
            })
            
            it('returns correct length after push', ()=>{
                stack.push(2)
                expect(stack.len()).toBe(1)
                stack.push(3)
                expect(stack.len()).toBe(2)
                stack.push(4)
                stack.push(5)
                stack.push(6)
                stack.push(10)
                stack.push(15)
                stack.push(23)
                stack.push(33)
                expect(stack.len()).toBe(9)
            })
        })
        
        describe('pop', ()=>{
            it('returns null for empty stack', ()=>{
                expect(stack.pop()).toBe(null)
            })
            
            it('pop respects order', ()=>{
                stack.push(100)
                stack.push(101)
                stack.push(105)
                expect(stack.pop()).toBe(105)
                expect(stack.pop()).toBe(101)
                expect(stack.pop()).toBe(100)
                expect(stack.pop()).toBe(null)
                expect(stack.pop()).toBe(null)
            })
        })
    })
    
    describe('LIFO: Last In, First Out', ()=>{
        it('adds and removes three items in a Last in First Out order', ()=>{
            stack.push(4)
            stack.push({'key': 5})
            stack.push('data structures')     
            expect(stack.pop()).toEqual('data structures');
            expect(stack.pop()).toEqual({'key': 5})
            expect(stack.pop()).toEqual(4)
        })
        
        it('handles interspersed add and remove', ()=>{
            stack.push(4)  
            expect(stack.pop()).toEqual(4)
            stack.push({'key': 5})
            expect(stack.pop()).toEqual({'key': 5})
            stack.push('data structures') 
            expect(stack.pop()).toEqual('data structures');
            expect(stack.pop()).toEqual(null); 
        })
    })
    
    it('adds and removes its own items', ()=>{
        const s2 = new Stack();
        stack.push(5);
        s2.push(10)
        expect(stack.pop()).toEqual(5)
        expect(stack.pop()).toEqual(null)
        expect(s2.pop()).toEqual(10)
        expect(s2.pop()).toEqual(null)
    })
})