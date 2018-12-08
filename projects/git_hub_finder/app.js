
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
               ui.showAlert('User not found', 'alert alert-danger')
            } else {
               // show profile 
               ui.showProfile(data.profile);
               console.log(ui.showProfile(data.profile));
               ui.showRepos(data.repos); // repos will be a part of the data object
            }
         });
   } else {
      ui.clearProfile();
   }
})