const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for( let i = 0; i < array.length; i ++){
    for( let j = 0; j < i; j++ ){
      if( array[i] < array [j] ){
        array.splice(j, 0, array.splice(i,1)[0] )
      }
    }

  }
}

insertionSort(numbers);
console.log(numbers);