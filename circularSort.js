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
const findLeftOrRightShift = (array, indexForNewElement, startIndex, endIndex) => {
  // console.log(indexForNewElement);
  let smallerElements;
  let largerElements;
  if (indexForNewElement < startIndex) {
    smallerElements = array.length - startIndex + indexForNewElement + 1;
  } else {
    smallerElements = indexForNewElement - startIndex + 1;
  }
  if (indexForNewElement > endIndex) {
    largerElements = array.length - indexForNewElement + endIndex;
  } else {
    largerElements = endIndex - indexForNewElement;
  }
  let shiftState = 'rightShift';
  if (smallerElements < largerElements) {
    shiftState = 'leftShift';
  }
  return {
    shift: () => shiftState,
  };
};

const doShift = (array, shiftState, index, startIndex, endIndex) => {
  // console.log(shiftState);
  // console.log(index, startIndex, endIndex);
  if (shiftState === 'leftShift') {
    // console.log(index, startIndex, endIndex);
    if (startIndex > 0) {
      if (index < startIndex) {
        for (let k = startIndex - 1; k < array.length; k += 1) {
          array[k] = array[(k + 1) % array.length];
        }
        for (let k = 0; k < index; k += 1) {
          array[k] = array[k + 1];
        }
      } else {
        for (let k = startIndex - 1; k < index; k += 1) {
          array[k] = array[k + 1];
        }
      }
    } else {
      array[array.length - 1] = array[0];
      for (let k = 0; k < index; k += 1) {
        array[k] = array[k + 1];
      }
    }
  } else if (endIndex < (array.length - 1)) {
    if (index > endIndex) {
      // for (let k = startIndex - 1; k < array.length; k += 1) {
      //   array[k] = array[(k + 1) % array.length];
      // }
      // for (let k = 0; k < index; k += 1) {
      //   array[k] = array[k + 1];
      // }
      const lastValue = array[array.length - 1];
      for (let k = (array.length - 1); k > index; k -= 1) {
        array[k] = array[k - 1];
      }
      array[0] = lastValue;
      for (let k = (endIndex + 1); k > 0; k -= 1) {
        array[k] = array[k - 1];
      }
    } else {
      for (let k = (endIndex + 1); k > index; k -= 1) {
        array[k] = array[k - 1];
      }
    }
  } else {
    array[0] = array[array.length - 1];
    for (let k = endIndex; k > index; k -= 1) {
      array[k] = array[k - 1];
    }
  }
  // console.log('done');
  // console.log(array);
  return array;
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
    // console.log(endIndex);
    indexForNewElement = findIndexForNewElement(circularSortedArray, startIndex, endIndex, inputArray[i]);
    // console.log('hjh', indexForNewElement.index());
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
    } else {
      const shiftLeftOrRight = findLeftOrRightShift(circularSortedArray, indexForNewElement.index(), startIndex, endIndex);
      // console.log(shiftLeftOrRight.shift());
      if (shiftLeftOrRight.shift() === 'leftShift') {
        doShift(circularSortedArray, 'leftShift', indexForNewElement.index(), startIndex, endIndex);
        // console.log('insidklk');
        // console.log(circularSortedArray);
        circularSortedArray[indexForNewElement.index()] = inputArray[i];
        if (startIndex === 0) {
          startIndex = inputArray.length - 1;
        } else {
          startIndex -= 1;
        }
        result.push(circularSortedArray.slice());
      } else {
        doShift(circularSortedArray, 'rightShift', (indexForNewElement.index() + 1) % inputArray.length, startIndex, endIndex);
        // console.log('insid');
        // console.log(circularSortedArray);
        circularSortedArray[(indexForNewElement.index() + 1) % inputArray.length] = inputArray[i];
        if (endIndex === (inputArray.length - 1)) {
          endIndex = 0;
        } else {
          endIndex += 1;
        }
        result.push(circularSortedArray.slice());
      }
    }
  }
  return result;
};

// console.log(doShift([-1, -1, 2, 4, 5], 'left', 0, 2, 4));
// console.log(doShift([1, -1, 2, 4, 5], 'right', 2, 1, 4));
// console.log(findLeftOrRightShift([8, 9, -1, 2, 5], 4, 3, 1).shift());
// console.log(findLeftOrRightShift([8, 9, -1, 2, 5], 3, 3, 1).shift());
// console.log(findIndexForNewElement([-1, 1, 3, 5], 1, 3, 0).state());
console.log(circularSort([25, 57, 37, 48, 12, 92, 86, 33]));
module.exports = { circularSort, findIndexForNewElement, findLeftOrRightShift };
