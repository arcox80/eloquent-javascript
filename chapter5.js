//Higher Order Functions - Functions that operate on other functions, either by taking them as arguments or by returning them
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
