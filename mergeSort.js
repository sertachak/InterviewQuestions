const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    console.log("end")
    return array
  }
  // Split Array in into right and left
  let mid = array.length/2
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  console.log(left + " plus " + right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let merged = [];
  console.log( "mergeLeft" +left )
  console.log( "mergeRight" + right)
  let count1 = 0;
  let count2 = 0;
  while( count1 < left.length || count2 < right.length ){
    if( left[ count1 ] === undefined){
      merged.push(right[count2]);
      count2++
      continue;
    }
    if( right[ count2 ] === undefined){
      merged.push(left[count1]);
      count1++
      continue;
    } 
    if( left[count1] < right[count2] ){
      merged.push(left[count1]);
      count1++;
    } else{
      merged.push( right[ count2 ] );
      count2++;
    }
    console.log( "count1  = " + count1 + " &&  count2 = " + count2 );
  }
  console.log("Merged Array: " + merged);
  return merged;
}


const answer = mergeSort(numbers);
console.log(answer);