/**
 * Question #2:
 * Write a javascript function that takes an array of numbers and a target number.
 * The function should find two different numbers in the array that,
 * when added together, give the target number.
 * For example: `answer([1,2,3], 4)` should return `[1,3]`
 */

const addsUp = (arr, target) => {
  // check and sanitize our input, if not an array, make it one.
  // if it's less then 2 in length, return undefined.
  if (!Array.isArray(arr)) arr = [...arr];
  if (arr.length < 2) return undefined;

  // create a cloned array for out inner loop comparison
  const temp = [...arr];
  let output = [];

  // first loop thru our input array, then our cloned
  arr.forEach(val => {
    temp.forEach(key => {
      // console.log(val, key);
      // compare each possible combination, when found push it to our output array
      if (val + key === parseInt(target) && val !== key) output = [val, key];
    });
  });

  // if outputs length is greater then 2 return it, if not return undefined
  return output.length >= 2 ? output.sort((a, b) => a - b) : undefined;
};

