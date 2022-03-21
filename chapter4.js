//Think of the index as the amount of items to skip, counting from the start of the array.
/*
So if you know that the property you are interested in is called color, you say value.color. If you want to 
extract the property named by the value held in the binding i, you say value[i]. Property names are strings. 
They can be any string, but the dot notation works only with names that look like valid binding names. So if 
you want to access a property named 2 or John Doe, you must use square brackets: value[2] or value["John Doe"].

The elements in an array are stored as the array’s properties, using numbers as property names. Because you 
can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway, you have 
to use the bracket notation to get at them.
*/
let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
/*
Note that the object added to the journal looks a little odd. Instead of declaring properties like 
events: events, it just gives a property name. This is shorthand that means the same thing—if a property 
name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.
*/

//Exercises
/*
Write a range function that takes two arguments, start and end, and returns an array containing all the 
numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the 
example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the 
“step” value used when building the array. If no step is given, the elements go up by increments of one, 
corresponding to the old behavior. Make sure it also works with negative step values.
*/
const range = (start, end, step = 1) => {
  let rangeArr = [];
  if (start > end) {
    while (end <= start) {
      rangeArr.push(start);
      start -= Math.abs(step);
    }
  } else if (start < end) {
    while (start <= end) {
      rangeArr.push(start);
      start += step;
    }
  } else {
    return [start];
  }
  return rangeArr;
};

const sum = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
};

//EJ solution is 1.22% faster
const range = (start, end, step = start < end ? 1 : -1) => {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
};

const sum = array => {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(4, 4, -3));

/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes
an array as argument and produces a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing 
its elements. Neither may use the standard reverse method.
*/
const reverseArray = array => {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

const reverseArrayInPlace = array => {
  let count = 2;
  for (let i = 0; i < array.length; i++) {
    let removed = array.splice(array.length - count, 1);
    array.push(...removed);
    count ++;
  }
  return array;
};

//EJ solution - 1.92% faster
const reverseArray = array => {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
};

const reverseArrayInPlace = array => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
};

console.log(reverseArray(['A', 'B', 'C']));
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
console.log(arrayValue);

/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as 
argument. Also write a listToArray function that produces an array from a list. Then add a helper function 
prepend, which takes an element and a list and creates a new list that adds the element to the front of the 
input list, and nth, which takes a list and a number and returns the element at the given position in the 
list (with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

const arrayToList = arr => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
};

console.log(arrayToList([10, 20, 30, 40]));

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};
