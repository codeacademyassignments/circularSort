const circularSort = (array) => {
  const circularSortedArray = [];
  array.forEach(() => {
    circularSortedArray.push(-1);
  });
  return circularSortedArray;
};
module.exports = { circularSort };
