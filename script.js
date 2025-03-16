document.addEventListener('DOMContentLoaded', function() {
    // Animated purity meter
    const meterFill = document.querySelector('.meter-fill');
    setInterval(() => {
        const currentWidth = parseFloat(meterFill.style.width || '99.97');
        const newWidth = Math.max(99.91, Math.min(99.99, currentWidth + (Math.random() * 0.02 - 0.01)));
        meterFill.style.width = newWidth + '%';
        document.querySelector('.meter-reading').textContent = newWidth.toFixed(2) + '% Pure';
    }, 2000);

    // Form submission handler
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show purification animation
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Purifying...';
            submitBtn.disabled = true;
            
            // Simulate purification process
            setTimeout(() => {
                submitBtn.textContent = 'Purification Complete!';
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <h3>Your message has been purified!</h3>
                    <p>We have removed 99.97% of digital impurities from your submission.</p>
                    <p>A Clarity Consultant will respond with crystal clear communication shortly.</p>
                `;
                
                // Insert success message after form
                form.parentNode.insertBefore(successMessage, form.nextSibling);
                
                // Reset form
                form.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
    
    // Add scroll animation for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add "purification" effects on hover for certain elements
    const purifiableElements = document.querySelectorAll('.feature, .metric-card, .testimonial');
    purifiableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f9ff';
            this.style.transition = 'background-color 0.5s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    //Testimonials
    const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
const showCount = 3; // Show up to 3 testimonials at a time

// Function to show the next set of testimonials
function showNextTestimonials() {
    // Hide all testimonials
    testimonials.forEach(testimonial => testimonial.classList.remove('show'));

    // Show the next set
    for (let i = currentTestimonial; i < currentTestimonial + showCount; i++) {
        if (i < testimonials.length) {
            testimonials[i].classList.add('show');
        }
    }

    // Update current index
    currentTestimonial = (currentTestimonial + showCount) % testimonials.length;

    // Schedule the next update
    setTimeout(showNextTestimonials, 6000); // Change every 6 seconds
}

// Start the cycle
showNextTestimonials();

});
