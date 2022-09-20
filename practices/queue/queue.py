"""
Create a queue data structure. 

The queue should be a class with methods 'add' and 'remove'

Adding to the queue should store an element until it is removed

Example

const q = new Queue();
q.add(1);
q.remove(); // returns 1;
"""


class Queue:
    def __init__(self):
        self.queue = []

    def add(self, record):
        self.queue.insert(0, record)

    def remove(self):
        return self.queue.pop()
