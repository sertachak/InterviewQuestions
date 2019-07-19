class Node{
  constructor( value ){
    this.value = value;
    this.next =  null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node( value );
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

    prepend(value) {
    const newNode = new Node( value );
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printLinkedList(){
    const arr = [];
    for( let curr = this.head; curr !== null; curr = curr.next )
    {
      arr.push(curr.value);
    }
    return arr;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
//console.log( myLinkedList );
myLinkedList.printLinkedList();
