function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : './';

    const HTML = `
        <a href="${href}48-grupe-dom-events">Home</a>
        <a href="${href}48-grupe-dom-events/single-button-click/">Single button click</a>
        <a href="${href}48-grupe-dom-events/counter/">Counter</a>
        <a href="${href}48-grupe-dom-events/basketball/">Basketball</a>
        <a href="${href}48-grupe-dom-events/virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };