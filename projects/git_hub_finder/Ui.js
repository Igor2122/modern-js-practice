class UI {
   constructor(){
      this.profile = document.getElementById('profile');
   }

   showProfile (user) {
      this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
         <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" >
            <a href="${user.html_url}" target="_blank" class="btn brn-primary btn-block">View Profile</a>
         </div>
         <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Repos: ${user.public_gists}</span>
            <span class="badge badge-success">Public Repos: ${user.followers}</span>
            <span class="badge badge-ifo">Public Repos: ${user.following}</span>
            <br>
            <br>
            <div class="list-group">
               <div class="list-group-item">Company: ${user.company}</div>
               <div class="list-group-item">Blog: ${user.blog}</div>
               <div class="list-group-item">Location: ${user.location}</div>
               <div class="list-group-item">Member Since: ${user.created_at}</div>
            </div>
         </div>
      </div>
   </div>
   <h3 class="page-heading mb-3">Latest Repos </h3>
   <div id="repos"></div>
   `
   }
   
   clearProfile () {
      this.profile.innerHTML = '';
   }
   
   clearAlertMessage () {
      const currentAlert = document.querySelector('.alert')
      if(currentAlert){
         currentAlert.remove();
      }
   }
   
   showAlert (message, className) {
      // Clear any remaining alerts
      this.clearAlertMessage();
      const div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(message));
      document.querySelector('.searchContainer').appendChild(div);
      
      // remove after 3 sec 
      setTimeout(() => {
         this.clearAlertMessage();
      }, 3000);
   }
   
   showRepos (reposArr) {
      let output = '';
      reposArr.forEach((repo)=> {
         output += `
            <div class="card card-body mb-2">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
                  </div>
                  <div class="col-md-6">
                     <div class="list-group-item">Stars: ${repo.stargazers_count}</div>
                     <div class="list-group-item">Watchers: ${repo.watchers_count}</div>
                     <div class="list-group-item">Forks: ${repo.forks_count}</div>
                  </div>
               </div>
            </div>
         `;
      });
      
      document.getElementById('repos').innerHTML =  output;// getting the repos div from the profile dyn generated
   }
}