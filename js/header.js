function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : './';

    const HTML = `
        <base href="/48-grupe-dom-events/">
        <a href="${href}">Home</a>
        <a href="${href}single-button-click/">Single button click</a>
        <a href="${href}counter/">Counter</a>
        <a href="${href}basketball/">Basketball</a>
        <a href="${href}virykle/">Virykle</a>
        </base>
    `;
    navDOM.innerHTML = HTML;
}