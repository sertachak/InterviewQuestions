class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node( value );
    if( this.length === 0 ){
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
  pop(){
    if( !this.top ){
      return null;
    }
    if( this.top === this.bottom ){
      this.bottom = null;
    }
    const popedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return popedNode;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push( "google" );
myStack.push( "Udemy" );
myStack.push( "Discord" );
console.log( myStack );
myStack.pop();
console.log( myStack );
