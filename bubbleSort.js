const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

bubbleSort = (array) => {
  for( let i = array.length; i > 1; i --){
    for( let j = 0; j < i - 1; j++){
      if( array[j] > array[j + 1] ){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);