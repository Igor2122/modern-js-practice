// https://github.com/settings/applications/939482

class Github {
   constructor() {
       this.clientId = 'd937ba7a41cca36fc1da';
       this.clientSecret = 'aa047141782b8686be094b16ba3b4e2d5eee3802';
       this.reposCount = 5;
       this.reposSort = 'created: asc';
   }

   async getuser (user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
      
      
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

      const profile = await profileResponse.json();
      
      const repos = await repoResponse.json();

      return { 
         // es6 plus if both are the same we can keep only one 'profile'
         profile,
         repos: repos // is the same as above 
      }
   }
}

