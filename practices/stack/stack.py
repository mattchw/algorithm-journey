"""
Create a stack data structure. 

The stack should be a class with methods push, pop, and peek

Adding an element to the stack should store it until it is removed.

Example

const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // returns 2
s.pop(); // returns 1
"""


class Stack:
    def __init__(self):
        self.stack = []

    def push(self, record):
        self.stack.append(record)

    def pop(self):
        return self.stack.pop()

    def peek(self):
        return self.stack[-1]
