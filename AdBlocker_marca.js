// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-10-19
// @description  try to take over the world!
// @author       You
// @match        https://chatgpt.com/c/68f51baf-1804-832d-8da0-4b94b8ebde99
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

// ==UserScript==
// @name         Adblock Marca
// @match        *://www.marca.com/*
// ==/UserScript==

(function() {
    'use strict';

    const adSelectors = [
        '[id^="publi"]',
        '[class*="publi"]',
        '[id*="ad"]',
        '[class*="ad"]',
        '[class*="banner"]',
        '[class*="megabanner"]',
        '[class*="advertisement"]',
        'iframe[src*="ads"]',
        'iframe[src*="doubleclick"]',
        '.sticky-container',
        '.ad-slot',
        '.mod_publicidad'
    ];

    function removeAds() {
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    }

    removeAds();
    setInterval(removeAds, 2000);

    // Elimina los anuncios de marca.com
})();
