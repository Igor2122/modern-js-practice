const http = new EasyHTTP;

// Get Users  

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => data.forEach(user => {
   console.log(user.name);
}))
.catch(err => console.log(err));


// User data

const data = {
   name: 'John Doe',
   username: 'johnD',
   email: 'johnDoe@gmail.com'
}

// Create a Post 

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));


// Create a Post 

http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));


// Delete a Users 

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));