var assert = require('assert');

var arrUtils = require('../lib/utils').array;

describe('utils.array', function() {
  describe('.elem', function() {
    it('should return false if e not in arr', function() {
      assert(arrUtils.elem(3, [1,2,3]));
      assert(!arrUtils.elem(0, [1,2,3]));
    });
  });

  describe('.removeFrom', function() {
    it('should remove the correct indexed element', function() {
      assert.deepEqual(arrUtils.removeFrom(0, [1,2,3]), [2,3]);
      assert.deepEqual(arrUtils.removeFrom(1, [1,2,3]), [1,3]);
    });
  });

  describe('.clone', function() {
    it('should clone an array', function() {
      var a = [1,2,3];
      var c = arrUtils.clone(a);
      assert.notEqual(a, c);
      c[0] = 3;
      assert.equal(a[0], 1);
    });
  });

  describe('.shuffle', function() {
    it('should return a different array of same length and elements', function() {
      var arr = [1,2,3,4,5,6,7];
      var shu = arrUtils.shuffle(arr);
      assert.notEqual(shu, arr);
      assert.equal(shu.length, arr.length);
      arr.forEach((e) => assert(shu.indexOf(e) >= 0));
      shu.forEach((e) => assert(arr.indexOf(e) >= 0));
    });
  });
});
