const functions = require('./circularSort.js');

describe('circularSort', () => {
  it('should return array of -1 of size equals to input array', () => {
    expect(functions.circularSort([3, 2, 1])).toEqual([-1, -1, -1]);
  });
  it('should return array of -1 of size equals to input array', () => {
    expect(functions.circularSort([1000])).toEqual([-1]);
  });
});
