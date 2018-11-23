/* async function foo () {
   
//    const promise = new Promise((resolve, rejct) => {
//       setTimeout(()=> resolve('hello'), 5000);
//    });   

//    const err = false;

//    if(!err) {
//       const res = await promise; // wait untill rpomiseis reslved
//       return res; 
//    } else {
//       await Promise.reject(new Error('Something went wrong'));
//    }

// }

// foo().then(res => console.log(res))
 .catch(err=> console.log(err)); */

 async function getUsers () {
   //  await the response of the fetch call 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

   //  Only proceed once the promise is resolved
    const data = await response.json();
   // only proceed once the second pronice resolved
    return data;
 }

 getUsers().then(users => console.log(users));
