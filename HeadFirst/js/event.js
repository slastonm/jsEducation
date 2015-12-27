
"use strict";


window.onload = init;
function init(){
      var map = document.getElementById("zero");
      
      var image = document.getElementsByTagName("img"); 
      for( var i = 0; i<image.length; i++){
         image[i].onclick = showImg;
        function showImg (e){
            image = e.target;
            name = image.id;
            name ="img/" + name + ".jpg";
            image.src =name;
            setTimeout(reblur,1500, image);
        } 
        function reblur(image){
            name = image.id;
            name ="img/" + name + "blur.jpg";
            image.src =name;
        }
      }
        map.onmousemove = showCoords;
        function showCoords(event) {
            var x = event.clientX;
            var y = event.clientY;
            var coords = "X coords: " + x + ", Y coords: " + y;
            document.getElementById("coords").innerHTML = coords;
        }
}

(function () {




})();
