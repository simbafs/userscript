// ==UserScript==
// @name         Free Quizlet
// @namespace    https://simbafs.cc
// @version      1.0.0
// @description  免費用 quizlet
// @author       simbafs
// @match        https://quizlet.com/explanations/textbook-solutions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => {
        let a = (new Date()).toISOString()
        console.log(a)

        console.log(document.querySelectorAll('.hideBelow--s'))
        console.log(document.querySelector('.ExplanationSolutionsContainer'))
        document.querySelectorAll('.hideBelow--s').forEach(item => item.remove());
        document.querySelector('.ExplanationSolutionsContainer').classList.remove('hnqbbas');

        console.log('已經把登入牆移掉，如果有任何問題請回報 me@simbafs.cc')
    }, 2000)

    // Your code here...
})();
