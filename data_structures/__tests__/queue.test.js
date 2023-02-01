const {Queue} = require('../queue')

describe("A queue", function () {
    let queue,
      uniqueObj = { id: 123 };
      
    beforeEach(() => {
      queue = new Queue();
    });
    
    it('initializes the queue with a size of 0', ()=>{
        expect(queue.size).toBe(0)
        expect(queue.len()).toEqual(0)
    })
  
    it("adds and removes an item", function () {
      queue.enqueue(uniqueObj);
      expect(queue.dequeue()).toBe(uniqueObj);
    });
  
    it("returns `null` on underflow (empty)", function () {
      expect(queue.dequeue()).toBe(null);
      queue.enqueue(uniqueObj);
      expect(queue.dequeue()).toBe(uniqueObj);
      expect(queue.dequeue()).toBe(null);
    });
  
    // FIFO: First In, First Out
    it("adds and removes three items in a FIFO way", function () {
      queue.enqueue(5)
      queue.enqueue(uniqueObj)
      queue.enqueue("fullstack");
      expect(queue.dequeue()).toBe(5);
      expect(queue.dequeue()).toBe(uniqueObj);
      expect(queue.dequeue()).toBe("fullstack");
      expect(queue.dequeue()).toBe(null);
    });
  
    it("can handle interspersed add and remove", function () {
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
      queue.enqueue(2)
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(2);
      queue.enqueue(4);
      expect(queue.dequeue()).toBe(3);
      expect(queue.dequeue()).toBe(4);
      expect(queue.dequeue()).toBe(null);
    });
  
    // no globals!
    it("adds and removes its own items", function () {
      const q2 = new Queue();
      queue.enqueue("fullstack");
      q2.enqueue("JavaScript");
      expect(q2.dequeue()).toBe("JavaScript");
      expect(q2.dequeue()).toBe(null);
      expect(queue.dequeue()).toBe("fullstack");
      expect(queue.dequeue()).toBe(null);
    });
  });