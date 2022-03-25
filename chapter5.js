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

const SCRIPTS = [{
  name: "Adlam",
  ranges: [
    [125184, 125259],
    [125264, 125274],
    [125278, 125280]
  ],
  direction: "rtl",
  year: 1987,
  living: true,
  link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
},
{
  name: "Caucasian Albanian",
  ranges: [
    [66864, 66916],
    [66927, 66928]
  ],
  direction: "ltr",
  year: 420,
  living: false,
  link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
},
{
  name: "Ahom",
  ranges: [
    [71424, 71450],
    [71453, 71468],
    [71472, 71488]
  ],
  direction: "ltr",
  year: 1250,
  living: false,
  link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
},
{
  name: "Coptic",
  ranges: [
    [994, 1008],
    [11392, 11508],
    [11513, 11520]
  ],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
];

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
/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.
*/
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

/*
Write a higher-order function loop that provides something like a for loop statement. It 
takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update 
function to create a new value and starts from the beginning.
*/
//EJ solution - mine worked but was not flexible enough for all values
const loop = (value, testFn, updateFn, bodyFn) => {
  for (let newVal = value; testFn(newVal); newVal = updateFn(newVal)) {
      bodyFn(newVal);
  }
};
loop(3, n => n > 0, n => n - 1, console.log);

/*
Analogous to the some method, arrays also have an every method. This one returns true when 
the given function returns true for every element in the array. In a way, some is a version 
of the || operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
*/
//My solution - basically same as EJ's
const every = (array, test) => {
  //EJ difference was using for of
  //for (let element of array) ...
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
};

//EJ's solution when using some
const every2 = (array, test) => {
  return !array.some(element => !test(element));
};

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
