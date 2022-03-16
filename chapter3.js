function fromListToObject(array) {
  let obj = {};
  array.forEach(function (subArr) {
    obj[subArr[0]] = subArr[1];
  });
  return obj;
}

console.log(fromListToObject(arr1));
