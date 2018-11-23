function easyHTTP () {
   this.http = new XMLHttpRequest();
}

// GET 
easyHTTP.prototype.get = function(url, callback) {
   this.http.open('GET', url, true);

   let self = this;// to fix the 'this issue' do not have it in ES6
   this.http.onload = function() {
      if(self.http.status === 200){
         callback(null, self.http.responseText); // null - error 
      } else {
         callback('Error: ' + self.http.status );
      }
   }

   this.http.send();
}
// POST 
easyHTTP.prototype.post = function(url, data, callback){
   this.http.open('POST', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');

   let self = this;// to fix the 'this issue' do not have it in ES6
   this.http.onload = function() {
    
   callback(null, self.http.responseText); // null - error 
    
   }

   this.http.send(JSON.stringify(data))
}

// PUT 

easyHTTP.prototype.put = function(url, data, callback){
   this.http.open('PUT', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');

   let self = this;// to fix the 'this issue' do not have it in ES6
   this.http.onload = function() {
    
   callback(null, self.http.responseText); // null - error 
    
   }

   this.http.send(JSON.stringify(data))
}

// DELETE

easyHTTP.prototype.delete = function(url, callback) {
   this.http.open('DELETE', url, true);

   let self = this;// to fix the 'this issue' do not have it in ES6
   this.http.onload = function() {
      if(self.http.status === 200){
         callback(null, 'Post Deleted'); // here will come back empty object
      } else {
         callback('Error: ' + self.http.status );
      }
   }

   this.http.send();
}
