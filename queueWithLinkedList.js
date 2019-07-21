class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue(){
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const dequeuedItem = this.first;
    this.first = this.first.next;
    this.length--;
    return dequeuedItem;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('google');
myQueue.enqueue('youtube');
myQueue.enqueue('udemy');
myQueue.peek();
myQueue.dequeue();

myQueue.peek();

