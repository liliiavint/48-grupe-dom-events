function header() {
    const navDOM = document.querySelector('.main-nav');
    const localhost = 'http://localhost:4810';
    const github = 'https://liliiavint.github.io/48-grupe-dom-events';
    const liveserver = 'http://127.0.0.1:5501'
    const href = location.hostname === 'localhost' ? localhost : (location.hostname === 'liliiavint.github.io' ? github : liveserver);

    const HTML = `
        <a href="${href}/">Home</a>
        <a href="${href}/single-button-click">Single button click</a>
        <a href="${href}/counter/">Counter</a>
        <a href="${href}/basketball/">Basketball</a>
        <a href="${href}/virykle/">Virykle</a>
        <a href="${href}/cart/">Prekiu krepselis</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };
