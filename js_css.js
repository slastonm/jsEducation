
"use strict";

var div= document.getElementById('mov');
var size=10;
var styles;
(function () {
    document.getElementById('left').onclick = function (){
        div.style.left = div.offsetLeft - size + 'px';
    }
    document.getElementById('top').onclick =function(){
        console.log(div.offsetTop);
        div.style.top = div.offsetTop + size + 'px';        
    }
    document.getElementById('bottom').onclick =function(){
        div.style.top = div.offsetTop - size + 'px';        
    }    
    document.getElementById('right').onclick =function(){
        div.style.left = div.offsetLeft + size + 'px';        
    }



    var test=document.getElementById('test');
    var test2=document.getElementById('test2');
    var test3=document.getElementById('test3');
    function randomInteger(min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
    }
    
    test.style.left=randomInteger(10, 100)+'px';
    test.style.top=randomInteger(10, 100)+'px';
    test2.style.left=randomInteger(10, 100)+'px';
    test2.style.top=randomInteger(10, 100)+'px';
    test3.style.left=randomInteger(10, 100)+'px';
    test3.style.top=randomInteger(10, 100)+'px';    

    var yournumber= document.getElementById('yournumber');
    document.getElementById('answer').onclick=function(){
        var computerNumber =randomInteger(1, 20);
        var humanNumber=yournumber.value;
            if(computerNumber>humanNumber){
                alert('The number is less than planned');
            }
            else if(computerNumber==humanNumber){
                alert('Win');
            }
            else{
                alert('Greater than a predetermined number');
            }
        }
    // ==============Regex   

        var user = '12345';
        var text = "admin";
        var pattern =/\d\d\d\d\d/;
        var wordValue =/\w\w\w\w\w/;


    var passwordValue=document.getElementById('name').value;
    var passwords=document.getElementById('password').value;
    var remembers=document.getElementById('remember');
    document.getElementById('enter').onclick=function(){

        if(wordValue.test(passwordValue) == true && passwordValue==text){
            var nameArea = document.getElementById("name");
            nameArea.classList.add("succses", "bla");             
        }
        else{
            var nameArea = document.getElementById("name");
            nameArea.classList.add("error", "syka");
        }

        // ===================#2 =====================

        if(pattern.test(passwords) == true && passwords==user){
            var nameArea = document.getElementById("password");
            nameArea.classList.add("succses", "bla");             
        }
        else{
            var nameArea = document.getElementById("password");
            nameArea.classList.add("error", "syka");
        }

        // ======== check ========

        if (remembers.checked ==true){ 
        alert("Флажок установлен"); 
        }
        else {
        alert("Флажок не установлен")
        }

    };
    

})();
