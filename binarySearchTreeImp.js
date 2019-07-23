class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newLeaf = new Node( value );
    if(this.root === null ){
      this.root = newLeaf;
    }
    else{
      let currentNode = this.root;
      while( true )
      {
        if( value < currentNode.value )
        {
          if( currentNode.left === null )
          {
            currentNode.left = newLeaf;
            return this;
          }
          else{
            currentNode = currentNode.left;
          }
        }
        else{
          if( currentNode.right === null )
          {
            currentNode.right = newLeaf;
            return this;
          }
          else{
            currentNode = currentNode.right;  
          }
        }
      }
      
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





