function fromListToObject(array) {
  let obj = {};
  array.forEach(function (subArr) {
    obj[subArr[0]] = subArr[1];
  });
  return obj;
}

console.log(fromListToObject(arr1));


function findShortestWordAmongMixedElements(arr) {
  let shortest = "";
  arr.reduce(function (acc, val) {
    if (typeof acc === 'string') {
      shortest = acc;
      if (val.length < acc.length) {
        return val;
      } else {
        return acc;
      }
    } else {
      return val;
    }
  }, []);
  return shortest;
}

var output = findShortestWordAmongMixedElements([]);
console.log(output);
