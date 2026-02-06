document.addEventListener('DOMContentLoaded', () => {
    // Hero Speech Bubble Animation
    const bubbles = document.querySelectorAll('.speech-bubble');
    let currentBubble = 0;

    function animateBubbles() {
        // Reset all bubbles
        bubbles.forEach(b => {
            b.style.opacity = '0';
            b.style.transform = 'translateY(10px) scale(0.9)';
        });

        // Show current bubble
        const bubble = bubbles[currentBubble];
        if (bubble) {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0) scale(1)';
        }

        // Move to next bubble
        currentBubble = (currentBubble + 1) % bubbles.length;
    }

    // Initial call
    // animateBubbles(); 
    // Wait a bit before starting loop to let page load
    setInterval(animateBubbles, 2500);
    animateBubbles(); // Start immediately

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.value-card, .program-card, .contact-container');
    animatedElements.forEach(el => observer.observe(el));

    // Form Handler
    const form = document.getElementById('inquiryForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple visual feedback
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Sent!';
        btn.style.backgroundColor = '#4CAF50';

        // Construct mailto link
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const msg = form.querySelector('textarea').value;

        const mailtoLink = `mailto:infodesk.frenchforbeginners@gmail.com?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${msg}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Animate hamburger to X
            const spans = mobileBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.querySelectorAll('span').forEach(span => span.style.transform = 'none');
            });
        });
    }
});
