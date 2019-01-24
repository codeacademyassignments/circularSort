const circularSort = (array) => {
  const circularSortedArray = [];
  array.forEach(() => {
    circularSortedArray.push(-1);
  });
  return circularSortedArray;
};

const findIndexForNewElement = (array, startIndex, endIndex, valueToSearch) => {
  let i = startIndex;
  if (startIndex === endIndex) {
    if (startIndex === -1) {
      return 0;
    }
  }
  const lastIndexToSearch = ((endIndex + 1) % array.length);
  while (i !== lastIndexToSearch) {
    if (valueToSearch > array[i]) {
      i += 1;
    } else {
      if (i === 0) {
        return array.length - 1;
      }
      return i - 1;
    }
  }
  return i;
};
console.log(findIndexForNewElement([-1, 1, 3, 5], 1, 3, 4));
module.exports = { circularSort, findIndexForNewElement };
