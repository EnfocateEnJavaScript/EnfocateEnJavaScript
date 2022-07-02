'use strict'

export function loadMenu() {
    resizeMenu()

    loadMenuSelect()
}

export function clickMenu(e) {
    switchIcon(e)

    changeUrl(e)

    isSelect(e)

    toggleMenu(e)
}

export function switchIcon(e) {

    const $btnNavbarI = document.querySelector("#btn-navbar i")

    if (e.target.matches("#btn-navbar") || e.target.matches("#btn-navbar *")) {
        if ($btnNavbarI.classList.contains("bi-x")) {
            $btnNavbarI.classList.replace("bi-x", "bi-list")
            document.getElementById('navbar').classList.add("none")
        } else {
            $btnNavbarI.classList.replace("bi-list", "bi-x")
            document.getElementById('navbar').classList.remove("none")
        }
    }
}

let isResize = false;
export function resizeMenu(e) {
    if (document.location.pathname !== "/documents.html") return;

    if (window.innerWidth > 768) {
        document.getElementById('navbar').classList.remove("none")
        isResize = true;
    } else {
        if (isResize) {
            document.getElementById('navbar').classList.add("none")
            document.querySelector("#btn-navbar i").classList.replace("bi-x", "bi-list")
            isResize = false;
        }
    }
}

export function changeUrl(e) {

    // When click in theme on navbar
    if (e.target.matches('.navbar__a-link')) {
        toggleMenu(e)

        hideBtnNavbar()
    }

    // When click in a link
    if (e.target.matches(".navbar>ul>li:last-child a")) {

        e.preventDefault();

        // Check if we are in page, else change of page
        let myUrl = window.location.pathname

        let theUrl = e.target.parentNode.parentNode.parentNode.parentNode.querySelector('a').href.split('/').pop()

        if (!myUrl.includes(theUrl)) {

            localStorage.setItem('href', e.target.getAttribute("href"))

            // let href = localStorage.getItem(href);
            // alert(href)

            document.location.href = theUrl

        }

        // doing scrollY smooth
        hideBtnNavbar()

        // id of item to have scroll smooth
        let id = e.target.getAttribute("href")

        scrollSmooth(id)
    }
}

export function isSelect(e) {
    if (e.target.matches(".navbar>ul>li:last-child a")) {

        const navbarA = document.querySelector('.navbar__li-selected');
        if (navbarA)
            navbarA.classList.remove('navbar__li-selected')

        e.target.parentNode.classList.add('navbar__li-selected')
    }
}

export function loadMenuSelect() {
    // doing scroll when change a middle of other page
    let href = localStorage.getItem('href');

    localStorage.removeItem('href');

    if (href)
        scrollSmooth(href);

    // Open menu when change page
    document.querySelectorAll(".navbar>ul>li>a").forEach(el => {

        if (el.href.includes(window.location.pathname)) {
            el.classList.add('navbar__a-link')

            const $navbar__liToggle = document.querySelector('.navbar__a-link').parentNode.parentNode

            $navbar__liToggle.classList.add('navbar-toggle-hide')
        } else
            el.classList.remove('navbar__a-link')
    });
}

export function toggleMenu(e) {
    if (e.target.matches('#navbar i')) {
        const $navbar__liToggle = e.target.parentNode.parentNode
        $navbar__liToggle.classList.contains('navbar-toggle-hide') ?
            $navbar__liToggle.classList.remove('navbar-toggle-hide') :
            $navbar__liToggle.classList.add('navbar-toggle-hide')
    }
}

function hideBtnNavbar() {
    if (window.innerWidth < 768) {
        document.getElementById('navbar').classList.add("none")
        document.querySelector("#btn-navbar i").classList.replace("bi-x", "bi-list")
    }
}

function scrollSmooth(idItem) {
    let item = document.getElementById(idItem.substring(1, idItem.length));

    let scrollY = (window.scrollY + item.getBoundingClientRect().top) - 16
    let totalScroll = window.scrollY + item.getBoundingClientRect().top

    window.scroll({
        top: totalScroll === 48 ? 0 : scrollY,
        left: 0,
        behavior: 'smooth'
    });
}
