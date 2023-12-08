// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let headerHeight = document.querySelector('header').offsetHeight;

        let section = document.querySelector(this.getAttribute('href'));
        let positionToScroll = section.offsetTop - headerHeight;

        window.scrollTo({
            top: positionToScroll,
            behavior: 'smooth'
        });
    });
});

// --- Dark mode toggle ---
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    document.querySelectorAll('.view-repo-button, .testimonial-button, input[type="submit"]').forEach(button => {
        button.classList.toggle('dark-mode-text');
    });
});

// --- Loader ---
window.addEventListener("load", function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Half second after fading, hide the loader
    }, 500); // Show the loader for at least half a second
});

// --- Back to Top Button ---
const backToTopButton = document.getElementById('backToTop');

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// --- Hamburger Menu ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
