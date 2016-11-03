var assert = require('assert');

var elem = require('../lib/utils').array.elem;
var allocate = require('../lib/utils/allocate');

describe('allocate', function() {
  it('should be bijective', function() {
    /* meaning that everyone maps to someone and is mapped by someone */
    var ls = [1,2,3,4,5,6,7,8,9,0];
    var allocs = allocate(ls);
    ls.forEach((l) => {
      // check that for all l in ls, l is a key of allocs
      assert(elem(l, Object.keys(allocs)));
      // check that for all l in ls, l is a value of allocs
      assert(elem(l, Object.values(allocs)));
    });
  });

  it('should not have loop', function() {
    /* loop means A is allocated to A */
    var allocs = allocate([1,2,3,4,5,6,7,8,9,0]);
    Object.keys(allocs).forEach((id) => {
      assert(id != allocs[id]);
    });
  });
});
