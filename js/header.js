function header() {
    const navDOM = document.querySelector('.main-nav');
<<<<<<< HEAD
    const localhost = 'http://localhost:4810';
    const github = 'https://liliiavint.github.io/48-grupe-dom-events';
=======
    const href = location.hostname === "lokalhost" ? 'http://liliiavint.github.io/48-grupe-dom-events/' : './http://lokalhost:4810/';
>>>>>>> 2f68db3b7a0087fda83f8331ee9ea3dcca3829da
    
    const href = location.hostname === 'localhost' ? localhost : github;


    const HTML = `
<<<<<<< HEAD
        <a href="${href}/">Home</a>
        <a href="${href}/single-button-click">Single button click</a>
        <a href="${href}/counter/">Counter</a>
        <a href="${href}/basketball/">Basketball</a>
        <a href="${href}/virykle/">Virykle</a>
=======
        <a href="${href}">Home</a>
        <a href="${href}single-button-click/">Single button click</a>
        <a href="${href}counter/">Counter</a>
        <a href="${href}basketball/">Basketball</a>
        <a href="${href}virykle/">Virykle</a>
>>>>>>> 2f68db3b7a0087fda83f8331ee9ea3dcca3829da
    `;
    navDOM.innerHTML = HTML;
}

export { header };
