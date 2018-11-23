
const serchUser = document.getElementById('searchUser');
const github = new Github;

serchUser.addEventListener('keyup', (e) => {
   // get input text 
   let userText = e.target.value;

   if (userText !== '') {
      // Make http call 
      github.getuser(userText)
         .then(data => {
            console.log(data);
         })
   }
})