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

    loadMenu('./app/helpers/data.json');

    menu()

    const replaces = document.querySelectorAll("data-replace")

    replaces.forEach(el => dataReplace(el, el.getAttribute("url"), () => {
        scroll()
    }))

})

function clickListener(e) {
    switchIcon(e)
    changeUrl(e)
    isSelect(e)
}

document.addEventListener('click', clickListener)

window.addEventListener("resize", resizeMenu)
