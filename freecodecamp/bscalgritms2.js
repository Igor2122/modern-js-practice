
// Immutably duplicate algorythm and append in it's order to array
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr2copy= arr2.slice(0, arr2.length); // copy of array 
  let arr1copy= arr1.slice(0, arr1.length); // copy of array 
  
  for (let i = 0; i < arr1copy.length; i ++){
      arr2copy.splice(n, 0, arr1copy[i]);
      n++;
  }
  return arr2copy;
}
// console.log(frankenSplice([1, 2], ["a", "b"], 1))
/* codecamp verison: 
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
} */

// Scripting: Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let bouncerKeys = [false, null, 0, NaN, undefined, ""];
  let outputArr = [];

  for (const val in bouncerKeys) {
    console.log(Boolean( arr[val]));
    if (Boolean(arr[val]) === true) {
      outputArr.push(arr[val]);
    }
  }
  return outputArr;
}

console.log(bouncer([7, "ate", "", false, 9]))
