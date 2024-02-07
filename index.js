// Solution 1

function isValidSubsequence(array, sequence) {
  var sorted = [];

  array.forEach((num) => {
    if (sequence.includes(num)) {
      sorted.push(num);
    }
  });

  console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sequence[i]) {
      return false;
    }
  }

  return true;
}


// Solution 2

function isValidSubsequence(array, sequence) {
  let arrayIndex = 0
  let sequenceIndex = 0

  array.forEach(num => {
    if (num === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    arrayIndex++;
  })

  return sequenceIndex === sequence.length

}

