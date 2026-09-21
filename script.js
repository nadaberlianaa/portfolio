function toggleEmailDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('email-dropdown-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

function copyEmailAddress(e) {
    if (e) e.stopPropagation();
    const email = 'nadaftrberliana@gmail.com';
    const actionText = document.getElementById('copy-action-text');
    const menu = document.getElementById('email-dropdown-menu');

    navigator.clipboard.writeText(email).then(() => {
        if (actionText) actionText.innerText = 'Copied! ✨';
        setTimeout(() => {
            if (actionText) actionText.innerText = 'Copy Address';
            if (menu) menu.classList.remove('show');
        }, 1500);
    });
}

document.addEventListener('click', (e) => {
    const btn = document.getElementById('email-dropdown-btn');
    const menu = document.getElementById('email-dropdown-menu');
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});

function openCv() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
        cvModal.classList.add('active');
        cvModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeCv() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
        cvModal.classList.remove('active');
        cvModal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

let progress = 0;
const percentEl = document.getElementById('loader-percent');
const progressEl = document.querySelector('.loader-progress');

const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }
    if (percentEl) percentEl.innerText = progress + '%';
    if (progressEl) progressEl.style.width = progress + '%'; 
}, 150);

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('hide');
        setTimeout(() => {
            const nav = document.querySelector('nav');
            const home = document.getElementById('home');
            if (nav) nav.classList.add('nav-active');
            if (home) home.classList.add('hero-loaded');
        }, 500); 
    }, 1200); 
});

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    if (localStorage.getItem('nada_theme') === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('nada_theme', 'light'); 
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('nada_theme', 'dark'); 
            }
        }
    });
}

window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) progressBar.style.width = scrolled;
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) { 
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        const isMatch = current && link.getAttribute("href").includes(current);
        if (isMatch) {
            if (!link.classList.contains("active")) {
                link.classList.add("active");
                if (window.innerWidth <= 768) {
                    link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
            }
        } else {
            link.classList.remove("active");
        }
    });
});

const typeText = "Electrical Engineering Student at UPNVJ Exploring IoT, Research, and Digital Design.";
const typeElement = document.getElementById('typewriter-text');
let typeIndex = 0;

function typeWriter() {
    if (typeElement && typeIndex < typeText.length) {
        typeElement.innerHTML += typeText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 40); 
    }
}
setTimeout(typeWriter, 2000);

const cursor = document.querySelector('.magic-cursor');
if (cursor) {
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        if (e.clientX >= window.innerWidth - 20 || e.clientY >= window.innerHeight - 20) {
            cursor.classList.add('hidden-cursor');
        } else {
            cursor.classList.remove('hidden-cursor');
        }
    });

    const hoverEls = document.querySelectorAll('a, button');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    const mediaEls = document.querySelectorAll('img, video, .custom-reel-card, .cinematic-wrapper');
    mediaEls.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('no-invert'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('no-invert'));
    });
}

const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    const hour = new Date().getHours();
    let greetingText = 'Hello,';
    if (hour >= 5 && hour < 12) greetingText = 'Good Morning,';
    else if (hour >= 12 && hour < 17) greetingText = 'Good Afternoon,';
    else greetingText = 'Good Evening,';
    greetingElement.innerText = greetingText;
}

const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) closeCv();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCv();
    });
});

if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('nav ul li a, .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                lenis.scrollTo(targetId, { offset: -50, duration: 1.5 });
            }
        });
    });
}

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section:not(.hero)').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    gsap.fromTo('.text-idea', 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 75%',
                toggleActions: 'restart none none reverse'
            }
        }
    );

    gsap.fromTo('.floating-pill', 
        { scale: 0.5, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(2)",
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 75%',
                toggleActions: 'restart none none reverse'
            }
        }
    );
}

document.addEventListener('mousemove', (e) => {
    const pills = document.querySelectorAll('.floating-pill');
    if (pills.length === 0) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    pills.forEach(pill => {
        const speed = parseFloat(pill.getAttribute('data-speed')) || 1;
        const x = (mouseX - windowWidth / 2) * (speed / 90);
        const y = (mouseY - windowHeight / 2) * (speed / 90);

        if (typeof gsap !== 'undefined') {
            gsap.to(pill, {
                x: x,
                y: y,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    });
});
