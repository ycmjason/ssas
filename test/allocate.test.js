var assert = require('assert');

var elem = require('../lib/utils').array.elem;
var allocate = require('../lib/utils/allocate');

describe('allocate', function() {
  it('should be bijective', function() {
    /* meaning that everyone maps to someone and is mapped by someone */
    var ls = [1,2,3,4,5,6,7,8,9,0];
    var allocs = allocate(ls);
    allocs_ids = allocs.map((a) => a._id);
    allocs_tos = allocs.map((a) => a.to);

    ls.forEach((l) => {
      // check that for all l in ls, l is in allocs._id
      assert(elem(l, allocs_ids));
      // check that for all l in ls, l is in allocs.to
      assert(elem(l, allocs_tos));
    });
  });

  it('should not have loop', function() {
    /* loop means A is allocated to A */
    var allocs = allocate([1,2,3,4,5,6,7,8,9,0]);
    allocs.forEach((alloc) => {
      assert(alloc._id != allocs.to);
    });
  });
});
