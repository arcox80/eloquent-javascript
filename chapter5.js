/*
In terms of what the computer is actually doing, these two approaches are also quite 
different. The first will build up new arrays when running filter and map, whereas the 
second computes only some numbers, doing less work. You can usually afford the readable 
approach, but if you’re processing huge arrays, and doing so many times, the less abstract 
style might be worth the extra speed.
*/

//Higher Order Functions - Functions that operate on other functions, either by taking 
//them as arguments or by returning them
function repeat(n, action) {
  for (let i=0; i < n; i++) {
      action(i);
  }
}
function unless(test, then) {
  if (!test) then();
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, 'is even');
  });
});

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(scripts.reduce((a,b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);
// → {name: "Han", …}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204

//Exercises
//Mine same as EJ's
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((acc, val) => acc.concat(val), []);
console.log(flattened);
/*
//My original solution, which is more efficient, but challenge required used of concat
let flattened = arrays.reduce((acc, val) => {
  acc.push(...val);
  return acc;
}, []);
*/
