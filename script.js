let progress = 0;
const percentEl = document.getElementById('loader-percent');
const progressEl = document.querySelector('.loader-progress');

const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }
    percentEl.innerText = progress + '%';
    progressEl.style.width = progress + '%'; 
}, 150);

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hide');
        setTimeout(() => {
            document.querySelector('nav').classList.add('nav-active');
            document.getElementById('home').classList.add('hero-loaded');
        }, 500); 
    }, 1200); 
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('nada_theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('nada_theme', 'light'); 
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('nada_theme', 'dark'); 
    }
});

window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    document.getElementById('scroll-progress').style.width = scrolled;
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
                    link.scrollIntoView({ 
                        behavior: "smooth", 
                        inline: "center",
                        block: "nearest" 
                    });
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
    if (typeIndex < typeText.length) {
        typeElement.innerHTML += typeText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 40); 
    }
}
setTimeout(typeWriter, 2000);

const heroImgContainer = document.querySelector('.hero-image');
window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    heroImgContainer.style.transform = `translate(${x}px, ${y}px)`;
});

const cards = document.querySelectorAll('.project-card, .achievement-card, .custom-reel-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = "none"; 
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = "transform 0.5s ease"; 
    });
});

const cursor = document.querySelector('.magic-cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    if (e.clientX >= window.innerWidth - 20 || e.clientY >= window.innerHeight - 20) {
        cursor.classList.add('hidden-cursor');
    } else {
        cursor.classList.remove('hidden-cursor');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null) { cursor.classList.add('hidden-cursor'); }
});

const hoverEls = document.querySelectorAll('a, button');
hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

const imageEls = document.querySelectorAll('.hero-image .image-card, .gallery-item, .project-card .proj-img, .about-photo, iframe, .custom-reel-card'); 
imageEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered'); 
        cursor.classList.add('no-invert'); 
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
        cursor.classList.remove('no-invert'); 
    });
});

const iframeZones = document.querySelectorAll('.iframe-zone');
iframeZones.forEach(zone => {
    zone.addEventListener('mouseenter', () => cursor.classList.add('hidden-cursor'));
    zone.addEventListener('mouseleave', () => cursor.classList.remove('hidden-cursor'));
});

const magnetBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
magnetBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px) scale(1)`;
    });
});

const glowCards = document.querySelectorAll('.project-card, .achievement-card, .stat-card, .custom-reel-card, .contact-box');
glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
backToTop.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
backToTop.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "✨ Wait, come back!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

let greetingText = 'Hello,';
if (hour >= 5 && hour < 12) {
    greetingText = 'Good Morning,';
} else if (hour >= 12 && hour < 17) {
    greetingText = 'Good Afternoon,';
} else {
    greetingText = 'Good Evening,';
}
greetingElement.innerText = greetingText;

const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false, 
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll('nav ul li a, .btn-primary').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            lenis.scrollTo(targetId, {
                offset: -50, 
                duration: 1.5
            });
        }
    });
});

gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({ delay: 1.5 }); 
heroTl.from(".hero-intro p", { y: 30, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".hero h1", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.7")
      .from(".badge", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5")
      .from(".btn-container", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(".hero-image", { y: 40, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1.2");

gsap.utils.toArray('section:not(.hero)').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%", 
            toggleActions: "play none none reverse" 
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});