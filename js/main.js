// MobtownAI Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would send the form data to a server
            // For now, we'll just show a success message
            const formData = new FormData(contactForm);
            const formEntries = Object.fromEntries(formData.entries());
            
            console.log('Form submitted:', formEntries);
            
            // Show success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for reaching out!</h3>
                    <p>We've received your message and will get back to you soon.</p>
                </div>
            `;
        });
    }

    // Simple scroll animations
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    // Add CSS for the animations
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            text-align: center;
            padding: 40px 20px;
        }
        
        .success-message h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);

    // Initial call and add event listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
