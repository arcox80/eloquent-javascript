/*
Exercise 1 - Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

//My solution:
let hashTag = '';
for (let i = 0; i < 7; i++) {
  hashTag += '#';
  console.log(hashTag);
}

//EJ solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
