"use strict"
import dataReplace from './helpers/DataReplace.js';

document.addEventListener("DOMContentLoaded", e => {

    const replaces = document.querySelectorAll("data-replace")

    replaces.forEach(el => dataReplace(el, el.getAttribute("url")))
})
