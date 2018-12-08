const arr = [1,2,3,4,5];

const sum = arr.reduce((a,b) => {
    console.log(a + '  :  ' + b);
    return a + b;
    }, 0); // initial value of accumulator (a); b- value of each item in the []

console.log(sum);

// DELETING WITH splice()
function sumOfTen(arr) {
  arr.splice(1,2); // 1-index; 2-# of values we are deleting 
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// REPLACING WITH splice()
function htmlColorNames(arr) {
// 0-index where we start; 2-#of values we are deleting; 3 valueswe are passing on those spots 
                        // if we pass 0 here nothing will be deleted and values will be added to the array
                        // so in this case the output will be 7
   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond" ); 
   return arr;
} 
 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//COPYING ARRAY ITEMS WITH slice()

function forecast(arr) {
  // 2-point we start; 4-point we stop but excluding it 
  let res = arr.slice(2, 4);
  return res;
}


console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', ])); // forecast should return ["warm", "sunny"]

// COPYING ARRAYS INTO NEW ARRAY
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

// INSERTING NEW VALUES FROM ANOTHER ARRAY WITH spread operator ... 
function spreadOut(fragment) {
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

// do not change code below this line
console.log(spreadOut(['to', 'code']));


// CHECK FOR THE ELEMENT PRESENCE WITH indexOf() if not there returns -1
function quickCheck(arr, elem) {
  // change code below this line
  let result = false;
  if(arr.indexOf(elem) > 0){
    result = true
  }
  return result;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



function filteredArray(arr, elem) {
  // console.log(arr, elem);
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    }
      if(arr[i].indexOf(elem) < 0) {
        console.log(arr[i]);
        newArr.push(arr[i]);
      } else {
        newArr = [];
      }
     
  }
  
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
