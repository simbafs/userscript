// ==UserScript==
// @name         Free Quizlet
// @namespace    https://github.com/simbafs/userscript
// @version      1.0.3
// @description  免費用 quizlet
// @author       simbafs
// @match        https://quizlet.com/explanations/textbook-solutions/*
// @require      https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js
// @require      https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js
// @resource     https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('loading free quizlet')
    // render latex
    document.querySelectorAll('.markdown-body').forEach(item => renderMathInElement(item))

    // remove over layer
    document.querySelectorAll('.hideBelow--s').forEach(item => item.remove());

    // expand solution if you donot login
    document.querySelector('.ExplanationSolutionsContainer').classList.remove('hnqbbas');

    // remove blur when you login and reach limit
    document.querySelectorAll('.b16n2kvb').forEach(item => item.classList.remove('b16n2kvb'))

    console.log('如果有任何問題請回報 me@simbafs.cc 或按 「回報 bug」回報')
    //})
})();
