
"use strict";
(function () {

    var set = document.getElementById('set');
    var get = document.getElementById('get');

    set.onclick =function(){
        document.cookie = 'info=test';
    }
    get.onclick =function(){
        alert(document.cookie);
    }


})();
