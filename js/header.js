function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : './';

    const HTML = `
        <a href="${href}">Home</a>
        <a href="single-button-click">Single button click</a>
        <a href="counter/">Counter</a>
        <a href="basketball/">Basketball</a>
        <a href="virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };