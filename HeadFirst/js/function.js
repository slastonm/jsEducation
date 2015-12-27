
"use strict";


window.onload = init;
function init(){


    function fun(echo) {     
        console.log(echo); 
    };
    // fun("hello"); 
    function boo(fun) {    
        fun("boo"); 
    };
    boo(fun);
    fun(boo);

    var numberArray = [1,4,3,6,2,10,5];
    function compare (num1, num2){
        if(num1>num2){
            return 1;
        }
        else if(num1 === num2){
            return 0;
        }
        else{
            return -1;
        }
    }
    function compare2(num1, num2){
        if(num1>num2){
            return -1;
        }
        else if(num1 === num2){
            return 0;
        }
        else{
            return 1;
        }        
    }
    numberArray.sort(compare2);

    console.log(numberArray);
}
function makeCounter (){
    var count = 0;
    function counter (){
        count = count +1;
        return count;
    }    
    return counter;
}
var doCount = makeCounter();

(function () {




})();



// var count = 0;

// window.onload = function(){
//     var button = document.getElementById('clickme');
//     button.onclick = handleClick;
// }

// function handleClick (){
//     var msg = "You click me";
//     var out = document.getElementById('message');
//     count ++;
//     out.innerHTML = msg + count;
// }

window.onload = function(){
    var count = 0;
    var msg = "You click me";
    var out = document.getElementById('message');
    var button = document.getElementById('clickme');
    button.onclick = function(){
        count ++;
        out.innerHTML = msg + count;        
    };

}
