var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function(){
   var outData = JSON.parse(ourRequest.responseText);
   console.log(outData[0].name);
};

ourRequest.send();