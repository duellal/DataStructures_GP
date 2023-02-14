const {BinarySearchTree} = require('../bst')

describe('Binary Search Tree', ()=>{
    let tree; 
    let testArr;
    const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]
    
    beforeEach(()=>{
        tree = new BinarySearchTree(20);
        testArr = []
    })
    
    it('take a value argument in the constructor, define `left` and `right` pointers to be null',()=>{
        expect(tree.value).toEqual(20);
        expect(tree.left).toEqual(null);
        expect(tree.right).toEqual(null);
    })
    
    it('has methods insert, contains, get_max, get_min, in_order_traversal, pre_order_traversal, post_order_traversal, breadth_first_traversal', ()=>{
        expect(typeof tree.insert).toEqual('function')
        expect(typeof tree.contains).toEqual('function')
        expect(typeof tree.get_max).toEqual('function')
        expect(typeof tree.get_min).toEqual('function')
        expect(typeof tree.in_order_traversal).toEqual('function')
        expect(typeof tree.pre_order_traversal).toEqual('function')
        expect(typeof tree.post_order_traversal).toEqual('function')
        expect(typeof tree.breadth_first_traversal).toEqual('function')
    })
    
    describe.only('insert method', ()=>{
        it('makes nodes on the correct branches, without overwriting existing nodes',()=>{
            tree.insert(12)
            tree.insert(22)
            expect(tree.value).toEqual(20);
            expect(tree.left.value).toEqual(12);
            expect(tree.right.value).toEqual(22);
        })
        
        it('sorts values when adding',()=>{
            valuesToInsert.forEach(val => tree.insert(val))
            expect(tree.value).toEqual(20);
            expect(tree.left.value).toEqual(15);
            expect(tree.right.value).toEqual(25);
            expect(tree.left.left.value).toEqual(5);
            expect(tree.left.left.right.left.left.left.value).toEqual(11);
            expect(tree.right.right.right.left.left.right.left.right.value).toEqual(34);
        })
    })
        
    describe('contains method', ()=>{
        it("returns true if passed a value that exists in the tree", () => {
            valuesToInsert.forEach((value) => {
              tree.insert(value);
            });
            valuesToInsert.forEach((value) => {
              expect(tree.contains(value)).toEqual(true);
            });
          });
        
          it("returns false if passed a value that exists in the tree", () => {
            valuesToInsert.forEach((value) => {
              tree.insert(value);
            });
      
            const valuesNotInserted = [6, 23, 37, 51];
            valuesNotInserted.forEach((value) => {
              expect(tree.contains(value)).toEqual(false);
            });
          });
    })
    
    describe('get_max method', ()=>{
        it("returns the maximum value found in the tree", () => {
            valuesToInsert.forEach((value) => {
              tree.insert(value);
            });
            
            expect(tree.get_max()).toEqual(50)
          });
    })
    
    describe('get_min method', ()=>{
        it("returns the minimum value found in the tree", () => {
            valuesToInsert.forEach((value) => {
              tree.insert(value);
            });
            
            expect(tree.get_min()).toEqual(0)
          });
    })
    
    describe('traversals', ()=>{
        beforeEach(()=>{
            valuesToInsert.forEach((value) => {
                tree.insert(value);
              });
        })
        
        describe('in_order_traversal method', ()=>{
            it('returns the value of the nodes with depth-first in-order traversal', ()=>{
                tree.in_order_traversal(el => {
                    testArr.push(el)
                })
                expect(testArr).toEqual([0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45,
                    50,])
            })
        })
        
        describe('pre_order_traversal method', ()=>{
            it('returns the value of the nodes with depth-first pre-order traversal', ()=>{
                tree.pre_order_traversal(el => {
                    testArr.push(el)
                })
                expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31,
                    34,])
            })
        })
        
        describe('post_order_traversal method', ()=>{
            it('returns the value of the nodes with depth-first post-order traversal', ()=>{
                tree.post_order_traversal(el => {
                    testArr.push(el)
                })
                expect(testArr).toEqual([ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25,
                    20,])
            })
        })
        
        describe('breadth_first_traversal method', ()=>{
            it('returns the value of the nodes with breadth_first_traversal', ()=>{
                tree.breadth_first_traversal(el => {
                    testArr.push(el)
                })
                expect(testArr).toEqual([ 20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31,
                    34,])
            })
        })
        
    })
})