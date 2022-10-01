const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("scrollheader", window.scrollY > 0)
});

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: false
});

sr.reveal('.home-text',{delay:90, origin:'left'})
//sr.reveal('header',{delay:190, origin:'top'})
sr.reveal('.home-img',{delay:1090, origin:'right'})