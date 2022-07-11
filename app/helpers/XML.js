export function getAsync(url) {

    const req = new XMLHttpRequest();

    req.open('GET', url, false);

    req.send(null);

    if (req.status == 200)
        return req.responseText;
}
