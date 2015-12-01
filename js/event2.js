
"use strict";
(function () {

    window.onbeforeunload = function () {
        return "Вы уверены, что хотите закрыть окно?";
    }
    window.onload = function () {
        
        document.onkeypress = function (e) {
            var main = document.getElementById('text');
            if(e.charCode == 1082 || e.charCode == 114){
                    main.className = "red";
            }
            else if (e.charCode == 1087 || e.charCode == 103) {
                    main.className = "green";
                    
            }
            else if (e.charCode == 1080 || e.charCode == 98) {
                    main.className = "blue";
            }            
            else {
                // alert('zrada');
            }

            console.log("onkeyup event");
            console.log("charCode = " + e.charCode); // код символа (передается при событии keypress)
        };

        document.onkeydown = checkKey;
        function checkKey(e) {

            e = e || window.event;

            var size=15;
            var hero = document.getElementById('hero');
            if (e.keyCode  == '38' || e.keyCode  == '87') {
                hero.style.top = hero.offsetTop - size + 'px';   
                // up arrow
            }
            else if (e.keyCode == '40' || e.keyCode  == '83') {
                hero.style.top = hero.offsetTop + size + 'px';   
                // down arrow
            }
            else if (e.keyCode == '37'|| e.keyCode  == '65') {
                hero.style.left = hero.offsetLeft - size + 'px';
               // left arrow
            }
            else if (e.keyCode == '39'|| e.keyCode  == '68') {
                hero.style.left = hero.offsetLeft + size + 'px';  
               // right arrow
            }

        };
        var sale = document.getElementById('sale');


        sale.onmousemove =function(event){
            console.log(this.value = event.pageX+':'+event.pageY);
            var target = event.target;
            target.style.left=event.pageX +10 +'px';
            target.style.top=event.pageY +10 +'px';
        }

        sale.onmouseover = function(event) {
          var target = event.target;
          target.style.background = 'pink';
          var cor = target.clientX;
          console.log(cor);
        };

        sale.onmouseout = function(event) {
          var target = event.target;
          target.style.background = '';
        };
    };
})();
