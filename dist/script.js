"use strict";
var mediaQuery = window.matchMedia("(max-width: 600px)");
window.onload = function () {
    var nav = document.querySelector(".nav");
    mediaQuery.addEventListener("change", function () {
        if (mediaQuery.matches) {
            nav.classList.add("no-show");
        }
        else {
            nav.classList.remove("no-show");
        }
    });
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
        nav.classList.toggle("no-show");
    });
};
//# sourceMappingURL=script.js.map