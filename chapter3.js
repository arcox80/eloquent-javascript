//Example of recursion
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `${history} + 5`) ||
             find(current * 3, `${history} * 3`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));


//Write a function min that takes two arguments and returns their minimum.


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

