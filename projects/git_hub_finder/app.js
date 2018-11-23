
const serchUser = document.getElementById('searchUser');
const github = new Github;
// bring the UI class 
const ui = new UI;

serchUser.addEventListener('keyup', (e) => {
   // get input text 
   let userText = e.target.value;

   if (userText !== '') {
      // Make http call 
      github.getuser(userText)
         .then(data => {
            if (data.profile.message === 'Not Found') {
               alert('User Is not Found')
            } else {
               ui.showProfile(data.profile);
            }
         })
   } else {
      // Clear profile
   }
})