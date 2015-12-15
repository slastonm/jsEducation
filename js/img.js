
"use strict";

(function () {

    window.addEventListener("load", function (){

        var first = document.getElementById('first');
        var second = document.getElementById('second');
        var third = document.getElementById('third');
        var image =document.getElementById('image');
        var img = "img/1.jpg";
        var secondImg = "img/2.jpg";
        var thirdImg = "img/3.jpg";



        // ====  variant with function dont work ===
        // function images (path){
        //     alert('zrada');
        //     image.src= "";
        //     image.src = path;
        // };

        // first.onclick = images(img);
        // second.onclick = images(secondImg);
        // third.onclick = images(thirdImg);        

        first.onclick =function(){
            image.src = img;
        }
        second.onclick = function(){
            image.src = secondImg;
        }
        third.onclick = function(){
            image.src = thirdImg;
        }

        
    });

    var big = document.getElementById('big'),
        one = document.getElementById('one'),
        two = document.getElementById('two'),
        tester = document.getElementsByClassName('smallImg'),
        three =document.getElementById('three');

        var big;

        one.onclick = function(){
            big.src=this.src;
        }
        two.onclick = function(){
            big.src=this.src;
        }
        three.onclick = function(){
            big.src=this.src;
        }



})();
