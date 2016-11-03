exports.elem = (e, arr) => {
  // return if e is an element of arr
  return arr.indexOf(e) >= 0;
};

exports.removeFrom = (i, arr) => {
  // remove i(th) element in arr
  return arr.splice(i, 1);
}

exports.clone = (arr) => {
  return arr.slice(0);
}
