const http = new easyHTTP;

//  https://jsonplaceholder.typicode.com/ -- link to dummy REST API

// GET posts

// let resutlt = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//    if(err){
//       console.log(err);// checking here for erros 
//    } else {
//       console.log(typeof(posts));
//    }
//    console.log(posts);
// });

// Get single post just to add /1 - to the above 
   // Create Data
   const data = {
      title: 'Cutom Post that been updated',
      body: 'Cutom Post',
      author: 'Igor'
   };
//Posting the data / creating post 

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//    if(err){
//       console.log(err);// checking here for erros 
//       } else {
//          console.log(post);
//       }
// })

// Update Popst - PUT 

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
      if(err){ 
      console.log(err);// checking here for erros 
      } else {
         console.log(post);
      }
})

// Delete request 

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
   if(err){
      console.log(err);// checking here for erros 
   } else {
      console.log(response);// will return response -> Post Deleted 
   }
});











