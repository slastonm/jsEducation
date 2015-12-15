
// "use strict";

(function () {
    // регистрация события загрузки документа.
    if (window.addEventListener) window.addEventListener("load", init, false);
    else if (window.attachEvent) window.attachEvent("onload", init);

    var priceCount = document.getElementById('priceCount');
    priceCount.onchange = counter;


    var priceBlock = document.getElementById('price');
    var prceVal =priceBlock.value;

    var meat =document.getElementById('meat');
    var mushrooms =document.getElementById('mushrooms');
    var cheese =document.getElementById('cheese');



    // регистрация обработчиков событий элементов формы.
    function init() {
        pizzaForm.userName.onchange = nameOnChange;
        pizzaForm.email.onchange = emailOnChange;
        pizzaForm.phone.onchange = phonecodeOnChange;
        pizzaForm.onsubmit = onsubmiHandler;
    }

    var totalPrice = 0;
    function counter(totalPrice){

        var meatBonus;
        var sizePizza =pizzaForm.sizes.value;


        if(meat.checked){
            meatBonus = 2;
        }
        else{
            meatBonus = 0;
        }
        if(mushrooms.checked){
            mushroomsBonus = 2;
        }
        else{
            mushroomsBonus = 0;
        }
        if(cheese.checked){
            cheeseBonus = 2;
        }
        else{
            cheeseBonus = 0;
        }

        totalPrice=Number(sizePizza) + Number(meatBonus) + Number(mushroomsBonus) + Number(cheeseBonus) ;
        return priceBlock.value = totalPrice;

    }



    function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        if (res == -1) elem.className = "error"; 
        else elem.className = "sucsses";
    }


    function nameOnChange() {
        var pattern = /\S/;
        validate(this, pattern);
    }

    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    function phonecodeOnChange() {
        var pattern = /\d{9}/;
        validate(this, pattern);
    }


    function onsubmiHandler() {

        var invalid = false;

        for (var i = 0; i < pizzaForm.elements.length; ++i) {
            var e = pizzaForm.elements[i];
            if (e.type == "text" && e.onchange) {
                e.onchange(); 
                if (e.className == "error") invalid = true;
            }
        }
        if (invalid) {
            alert("Допущены ошибки при заполнении формы.");
            return false; 
        }
    }  

})();


    var checkboxes = [meat, mushrooms, cheese];
    var totalPrice;
    function counter(){

        var counter = 0,
            sizePizza =pizzaForm.sizes.value;

        checkboxes.forEach(function(el){
            el.checked ? counter++ : null;
        });

        totalPrice=Number(sizePizza) + counter*2 ;
        return priceBlock.value = totalPrice;
    }