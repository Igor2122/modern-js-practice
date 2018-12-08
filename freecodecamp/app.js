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


// FILTERING NESTED ARRAYS TO REMOVE PROVIDED VALUE
function filteredArray(arr, elem) {
  // console.log(arr, elem);
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    }
      if(arr[i].indexOf(elem) < 0) {
        newArr.push(arr[i]);
      } 
     
  }
  
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};delete foods.oranges, 
delete foods.plums, 
delete foods.strawberries;
console.log(foods);

// HAS OWN PROPERTY IN THE OBJECT 
/*
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  if(obj.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')){
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));
*/

// LOOP THROUGH AN OPBJECT WITH for(let ... in ... ) {}

let userss = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// Filter online users 

function countOnline(obj) {
  // change code below this line
  let onlineUsers = 0;
  for(let i in userss){
    if(userss[i].online == true){
      onlineUsers ++;
    }
  }
  // change code above this line
  return onlineUsers;
}


console.log(countOnline(userss));


// Object Keys 
/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
 

function getArrayOfUsers(obj) {
  // change code below this line
  let result = Object.keys(obj);
  return result;
  // change code above this line
}

console.log(getArrayOfUsers(users));
*/

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // change code below this line  
  let res = userObj.data.friends.push(friend);
  return res;
  // change code above this line
}

console.log(user.data.friends);
console.log(addFriend(user, 'Pete'));

