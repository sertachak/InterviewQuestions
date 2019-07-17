//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) 
{
  let solution = {};
  for( let i = 0; i < input.length; i++ )
  {
    if( !solution.hasOwnProperty(`${input[i]}`))
    {
      solution[`${input[i]}`] = true;
    }
    else
    {
      console.log(input[i]);
      break;
    }
  }
}

let array1 = [2,5,1,2,3,5,1,2,4];
firstRecurringCharacter( array1 );

let array2 = [2,1,1,2,3,5,1,2,4];
firstRecurringCharacter( array2 );

let array4 = [2,5,5,2,3,5,1,2,4];
firstRecurringCharacter( array4 );

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2