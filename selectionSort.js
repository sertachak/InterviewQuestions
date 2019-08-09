const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for( let i = 0; i < numbers.length; i++){
   let smallest = i;
    for( let j = i+1; j < numbers.length; j++){
      if( numbers[j] < array[smallest]){
        smallest = j;
      }
    }
    if( numbers[i] !== array[smallest]){
      let temp = numbers[i];
      numbers[i] = array[smallest];
      numbers[smallest] = temp;
    }
  }
  return numbers;
}

selectionSort(numbers);