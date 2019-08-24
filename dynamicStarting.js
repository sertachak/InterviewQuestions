function addTo80(n) {
  return n + 80;
}

addTo80(5)

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

//same function with closure
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}