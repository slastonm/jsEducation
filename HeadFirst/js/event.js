
"use strict";


window.onload = init;
function init(){
      var image = document.getElementsByTagName("img"); 
      for( var i = 0; i<image.length; i++){
         image[i].onclick = showImg;
        function showImg (e){
            image = e.target;
            name = image.id;
            name ="img/" + name + ".jpg";
            image.src =name;
            alert(image.src);
        } 
      }
}

(function () {




})();
