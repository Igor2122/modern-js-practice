const posts = [
   {title: 'Post One', body: 'This is Post One Body'},
   {title: 'Post Two', body: 'This is Post Two Body'},
];

function createPost (post){
   return new Promise((resolve, reject) => {
      setTimeout(function(){
         posts.push(post);

         const error = false;

         if(!error){
            resolve();
         } else {
            reject('Error: Somethig Went Wrong')
         }
      }, 2000);
   })
   
}

function getPosts() {
   setTimeout(function(){
      let output = '';
      posts.forEach(post => {
         output += `<li>${post.title}<br><p>${post.body}</p></li>`
      });
      document.querySelector('.posts').innerHTML = output;
   }, 0)
}

createPost({title: 'Post Three', body: 'This is Post Three Body'}).then(getPosts).catch((err) => {
   console.log(err);
});