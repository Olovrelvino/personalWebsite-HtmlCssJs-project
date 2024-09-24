var typed = new Typed(".multiple-text", {
    strings: ["Student of UKSW", "Information Technology Major", "Code Anthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}