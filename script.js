// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const successMessage = document.querySelector('.success-message');
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    });
});

// Function to cycle through testimonials
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
