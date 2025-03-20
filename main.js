function invert(array) {
  //Create a new array with .map() to avoid mutating the original array
   return array.map(num => -num);
}