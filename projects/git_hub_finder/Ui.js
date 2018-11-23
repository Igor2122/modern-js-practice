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
}