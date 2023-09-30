// ==UserScript==
// @name         Free Quizlet
// @namespace    https://simbafs.cc
// @version      1.0.2
// @description  免費用 quizlet
// @author       simbafs
// @match        https://quizlet.com/explanations/textbook-solutions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => {
        // remove over layer
        document.querySelectorAll('.hideBelow--s').forEach(item => item.remove());

        // expand solution if you donot login
        document.querySelector('.ExplanationSolutionsContainer').classList.remove('hnqbbas');

        // remove blur when you login and reach limit
        document.querySelectorAll('.b16n2kvb').forEach(item => item.classList.remove('b16n2kvb'))

        console.log('如果有任何問題請回報 me@simbafs.cc 或按 「回報 bug」回報')
    }, 2000)
})();
