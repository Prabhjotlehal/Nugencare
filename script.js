// Welcome Popup on Homepage
window.onload = function() {
    Swal.fire({
        title: 'Welcome to Nugencare!',
        text: 'Experience luxury skincare at its best.',
        icon: 'success',
        confirmButtonText: 'Explore Now'
    });
};

// Product Filtering
function filterProducts(category) {
    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.querySelector('input[type="text"]').value.trim();
            let email = document.querySelector('input[type="email"]').value.trim();
            let message = document.querySelector('textarea').value.trim();
            
            if (name === "" || email === "" || message === "") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please fill in all fields.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            } else {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'We will get back to you soon.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                contactForm.reset();
            }
        });
    }
});
