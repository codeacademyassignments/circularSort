const functions = require('./circularSort.js');

describe('circularSort', () => {
  // it('should return array of -1 of size equals to input array', () => {
  //   expect(functions.circularSort([3, 2, 1])).toEqual([-1, -1, -1]);
  // });
  // it('should return array of -1 of size equals to input array', () => {
  //   expect(functions.circularSort([1000])).toEqual([-1]);
  // });
  // it('should return the correct sort sequence in circular fashion', () => {
  //   expect(functions.circularSort([1, 2, 3])).toEqual([[1, -1, -1], [1, 2, -1], [1, 2, 3]]);
  // });
  // it('should return the correct sort sequence in circular fashion', () => {
  //   expect(functions.circularSort([4, 3, 5])).toEqual([[4, -1, -1], [4, -1, 3], [4, 5, 3]]);
  // });

  it('should return correct sequence', () => {
    expect(functions.circularSort([25, 57, 37, 48, 12, 92, 86, 33])).toEqual([[25, -1, -1, -1, -1, -1, -1, -1],
      [25, 57, -1, -1, -1, -1, -1, -1],
      [25, 37, 57, -1, -1, -1, -1, -1],
      [25, 37, 48, 57, -1, -1, -1, -1],
      [25, 37, 48, 57, -1, -1, -1, 12],
      [25, 37, 48, 57, 92, -1, -1, 12],
      [25, 37, 48, 57, 86, 92, -1, 12],
      [33, 37, 48, 57, 86, 92, 12, 25]]);
  });
  it('should return correct sequence', () => {
    expect(functions.circularSort([5, 10, 7, 8])).toEqual([[5, -1, -1, -1], [5, 10, -1, -1], [5, 7, 10, -1], [5, 7, 8, 10]]);
  });
  it('should return correct sequence', () => {
    expect(functions.circularSort([5, 10, 7, 6])).toEqual([[5, -1, -1, -1], [5, 10, -1, -1], [5, 7, 10, -1], [6, 7, 10, 5]]);
  });
});

describe('findIndexForNewElement', () => {
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, 1, 10, 20, 22, -1], 1, 4, 21).index()).toEqual(3);
  });
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, -1], -1, -1, 0).index()).toEqual(0);
  });
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, 2, 3], 1, 2, 1).index()).toEqual(0);
  });
});
