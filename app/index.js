"use strict"
import dataReplace, {
    reloadStylesCode
} from './helpers/DataReplace.js';
import {
    loadMenu,
    clickMenu,
    resizeMenu,
} from './helpers/Menu.js';

document.addEventListener("DOMContentLoaded", e => {

    if (window.location.pathname === '/') return;

    loadMenu()

    reloadStylesCode()
})

function clickListener(e) {
    clickMenu(e)
}

document.addEventListener('click', clickListener)

window.addEventListener("resize", resizeMenu)
