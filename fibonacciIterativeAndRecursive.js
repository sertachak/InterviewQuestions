function fibonacciIterative(n){
  let prev = 0;
  let current = 1;
  n = n - 1;
  while( n !== 0  )
  {
    let temp = current;
    current = current + prev;
    prev = temp;
    n--;
  }
  return current;
}
fibonacciIterative(8);

function fibonacciRecursive(n) {
  if( n < 2 ){
    return n;
  }
  return fibonacciRecursive( n -1 ) + fibonacciRecursive( n-2 );
}

fibonacciRecursive(8) 