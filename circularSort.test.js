const functions = require('./circularSort.js');

describe('circularSort', () => {
  // it('should return array of -1 of size equals to input array', () => {
  //   expect(functions.circularSort([3, 2, 1])).toEqual([-1, -1, -1]);
  // });
  // it('should return array of -1 of size equals to input array', () => {
  //   expect(functions.circularSort([1000])).toEqual([-1]);
  // });
  it('should return the correct sort sequence in circular fashion', () => {
    expect(functions.circularSort([1, 2, 3])).toEqual([[1, -1, -1], [1, 2, -1], [1, 2, 3]]);
  });
  it('should return the correct sort sequence in circular fashion', () => {
    expect(functions.circularSort([4, 3, 5])).toEqual([[4, -1, -1], [4, -1, 3], [4, 5, 3]]);
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
