// ==UserScript==
// @name         AskFM Login Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides the prompt to log in when browsing the site.
// @author       cin-ni
// @run-at       document-idle
// @match        https://ask.fm/*
// @icon         https://www.google.com/s2/favicons?domain=ask.fm
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let i = 0;

    const timer = setInterval(() => {
        if (i === 10) return clearInterval(timer);
        CheckIfLoaded();
    }, 1000);

    function CheckIfLoaded() {
        if (document.getElementsByClassName("lightbox_overlay")[0]) {
            clearInterval(timer);
            return (document.getElementsByClassName("lightbox_overlay")[0].style.display = "none");
        }
        i++;
        console.log(i);
    }
})();
