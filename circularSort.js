const findIndexForNewElement = (array, startIndex, endIndex, valueToSearch) => {
  let i = startIndex;
  let state = 'rightIndex';
  if (startIndex === endIndex && startIndex === -1) {
    return {
      index: () => 0,
      state: () => 'bothside',
    };
  }
  const lastIndexToSearch = ((endIndex + 1) % array.length);
  while (i !== lastIndexToSearch) {
    if (valueToSearch > array[i]) {
      i = (i + 1) % array.length;
    } else {
      state = 'leftIndex';
      if (i === 0) {
        return {
          index: () => array.length - 1,
          state: () => state,
        };
      }
      return {
        index: () => i - 1,
        state: () => state,
      };
    }
  }
  return {
    index: () => i,
    state: () => state,
  };
};

const circularSort = (inputArray) => {
  const circularSortedArray = [];
  inputArray.forEach(() => {
    circularSortedArray.push(-1);
  });
  const result = [];
  let startIndex = -1;
  let endIndex = -1;
  let indexForNewElement;
  for (let i = 0; i < inputArray.length; i += 1) {
    indexForNewElement = findIndexForNewElement(circularSortedArray, startIndex, endIndex, inputArray[i]);
    if (circularSortedArray[indexForNewElement.index()] === -1) {
      circularSortedArray[indexForNewElement.index()] = inputArray[i];
      if (startIndex === -1) {
        startIndex = indexForNewElement.index();
        endIndex = indexForNewElement.index();
      } else if (indexForNewElement.state() === 'leftIndex') {
        startIndex = indexForNewElement.index();
      } else {
        endIndex = indexForNewElement.index();
      }
      result.push(circularSortedArray.slice());
    }// else {
    //   const shiftLeftOrRight = findLeftOrRightShift(circularSortedArray, indexForNewElement, startIndex, endIndex);
    //   if (shiftLeftOrRight.shift() === 'leftShift') {
    //     shiftArray(circularSortedArray, indexForNewElement, 'leftShift');
    //   } else{
    //     shiftArray(circularSortedArray, indexForNewElement, 'rightShift');
    //   }
    // }
  }
  return result;
};


console.log(findIndexForNewElement([-1, 1, 3, 5], 1, 3, 0).state());
module.exports = { circularSort, findIndexForNewElement };
