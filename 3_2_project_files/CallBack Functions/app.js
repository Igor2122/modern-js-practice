// THIS IS DONE IS ASSYNCRONUS WAY

// const post = [
//     {title: 'Pos1', body: 'This is Post One'},
//     {title: 'Post2', body: 'This is Post Two'}
//     ];
    
    
// // set time out is gonna mimic a server response time 
// function createPost(posts) {
//     setTimeout(function(){
//         post.push(posts);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         post.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
        
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'Post 3', body: 'This is post three'});

// getPosts();



const post = [
    {title: 'Pos1', body: 'This is Post One'},
    {title: 'Post2', body: 'This is Post Two'}
    ];
    
    
// here we create a callback function also can ber used as cb sorthand
// we pass as second pareameter the call back function here so the second function is called when we call the first function 
function createPost(posts, callback) {
    setTimeout(function(){
        post.push(posts);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        post.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        
        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post 3', body: 'This is post three'}, getPosts);







