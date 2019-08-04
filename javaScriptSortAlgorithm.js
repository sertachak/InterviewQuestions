const letters = [ 'a', 'd', 'z', 'e', 'r', 'b']
const numbers = [ 2, 66, 54, 2, 1, 7, 9 ]

console.log(numbers.sort())
//In number sorting JS convert numbers into letters than sort them according to Unicode

const turkishLetters = [ 'ğ', 'o', 'ö', 'ç', 'c', 'a']

turkishLetters.sort();
// this sort algorithm of JavaScript do not corrently sort letters because of different characters

//writing special sort algorithm corrects the sorting
turkishLetters.sort( (a,b) => {
  return a.localeCompare(b);
})
