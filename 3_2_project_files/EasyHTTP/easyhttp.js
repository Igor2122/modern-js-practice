function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP Get request 

easyHTTP.prototype.get = function (url) {
    this.http.open('Get', url, true);
    
    this.http.onload = () => {
        if(this.http.status === 200) {
            console.log(this.http.responseText)
        }
    }
    
    this.http.send()
    
}

// Make an HTTP Post request 
// Make an HTTP Put request 
// Make an HTTP Delete request 