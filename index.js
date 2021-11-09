function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// function hasTargetSumIan (array, target) {
//   const seenNumbers = {};
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     if (seenNumbers[complement]) return true;
//     seenNumbers[array[i]] = true;
//   }
//    return false;
// }

// function hasTargetSumIan (array, target) {
//   const seenNumbers = {};
//   for (const number of array) {
//     const complement = target - array;
//     if (complement in seenNumbers) return true;
//     seenNumbers[number] = true;
//   }
//    return false;
// }

function hasTargetSum(array, target) {
  if (array.length < 2) {
    return false
  }
  for (let indexOne = 0; indexOne < array.length - 1; indexOne++) {
     for (let indexTwo = indexOne + 1; indexTwo < array.length; indexTwo++) {
      let sum = array[indexOne] + array[indexTwo];
      if (sum === target) {
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Quadratic time: O(n²)
  This function runs a nested loop
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  For each index of the array, create another index of the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
