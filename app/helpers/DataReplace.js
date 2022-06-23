export default function dataReplace(element, url, cb) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            element.outerHTML = xhr.responseText
            reloadStylesCode();
            cb()
        } else {
            console.log("Error.responseText")
        }
    })

    xhr.open("GET", url)

    xhr.setRequestHeader('content-type', 'text/html; charset=utf-8')

    xhr.send()

}

export function reloadStylesCode() {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightBlock(el)
    });
}
