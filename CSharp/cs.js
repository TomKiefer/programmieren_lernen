document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const linksNav = document.querySelector('.hyperlinks');
    const header = document.querySelector('header');
    const titleH1 = header ? header.querySelector('h1') : null;

    if (hamburger && menu){
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    document.querySelectorAll('.has-submenu > a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = link.parentElement;
            parent.classList.toggle('open'); 
        });
    });

    function checkLinksFit(){
        if (!linksNav || !header || !titleH1) return;

        // kleine Bildschirme: ausblenden
        if (window.matchMedia('(max-width: 800px)').matches) {
            linksNav.style.display = 'none';
            return;
        }

        const h1Rect = titleH1.getBoundingClientRect();
        const linksRect = linksNav.getBoundingClientRect();

        const overlap = linksRect.left <= (h1Rect.right + 8);

        if (overlap) {
            linksNav.style.display = 'none';
        } else {
            linksNav.style.display = 'flex';
        }
    }

    // initial und bei Größe/Fonts reagieren
    checkLinksFit();
    window.addEventListener('resize', checkLinksFit);
    if (document.fonts){
        document.fonts.ready.then(checkLinksFit);
    }
});