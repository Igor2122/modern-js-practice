// https://github.com/settings/applications/939482

class Github {
   constructor() {
       this.client_id = 'd937ba7a41cca36fc1da';
       this.client_secret = 'adbcf6bc57c659db585388efc429c558e178e568';
   }

   async getuser (user) {
      const profileResponse  = 
      await fetch(`https://api.github.com/users/${user}?clinet_id=${this.client_id}&client_secret${this.client_secret}`);

      const profile = await profileResponse.json();

      return {
         // es6 plus if both are the same we can keep only one 'profile'
         profile
      }
   }
}

