<?php 
   include_once 'dbconnect.php';

   $dbcon = new Recep();
   $result = $dbcon->getAllRec();

   foreach ($result as $l ) {
      
   }

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
   <script src="js.js"></script>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<body>
   <script>
      $(document).ready(function(){
         
      });






   </script>
   <button>Click me to get Data!</button>
   <div class="test"></div>
</body>
</html>

<script>
   //       var show = '$result';
   //       var ourRequest = new XMLHttpRequest();
   //       ourRequest.open('GET', {show});
   //       ourRequest.onload = function(){
      //       var outData = JSON.parse(ourRequest.responseText);
      //       console.log(outData[0].name);
      // ourRequest.send();
// };
</script>