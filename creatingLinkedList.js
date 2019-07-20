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

    insert(index, value){
    const newNode = new Node( value );
    let curr = this.head;
    for( let i = 0; i !== index-1; i++ )
    {
      if( curr.next !== null)
        curr = curr.next;
    }
    newNode.next = curr.next;
    newNode.prev = curr;
    if( curr.next !== null )
      curr.next.prev = newNode;
    curr.next = newNode;
    this.length++;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99)
myLinkedList.insert(19, 88)
myLinkedList.insert(300,3);
