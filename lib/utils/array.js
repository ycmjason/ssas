exports.elem = (e, arr) => {
  // return if e is an element of arr
  return arr.indexOf(e) >= 0;
};

exports.removeFrom = (i, arr) => {
  // remove i(th) element in arr
  var c = arr.slice(0);
  c.splice(i, 1);
  return c;
};

exports.clone = (arr) => {
  return arr.slice(0);
};

exports.shuffle = (arr) => {
  var a = arr.slice(0);
  for (var i = 0; i < arr.length; i++) {
    var j = Math.floor(Math.random() * arr.length);
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
};
