"use strict";


(function () {
    var count = 0;
    var interval = 0;
    function Count(){
        count++;
        document.getElementById("out").innerHTML = count;
    }
    
    document.getElementById('start').onclick = function () {
       interval = setInterval(Count, 1000);
    }
    document.getElementById('stop').onclick = function () {
        clearInterval(interval);
    }
    document.getElementById('clear').onclick = function () {
        document.getElementById('out').innerHTML = 0;   
    }

    var sum = 0;
    var text = document.getElementById('put1');
    var text2 = document.getElementById('put2');
    var val = text.value;
    var val2 = text2.value;

   
    document.getElementById('getput').onclick = function () {
        sum = Number(val) + Number(val2);
        alert(sum);
    }


    var runText = "Run run run tet run";
    var speed = 1000;
    var i = 0;
    function myLoop() {           //  create a loop function
        setTimeout(function () { //  call a 3s setTimeout when the loop is called
            console.log(runText[i]);
            i++;
            if (i < runText.length) { //  if the counter < 10, call the loop function
                myLoop(); //  ..  again which will trigger another
            } //  ..  setTimeout()
        }, speed);
    }
    myLoop();


})();

