// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it
// and console.log it

let food = ["apple", "orange", "cake", "carrots", "pasta", "rice", "eggs"];

const addHooray = function (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i] + "HOORAY");
  }
};

addHooray(food);

//NOTE
//I cant use "push" to push something at the end of each food[i]!!
