function search(array, item) {
  let min = 0;
  let max = array.length -1;

  while (true) {
    const middleIndex = Math.floor((min + max)/2.0)
    const currentItem = array[middleIndex]
    
    if (currentItem === item) {
      //found!
   
      return middleIndex;
    } else if (currentItem < item) {
      //go right
      min = middleIndex + 1;
    } else {
      //go left
      max = middleIndex-1;
    }
    
    if (min > max) {
      return null;
    }
  }

}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,14,13,15], 5));
