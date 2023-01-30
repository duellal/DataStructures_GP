# DataStructures_GP

Repo to work through as a Guided Practice with lectures

## Types of Data Structures

* Binary Search Tree (BST)
    - Binary search trees are a data structure that enforce an ordering over 
the data they store. That ordering in turn makes it a lot more efficient 
at searching for a particular piece of data in the tree. 
    - A *Binary Tree* is one for which every node has up to two children, a `left` and/or `right` child (or `lesser`/`greater` if you prefer). 
    - It is a *Search* tree if all nodes respect an *order*: 
        - all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree.
    - Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

* Linked List
    - Singly
        - each node points to the `next` node
    - Doubly
        - each node points both to the `next` node and to the `previous` node
    
 Linked Lists are collections of *nodes* — wrapper structures which encapsulate a `value` and one or more *pointers* (references) to other nodes. The Linked List instance typically only has a reference to a so-called *handle* node, e.g. the `head` (first node) — it has no direct knowledge of other nodes in the list. However, the handle then points to a `next` node, which itself points to another `next` node, and so on and so forth. A list ends when a node's `next` pointer is `null` or `undefined`. The act of starting from a handle and visiting nodes in sequence is known as "traversing" a linked list.

* Queue
    - A queue is a data structure whose primary purpose is to store and return elements in First In First Out order. 

* Stack
    - A stack is a data structure whose primary purpose is to store and return elements in a Last In First Out order.

## Recursive Problem Solving
Any problem that can be solved iteratively (that is, using "for" or "while" loops) can also be solved recursively (and vice versa). However, this does not mean that the iterative solution for a given problem is as easy to implement as the recursive solution (and vice versa).

To help you solve problems in a recursive manner, follow this methodology:

1. Identify the simplest possible input for the problem. For example, if the input to your function is a number, the simplest possible input might be 0. If it's an array, it might be an empty array or an array with one element.

2. Solve the problem specifically for the "simplest possible input". This is known as the "base case".

3. Solve the problem specifically for the "second simplest possible input", making sure to a. invoke the function recursively with the simplest possible input. b. shrink the "problem space" when we recurse

4. Generalize anything concrete to be in terms of the input, and test with third simplest possible input and so on until satisifed.