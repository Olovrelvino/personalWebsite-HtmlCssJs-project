var typed = new Typed(".multiple-text", {
    strings: ["Student of UKSW", "Information Technology Major", "Code Anthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         const target = document.querySelector(this.getAttribute('href'));

//         // Remove 'active' class from all links
//         document.querySelectorAll('.navbar a').forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add 'active' class to the clicked link
//         this.classList.add('active');

//         // Smooth scroll to the section (only if the target exists)
//         if (target) {
//             e.preventDefault();
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Mendapatkan semua elemen section yang ditargetkan
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Fungsi untuk mengubah tautan yang aktif
function changeActiveNav() {
    let index = sections.length;

    // Loop melalui setiap section untuk memeriksa apakah berada di viewport
    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

    // Hapus class 'active' dari semua tautan
    navLinks.forEach((link) => link.classList.remove('active'));

    // Tambahkan class 'active' pada tautan yang sesuai dengan section yang sedang terlihat
    navLinks[index].classList.add('active');
}

// Event listener ketika halaman discroll
window.addEventListener('scroll', changeActiveNav);

// Event listener untuk klik pada tautan navbar
navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        // Hapus class 'active' dari semua tautan
        navLinks.forEach((link) => link.classList.remove('active'));

        // Tambahkan class 'active' pada tautan yang diklik
        this.classList.add('active');
    });
});

// Atur tautan Portofolio aktif saat memuat halaman Portofolio
if (window.location.href.includes('portofolio.html')) {
    document.querySelector('.navbar a[href="portofolio.html"]').classList.add('active');
}