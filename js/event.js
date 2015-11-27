
"use strict";
(function () {
    var numArea = document.getElementById('field');
    var numAreaValue = numArea.innerHTML;
    
    window.addEventListener("load", function () {
        var wrapper = document.getElementById('block');

            wrapper.addEventListener("click", function (e) {
                var btnValue = e.target.innerHTML;
                numArea.value +=btnValue
            }, false);


    }, false);   

    var resetBtn = document.getElementById('reset');
    resetBtn.onclick=function(){
        numArea.value="";
    }


})();
