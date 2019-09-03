// ==UserScript==
// @name         喵绅士键盘翻页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zh.nyahentai.org/g/*/list/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).keydown(function(event){
        if(event.which==37){
            $("#pagination-page-bottom .previous").click();
        }
        if(event.which==39){
            $("#pagination-page-bottom .next").click();
        }
    });
})();
