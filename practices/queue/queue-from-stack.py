"""
Implement a Queue data structure using two stacks.

Do not create an array inside of the 'Queue' class.

Queue should implement the methods 'add', 'remove', and 'peek'.

For a reminder on what each method does, look back at the Queue exercise.

Examples:

const q = new Queue();
q.add(1);
q.add(2);
q.peek();  // returns 1
q.remove(); // returns 1
q.remove(); // returns 2
"""

from stack import Stack


class Queue:
    def __init__(self):
        self.first = Stack()
        self.second = Stack()

    def add(self, item):
        self.first.push(item)

    def remove(self):
        while self.first.peek():
            self.second.push(self.first.pop())
        record = self.second.pop()
        while self.second.peek():
            self.first.push(self.second.pop())
        return record

    def peek(self):
        while self.first.peek():
            self.second.push(self.first.pop())
        record = self.second.peek()
        while self.second.peek():
            self.first.push(self.second.pop())
        return record
