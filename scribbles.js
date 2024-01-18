
function largestNumber(array) {
  return array.reduce((previousValue, currentValue) => {  
    return Math.max(previousValue, currentValue);
  });
}

const array = [1,2,3,4,5];
const largest = largestNumber(array);
assert.equal(largest, 5);