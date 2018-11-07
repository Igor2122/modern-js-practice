
function getXmlHttpRequest() {
   if (window.getXmlHttpRequest) {
      try {
         return new XMLHttpRequest();
      } catch (e) {}
   } else if (window.ActiveXObject) {
      try {
         return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {}
      try {
         return new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {}
   } 
   return null;
}