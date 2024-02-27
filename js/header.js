function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : './';

    const HTML = `
        <a href="${href}">Home</a>
        <a href="${href}single-button-click/index.html">Single button click</a>
        <a href="${href}counter/index.html">Counter</a>
        <a href="${href}basketball/index.html">Basketball</a>
        <a href="${href}virykle/index.html">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };