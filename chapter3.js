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
const min = (a, b) => {
  return a < b ? a : b;
};

//EQ's solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or 
odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether 
a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should 
accept a single parameter (a positive, whole number) and return a Boolean.
*/
const isEven = (num) => {
  if (num < 0) {
    num *= -1;
  } 
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

//EQ's solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/*
Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second 
argument that indicates the character that is to be counted (rather than counting only 
uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count ++;
    }
  }
  return count;
};

const countBs = str => {
  return countChar(str, 'B');
};

//EQs solution
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
