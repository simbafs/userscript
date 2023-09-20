// ==UserScript==
// @name         Free Quizlet
// @namespace    https://simbafs.cc
// @version      0.1
// @description  免費用 quizlet
// @author       simbafs
// @match        https://quizlet.com/explanations/textbook-solutions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.hideBelow--s').forEach(item => item.remove());
    document.querySelector('.ExplanationSolutionsContainer').classList.remove('hnqbbas');

    console.log('已經把登入牆移掉，如果有任何問題請回報 me@simbafs.cc')
    // Your code here...
})();
