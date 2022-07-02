"use strict"
import dataReplace, {
    reloadStylesCode
} from './helpers/DataReplace.js';
import menu, {
    switchIcon,
    resizeMenu,
    changeUrl,
    isSelect,
    toggleMenu,
    scrollLoad,
    scroll,
    loadMenu
} from './helpers/Menu.js';

document.addEventListener("DOMContentLoaded", e => {

    if (window.location.pathname === '/') return;

    menu()

    // scroll()

    scrollLoad()


    reloadStylesCode()

})

function clickListener(e) {
    switchIcon(e)
    changeUrl(e)
    isSelect(e)
    toggleMenu(e)
}

document.addEventListener('click', clickListener)

window.addEventListener("resize", resizeMenu)
