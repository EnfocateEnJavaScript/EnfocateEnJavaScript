import {
    getAsync
} from './XML.js';

export default function menu() {
    resizeMenu()
}

export function loadMenu(url) {

    let data = getAsync(url);

    let json = JSON.parse(data)

    const $navbar = document.createElement('div')
    $navbar.classList.add("navbar")
    $navbar.classList.add("none")
    $navbar.setAttribute('id', "navbar")

    json.contenido.forEach(item => {

        const $ul = document.createElement('ul')

        const $li = document.createElement('li')
        $li.textContent = item.title;

        $ul.appendChild($li)

        const $liUl = document.createElement('li')
        const $ulLi = document.createElement('ul')

        // Obtenemos el contenido de la pagina
        // let itemUrl = item.url;
        // const $container = document.createElement('div')
        // $container.innerHTML = document.getElementById('')
        // getAsync(itemUrl);

        let $h2 = document.querySelectorAll('h2')
        $h2.forEach(itemH2 => {
            let $id = itemH2.getAttribute('id')
            let $title = itemH2.textContent
            $ulLi.innerHTML += `<li><a class="navbar__a" href="#${$id}">${$title}</a></li>`
        })

        $liUl.appendChild($ulLi)
        $ul.appendChild($liUl)
        $navbar.appendChild($ul)
    })
    // console.log($navbar.innerHTML)
    document.getElementById('navbar').innerHTML = $navbar.innerHTML

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
    if (e.target.matches(".navbar__a")) {

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
    if (e.target.matches(".navbar__a")) {

        const navbarA = document.querySelector('.navbar__li-selected');
        if (navbarA)
            navbarA.classList.remove('navbar__li-selected')

        e.target.parentNode.classList.add('navbar__li-selected')
    }
}

export function scroll() {

    // agregar sectiones dinamicas


    const $sections = document.querySelectorAll("h2");

    const cb = entries => {
        entries.forEach(entry => {

            // const id = entry.target.querySelector('h2').getAttribute('id');
            const id = entry.target.getAttribute('id');

            if (entry.isIntersecting)
                document.querySelector(`.navbar__a[href="#${id}"]`).parentNode.classList.add('navbar__li-selected')
            else
                document.querySelector(`.navbar__a[href="#${id}"]`).parentNode.classList.remove('navbar__li-selected')
        })
    }

    const observer = new IntersectionObserver(cb, {
        rootMargin: "0px",
        threshold: [.3, .5]
    })

    $sections.forEach(el => observer.observe(el))
}

export function scrollLoad() {
    // doing scroll when change a middle of other page
    let href = localStorage.getItem('href');

    localStorage.removeItem('href');

    if (href)
        scrollSmooth(href);

    // Open menu when change page
    document.querySelectorAll(".navbar .dark-gray").forEach(el => {

        if (el.href.includes(window.location.pathname)) {
            el.classList.add('navbar__a-link')

            const $navbar__liToggle = document.querySelector('.navbar__a-link').parentNode.parentNode

            $navbar__liToggle.classList.add('navbar-toggle-hide')
        } else
            el.classList.remove('navbar__a-link')
    });
}

export function toggleMenu(e) {
    if (e.target.matches('.navbar__toggle')) {
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
// ,
//         {
//             "title": "Tipos de datos en JavaScript",
//             "url": "./"
//         },
//         {
//             "title": "Estructuras de control",
//             "url": "./"
//         },
//         {
//             "title": "POO",
//             "url": "./"
//         },
//         {
//             "title": "Objetos y funciones del lenguaje",
//             "url": "./"
//         },
//         {
//             "title": "Programacion asincrona",
//             "url": "./"
//         },
//         {
//             "title": "This en javascript",
//             "url": "./"
//         },
//         {
//             "title": "JSON",
//             "url": "./"
//         },
//         {
//             "title": "DOM",
//             "url": "./"
//         },
//         {
//             "title": "Ajax asincrono",
//             "url": "./"
//         }
