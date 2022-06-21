"use strict"
import dataReplace from './helpers/DataReplace.js';
import menu, {
    switchIcon,
    resizeMenu,
    changeUrl,
    isSelect,
    scroll,
    loadMenu
} from './helpers/Menu.js';

document.addEventListener("DOMContentLoaded", e => {

    const replaces = document.querySelectorAll("data-replace")

    replaces.forEach(el => dataReplace(el, el.getAttribute("url"), () => {
        scroll()
    }))

    if (window.location.pathname === '/') return;

    loadMenu('./app/helpers/data.json');

    menu()

})

function clickListener(e) {
    switchIcon(e)
    changeUrl(e)
    isSelect(e)
}

document.addEventListener('click', clickListener)

window.addEventListener("resize", resizeMenu)
