function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log(convertToF(30));

function reverseString(str) {
  let res = str.split(', ');
  console.log(res);
  return str;
}

console.log(reverseString("hello"));