// ==UserScript==
// @name         Free Quizlet
// @namespace    https://github.com/simbafs/userscript
// @version      1.1.0
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
    clear()
    let btn = createBtn('clear', clear)
    document.body.append(btn)

    console.log('如果有任何問題請回報 me@simbafs.cc 或按 「回報 bug」回報')
    //})
})();

function clear(){
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\begin{equation}", right: "\\end{equation}", display: true},
            {left: "\\begin{align}", right: "\\end{align}", display: true},
            {left: "\\begin{alignat}", right: "\\end{alignat}", display: true},
            {left: "\\begin{gather}", right: "\\end{gather}", display: true},
            {left: "\\begin{gather*}", right: "\\end{gather*}", display: true},
            {left: "\\begin{CD}", right: "\\end{CD}", display: true},
            {left: "\\[", right: "\\]", display: true},
        ],
    })

    // remove over layer
    document.querySelectorAll('.hideBelow--s').forEach(item => item.remove());

    // expand solution if you donot login
    document.querySelector('.ExplanationSolutionsContainer').classList.remove('hnqbbas');

    // remove blur when you login and reach limit
    document.querySelectorAll('.b16n2kvb').forEach(item => item.classList.remove('b16n2kvb'))
}

function createBtn(text, onclick){
    let btn = document.createElement('button')
    btn.textContent = text
    btn.onclick = onclick
    btn.style.position = 'fixed'
    btn.style.top = '80px'
    btn.style.left = '20px'
    btn.style.fontSize = '1.5rem'
    return btn
}
