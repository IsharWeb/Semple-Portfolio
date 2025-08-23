// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Highlight Active Section in Navbar =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });
});

// ===== Sticky Navbar =====
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm', 'bg-white');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-white');
    }
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('#nav-toggle');
const menu = document.querySelector('ul.md\\:flex');
if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// ===== Scroll-to-Top Button =====
const scrollBtn = document.querySelector('#scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollBtn.classList.remove('hidden');
            scrollBtn.classList.add('animate-bounce');
        } else {
            scrollBtn.classList.add('hidden');
            scrollBtn.classList.remove('animate-bounce');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollBtn.classList.add('scale-110');
        setTimeout(() => scrollBtn.classList.remove('scale-110'), 300);
    });
}



// ===== Contact Form Validation =====

 // When user clicks your Gmail link directly
function openGmail() {
    window.location.href = "mailto:isharwebdeveloper@gmail.com?subject=Hello%20Ishar&body=Hi%20Ishar,%0D%0A";
}

// When user submits the form
function sendEmail(event) {
    event.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subjectInput = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitBtn = event.target.querySelector('button[type="submit"]');

    // Change button text to "Sending..."
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Build the mailto link dynamically
    const subject = encodeURIComponent(subjectInput || `New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Trigger email client
    window.location.href = `mailto:isharwebdeveloper@gmail.com?subject=${subject}&body=${body}`;

    // Reset form + button after short delay (after mail client is triggered)
    setTimeout(() => {
        event.target.reset();           // clear inputs
        submitBtn.textContent = originalText; // restore button text
        submitBtn.disabled = false;
    }, 1000); // 1 second delay to show "Sending..."
}
