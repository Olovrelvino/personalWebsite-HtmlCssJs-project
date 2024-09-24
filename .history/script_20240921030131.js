var typed = new Typed(".multiple-text", {
    strings: ["Student of UKSW", "Information Technology Major", "Code Anthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        // Remove 'active' class from all links
        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the section (only if the target exists)
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
