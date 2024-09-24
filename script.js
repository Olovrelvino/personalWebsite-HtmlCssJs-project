var typed = new Typed(".multiple-text", {
    strings: ["Student of UKSW", "Information Technology Major", "Code Anthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Mengambil semua link navigasi dan bagian
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Fungsi untuk menambahkan kelas 'active' ke link navigasi
window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Memeriksa jika posisi scroll berada di dalam section
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id'); // Mendapatkan id dari section yang aktif
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Menghapus class active dari semua link
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); // Menambahkan class active ke link yang sesuai
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));
  });