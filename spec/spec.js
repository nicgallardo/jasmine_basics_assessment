var code = require('../grader.js')


describe('grades', function() {
  it('returns the appropriate letter grade for a 98 score', function() {
    expect(code.grades(98)).toEqual('A+');
  });
    it('returns the appropriate letter grade for a 98 score', function() {
      expect(code.grades(89)).toEqual('B+');
  });
    it('returns the appropriate letter grade for a 98 score', function() {
      expect(code.grades(55)).toEqual('F');
  });
    it('returns the appropriate letter grade for a 98 score', function() {
      expect(code.grades(65)).toEqual('D');
  });
});

describe('average', function() {
  it('returns the average of the given array the expected avg is to be 83', function() {
    expect(code.average([90, 95, 87, 60])).toEqual(83);
  });
  it('returns the avg of the given array the expected avg is to be 49', function() {
    expect(code.average([11, 20, 35, 99, 80]))
  });
  it('return the avg of the give array the expected avg is to be 92', function() {
    expect(code.average([98,97,90,83]))
  });
});

describe('median', function() {
  it('returns the median of an array', function() {
    expect(code.median([52,80,80,86,94])).toEqual(80);
  });
  it('returns the median of the array the expected avg is to be 30', function() {
      expect(code.median([10,20,30,40,89])).toEqual(30);
  });
    it('returns the median of the given array, the expected avg is to be 50', function() {
      expect(code.median([1,2,98,99])).toEqual(50);
    });
});

describe('mode', function() {
  it('returns the mode of an array which should be 90', function() {
    expect(code.mode([90,88,70,79,90,90])).toEqual(90);
  });
  it('returns the mode of the array the expected outcome is 88', function() {
      expect(code.mode([88,79,90,94,88])).toEqual(88);
  });
    it('returns the median of the given array, the expected avg is to be 50',  function() {
      expect(code.mode([92,98,99,98,99,92,99])).toEqual(99);
    });
});