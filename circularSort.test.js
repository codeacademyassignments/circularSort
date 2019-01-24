const functions = require('./circularSort.js');

describe('circularSort', () => {
  it('should return array of -1 of size equals to input array', () => {
    expect(functions.circularSort([3, 2, 1])).toEqual([-1, -1, -1]);
  });
  it('should return array of -1 of size equals to input array', () => {
    expect(functions.circularSort([1000])).toEqual([-1]);
  });
});

describe('findIndexForNewElement', () => {
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, 1, 10, 20, 22, -1], 1, 4, 21)).toEqual(3);
  });
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, -1], -1, -1, 0)).toEqual(0);
  });
  it('should return index for new element to insert', () => {
    expect(functions.findIndexForNewElement([-1, 2, 3], 1, 2, 1)).toEqual(0);
  });
});
