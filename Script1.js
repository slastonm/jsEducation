"use strict";


(function () {
    var links = document.getElementById('link');
    links.innerHTML = "Hello";


    var textBlock = document.getElementsByTagName('p');
    for (var i = 0; i < textBlock.length; i++) {
        textBlock[i].innerHTML = "New text";
    }
    
    var e = document.getElementById("list");

    // childNodes - получение всех дочерних узлов.
    for (var i = 0; i < e.childNodes.length; ++i) {
        var temp = e.childNodes[i];

        // если найденный узел не элемент то пропустить его
        if (temp.nodeType != 1) {
            continue;
        }

        e.childNodes[i].style.color = "red";
    }
    var div1 = document.getElementById('div1');
    var p1 = document.createElement('p');
    p1.innerHTML = "CreatElement";
    div1.appendChild(p1);


    var p2 = document.createElement('p');
    p2.innerHTML = "CreatElement2";

    document.body.insertBefore(p2, div1);



    
    document.getElementById("answerButton").onclick = function () {

        // получение массива элементов с атрибутом name со значеним answer
        var radioButtons = document.getElementsByName("answer");

        var res = "";
        for (var i = 0; i < radioButtons.length; i++) {
            res += radioButtons[i].value + " " + radioButtons[i].checked;
        }
        alert(res);
    }
    

    document.write("<hr>");
    var a1 = document.getElementById('link1');
    var a2 = document.getElementById('link2');
    var a3 = document.getElementById('link3');


    a3.removeAttribute("href");
    document.write(a3.getAttribute("href")+"</br>");

    a2.setAttribute("href", "vk.com");
    document.write(a2.getAttribute("href"));

    document.write("<hr>");


    var cont = document.getElementById('container');
    document.getElementById('add').onclick = function () {
        var p1 = document.createElement('p');
        p1.innerHTML = "CreatElement";
        container.appendChild(p1);
        if (cont.children.length > 3) {
            cont.parentNode.removeChild(cont);
        } alert('not 3 ');
    }
    document.getElementById('remove').onclick = function () {
        if (cont.parentNode > 10) {
            cont.parentNode.removeChild(cont);
        }
        //cont.parentNode.removeChild(cont);
    }
})();
