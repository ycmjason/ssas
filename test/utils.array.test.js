var assert = require('assert');

var utils = require('../lib/utils');

describe('utils.array', function() {
  describe('.elem', function() {
    it('should return false if e not in arr', function() {
      assert.
    });

    it('should not have loop', function() {
      /* loop means A is allocated to A */
      var allocs = allocate([1,2,3,4,5,6,7,8,9,0]);
      Object.keys(allocs).forEach((id) => {
        assert(id != allocs[id]);
      });
    });
  });
});
