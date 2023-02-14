const { DoublyLinkedList, Node } = require("../doubly_linked_list");

describe("Doubly Linked List", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe("Node class", () => {
    it("should take a value argument in the constructor and define next and previous to be null by default", () => {
      const node = new Node("test");
      expect(node.value).toEqual("test");
      expect(node.next).toEqual(null);
      expect(node.prev).toEqual(null);
    });

    describe("methods", () => {
      it("insert_after inserts a node after the current node provided", () => {
        const node = new Node(5);
        node.insert_after(10);
        expect(node.next.value).toBe(10);
      });

      it("insert_before inserts a node before the current node provided", () => {
        const node = new Node(5);
        node.insert_before(10);
        expect(node.prev.value).toBe(10);
      });

      it("delete removes the current node and sets the proper pointers of next and prev", () => {
        const node = new Node(5);
        node.insert_before(15);
        node.insert_after(10);
        const next = node.next;
        node.delete();
        expect(next.prev.value).toBe(15);
      });
    });
  });

  describe("Doubly Linked List Class", () => {
    it("should take no arguments in the constructor and define head and tail to be null", () => {
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    });

    it("has methods add_to_tail, remove_tail, add_to_head, remove_head, get_max, len, move_to_front, move_to_end, and delete", () => {
      expect(typeof list.add_to_tail).toEqual("function");
      expect(typeof list.remove_tail).toEqual("function");
      expect(typeof list.add_to_head).toEqual("function");
      expect(typeof list.remove_head).toEqual("function");
      expect(typeof list.get_max).toEqual("function");
      expect(typeof list.len).toEqual("function");
      expect(typeof list.move_to_front).toEqual("function");
      expect(typeof list.move_to_end).toEqual("function");
      expect(typeof list.delete).toEqual("function");
    });

    describe("methods", () => {
      describe("add_to_tail", () => {
        it("should take a value as a parameter", () => {
          // the length of a function returns how many parameters it has
          expect(list.add_to_tail.length).toEqual(1);
        });

        it("should use `Node` class to add nodes", () => {
          list.add_to_tail("first");
          expect(list.tail instanceof Node).toEqual(true);
        });

        it("should be able to add to tail without removing or overwriting existing nodes", () => {
          list.add_to_tail("first");
          expect(list.tail.value).toEqual("first");

          list.add_to_tail("second");
          expect(list.tail.value).toEqual("second");
          expect(list.tail.prev.value).toEqual("first");
        });

        it("if the linked list consists of a single node after adding to tail, that node should be both the head and the tail", () => {
          list.add_to_tail("only");
          expect(list.head.value).toEqual("only");
          expect(list.head).toEqual(list.tail);
          expect(list.head.next).toEqual(null);
          expect(list.head.prev).toEqual(null);
        });
      });

      describe("remove_tail", () => {
        it("should return the `value` of the removed tail node", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");
          expect(list.remove_tail()).toEqual("third");
          expect(list.remove_tail()).toEqual("second");
          expect(list.remove_tail()).toEqual("first");
        });

        it("should reassign the `tail` after the current tail node is removed", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");

          list.remove_tail(); // remove 'third'
          expect(list.tail.value).toEqual("second");

          list.remove_tail(); // remove 'second'
          expect(list.tail.value).toEqual("first");
        });

        it("should make sure the `next` of any newly appointed tail is null", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");

          list.remove_tail();
          expect(list.tail.value).toEqual("second");
          expect(list.tail.next).toEqual(null);

          list.remove_tail();
          expect(list.tail.value).toEqual("first");
          expect(list.tail.next).toEqual(null);
        });

        it("returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)", () => {
          expect(list.remove_tail()).toEqual(null);

          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");
          list.remove_tail();
          list.remove_tail();
          list.remove_tail();
          expect(list.remove_tail()).toEqual(null);
        });
      });

      describe("add_to_head", () => {
        it("should take a value as a parameter", () => {
          // the length of a function returns how many parameters it has
          expect(list.add_to_head.length).toEqual(1);
        });

        it("should use `Node` class to add nodes", () => {
          list.add_to_head("first");
          expect(list.head instanceof Node).toEqual(true);
        });

        it("should be able to add to head without removing or overwriting existing nodes", () => {
          list.add_to_head("first");
          expect(list.head.value).toEqual("first");

          list.add_to_head("zeroth");
          expect(list.head.value).toEqual("zeroth");
          expect(list.head.next.value).toEqual("first");
        });

        it("if the linked list consists of a single node after adding to head, that node should be both the head and the tail", () => {
          list.add_to_head("only");
          expect(list.head.value).toEqual("only");
          expect(list.head).toEqual(list.tail);
          expect(list.head.next).toEqual(null);
          expect(list.head.prev).toEqual(null);
        });
      });

      describe("remove_head", () => {
        it("should return the `value` of the removed head node", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");

          expect(list.remove_head()).toEqual("first");
          expect(list.remove_head()).toEqual("second");
          expect(list.remove_head()).toEqual("third");
        });

        it("should reassign the `head` after the current head node is removed", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");

          list.remove_head(); // remove 'first'
          expect(list.head.value).toEqual("second");

          list.remove_head(); // remove 'second'
          expect(list.head.value).toEqual("third");
        });

        it("should make sure the `previous` of any newly appointed head is null", () => {
          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");

          list.remove_head();
          expect(list.head.value).toEqual("second");
          expect(list.head.prev).toEqual(null);

          list.remove_head();
          expect(list.head.value).toEqual("third");

          expect(list.head.prev).toEqual(null);
        });

        it("returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)", () => {
          expect(list.remove_head()).toEqual(null);

          list.add_to_tail("first");
          list.add_to_tail("second");
          list.add_to_tail("third");
          list.remove_head();
          list.remove_head();
          list.remove_head();
          expect(list.remove_head()).toEqual(null);
        });

        it("should reset head and tail to null when last node is removed", () => {
          list.add_to_tail("first");
          list.remove_head();
          expect(list.head).toEqual(null);
          expect(list.tail).toEqual(null);
        });
      });

      describe("get_max", () => {
        it("returns the max value within the list", () => {
          // console.log(`TEST list 1:`, list)

          expect(list.get_max()).toEqual(null);
          list.add_to_head(10);
          // console.log(`TEST list 2:`, list)

          expect(list.get_max()).toEqual(10);
          list.add_to_head(100);
          // console.log(`TEST list 3:`, list.add_to_head(100))
          // console.log(`TEST list 4:`, list.add_to_head(55))


          expect(list.get_max()).toEqual(100);
          list.add_to_head(55);
          console.log(`TEST list 4:`, list)

          expect(list.get_max()).toEqual(100);
        });
      });

      describe("len", () => {
        it("returns the length of the list", () => {
          expect(list.len()).toEqual(0);
          list.add_to_head(10);
          expect(list.len()).toEqual(1);
          list.add_to_head(100);
          expect(list.len()).toEqual(2);
          list.add_to_head(55);
          expect(list.len()).toEqual(3);
        });
      });

      describe("move_to_front", () => {
        it("removes the input node from its current spot in the list and inserts it as the new head", () => {
          list.add_to_tail(3);
          list.add_to_head(1);
          expect(list.head.value).toEqual(1);
          expect(list.tail.value).toEqual(3);

          list.move_to_front(list.tail);
          expect(list.head.value).toEqual(3);
          expect(list.tail.value).toEqual(1);

          list.add_to_head(29);
          list.move_to_front(list.head.next);
          expect(list.head.value).toEqual(3);
          expect(list.head.next.value).toEqual(29);
          expect(list.len()).toBe(3);
        });
      });

      describe.only("move_to_end", () => {
        it("removes the input node from its current spot in the list and inserts it as the new tail", () => {
          list.add_to_tail(3);
          list.add_to_head(1);
          expect(list.head.value).toEqual(1);
          expect(list.tail.value).toEqual(3);

          list.move_to_end(list.head);
          expect(list.head.value).toEqual(3);
          expect(list.tail.value).toEqual(1);

          list.add_to_tail(29);
          list.move_to_end(list.head.next);
          expect(list.tail.value).toEqual(1);
          expect(list.tail.prev.value).toEqual(29);
          expect(list.len()).toBe(3);
        });
      });

      describe("delete", () => {
        it("removes a node from the list with one node", () => {
          list.add_to_head(5);
          list.delete(list.head);
          expect(list.head).toEqual(null);
          expect(list.tail).toEqual(null);
          expect(list.len()).toBe(0);
        });

        it("removes a node from the list with multiple nodes", () => {
          list.add_to_tail(1);
          list.add_to_head(9);
          list.add_to_tail(6);

          list.delete(list.head);
          expect(list.head.value).toEqual(1);
          expect(list.tail.value).toEqual(6);
          expect(list.len()).toBe(2);

          list.delete(list.head);
          expect(list.head.value).toEqual(6);
          expect(list.tail.value).toEqual(6);
          expect(list.len()).toBe(1);
        });
      });
    });
  });
});
