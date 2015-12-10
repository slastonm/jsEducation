
// "use strict";

(function () {
    var formNameVar = document.formName; 
    var forma =document.forms[0];   
    window.onload = function(){
        
        // forma.elements[0].value = "text";
        // forma.elements[1].value = "text2";


        formNameVar.test.value = "tyc tyc";
    };

    
    window.addEventListener('load', function(){
        formNameVar.addEventListener("submit", function(e){
            var isValid = true;
            var name = formNameVar.namef,
                emailVar =formNameVar.email;
            if (name.value.length == 0 && emailVar.value.length == 0 ) {
                isValid = false;
                alert('zrada');
            };


            if(!isValid){
                e.preventDefault();
                alert('peremoga');
            }
        })
    });

})();
