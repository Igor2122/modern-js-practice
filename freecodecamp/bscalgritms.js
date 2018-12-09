// Converting Celcies to Farenheit 
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}
// console.log(convertToF(30));


// Reversing the string
function reverseString(str) {
  let res = str.split('');
  res.reverse();
  let reversedString = res.join('');
  console.log(reversedString);
  return res;
}

// console.log(reverseString("hello"));

// Factorialize a Number
function factorialize(num) {
  let res = null;
  if(num == 0){
    return 1;
  }
  let val = 0
  let arr = [];
  while(val < num) {
    val ++;
    arr.push(val);
  }
  res = arr.reduce((a, b) => a * b);
  console.log(res);
  return res;
}

//  console.log(factorialize(0));

// Find the Longest Word in a String
function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let arr = []
  strArr.map(length => {
    arr.push(length.length);
  })
  let longestStr = (Math.max(...arr));
  return longestStr;
}

// console.log(findLongestWordLength("May the force be with you"));

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  // You can do this!
  let numarr = [];
  arr.map(res => {
  let  MaxNum = (Math.max(...res));
      numarr.push(MaxNum)
  })  
  return numarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let length = target.length;
  let tstedStr =  str.split(' ');
  let lastElem = tstedStr.pop()
  let formattedString = lastElem.substring(lastElem.length - length);
  
  console.log(formattedString, lastElem.length - length);
  
  if(formattedString == target){
    return true;
  } else {
    return false;
  }

}
// let string = 'Abstraction';
// console.log(string.substring(5));

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("He has to give me a new name", "name"));
// console.log(confirmEnding("Open sesame", "pen"));
// console.log(confirmEnding("Abstraction", "action"));


function repeatStringNumTimes(str, num) {
  // repeat after me
  let res = '';
  for (var i = 0; i < num; i++ ) {
      res += str;
      console.log(i);
  }
  return res;
}

// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("abc", 4));
// console.log(repeatStringNumTimes("*", 3));


// Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let strRes = '';
  let strArr = str.split('');
  let cont = 0;
  for(let i = 0; i < num; i++){
    cont += i;
    strRes +=strArr[i];
  }
  console.log(cont);
  if(str.length <= num){
    return strRes
  }
  return strRes + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));







 






