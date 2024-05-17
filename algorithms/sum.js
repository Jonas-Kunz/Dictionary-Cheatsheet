function arrayContainsSum(array, sum) {
  let i = 0;//1
  let ii = array.length - 1;//1

  while (i <= ii) { //n+1
    const element1 = array[i];//n
    const element2 = array[ii];//n
    const currentSum = element1 + element2;//n

    if (currentSum === sum) {//n
      return true;
    } else if (currentSum > sum) {//n
      ii--;//n
    } else {
      i++;//1
    }
  }

  return false;
}

