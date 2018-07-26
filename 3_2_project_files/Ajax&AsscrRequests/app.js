document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'plain.txt', true); // GET -method, file we open, true for assynchronys request 
  
  // test the readystate
  console.log('Redystate', xhr.readyState);
  
  
  // Optional  - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('Readystate', xhr.readyState); // will return ready stte 3 - processing the request as it is loading/fetching the data
    if(xhr.readyState === 3){
      document.getElementById('output').innerHTML =`Document ready state is:  <h1>${xhr.readyState}</h1>` ;
    }
    
  };
  
  // On error - in case something goes wrong 
  xhr.onerror = function(){
    console.log('reqeust error'); 
  }
  
  
  xhr.onload = function () {
      // test the readystate
  console.log('Redystate', xhr.readyState);
    
    if(xhr.readyState == 4){
      const p = document.createElement('p');
      
      p.innerHTML =`${this.responseText}` ;
      
      document.getElementById('output').appendChild(p)
    }
  
    if(xhr.status === 200){
    console.log(this.responseText); // this - xhr response text - what we get back from the request 
    }
  }
  
  xhr.send(); // to actually get back the response 
  
  // Ready State Values
    // 0: request not initialized
    // 1: server connection established
    // 2: reqeust received
    // 3: processing request
    // 4: request finished and response is ready 
  
  // HTTP statuses: 
    // 200: OK;
    // 403: forbidden;
    // 404: not found;
    
    
}