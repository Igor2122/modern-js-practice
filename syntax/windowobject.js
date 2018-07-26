// WINDOW / METHODS / OBJECTS / PROPERTIES



// PROMPT 

// const input = prompt(); // will alert the prompt back

// alert(input);

// CONFIRM 

// if(confirm('Are you sure? ')) { // will alert are you sure message with ok button to clisk or cancel
//     // console.log("yes");
// } else {
//     console.log('No');
// }

let val; 

// OUTER HEIGHT AND WIDTH 

val = window.outerHeight;
val = window.outerWidth;


// INNER HEIGHT AND WIDTH - this will take scrollbars into consideration of the windown width  

val = window.innerHeight; // this will count if the dev tools are open will substract the value from it 
val = window.innerWidth;


// SCROLL POINTS 
val = window.scrollY;

// LOCATION OBJECT 

val = window.location;  
val = window.location.hostname; // will show the domain name here 
val = window.location.port;
val = window.location.href; // will return the host name and the port 
val = window.location.search;
// window.location.href = 'http://fedf.co.uk/'; // will redirect to the another webiste 
// window.location.reload();

// HISTORY OBJECT 
window.history.go(-1); // will bring us back one site where we came from
val = window.history.length; // will return th # of sites we visited 


// NAVIGATOR OBJECT -- WILL BE WITH THE ACTUEAL BROWSER 

val = window.navigator;

val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);








