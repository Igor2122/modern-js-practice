document.getElementById('btnOne').addEventListener('click', getText);
document.getElementById('btnTwo').addEventListener('click', getJson);
document.getElementById('btnThree').addEventListener('click', getApiEternal);


/// Get Local Text Fiel
function getText() {
   fetch('data.txt')
      .then(res => {
         return res.text();
      })
      .then(data => {
         console.log(data);
         document.getElementById('output').innerHTML = data;
      }) // if there is an error 
      .catch(err => {
         console.log(err);
      })
}

// Get local json data
function getJson() {
   fetch('posts.json')
      .then(res => {
         return res.json();
      })
      .then(data => {
         console.log(data);
         let output = '';
         data.forEach(posts => {
            output += `<li>${posts.title}</li>`
         });

         document.getElementById('output').innerHTML = output;

      }) // if there is an error 
      .catch(err => {
         console.log(err);
      })
}

// Get Eternal Api
function getApiEternal() {
   fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
         console.log(data);
         let output = '';
         data.forEach(user => {
            output += `<li>${user.login}</li>`
         });

         document.getElementById('output').innerHTML = output;

      }) // if there is an error 
      .catch(err => console.log(err))
}

