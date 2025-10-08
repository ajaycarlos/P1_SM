document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Checkout Page Logic ---
    const deliveryRadio = document.getElementById('delivery');
    const pickupRadio = document.getElementById('pickup');
    const deliveryAddressForm = document.getElementById('delivery-address-form');

    if (deliveryRadio && pickupRadio && deliveryAddressForm) {
        // Function to update form display
        const updateDeliveryOptions = () => {
            if (deliveryRadio.checked) {
                deliveryAddressForm.style.display = 'block';
            } else {
                deliveryAddressForm.style.display = 'none';
            }
        };

        // Initial check
        updateDeliveryOptions();

        // Add event listeners
        deliveryRadio.addEventListener('change', updateDeliveryOptions);
        pickupRadio.addEventListener('change', updateDeliveryOptions);
    }

    // --- Add to Cart Alert ---
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('This is a demo! In the real site, this would add the item to your cart.');
        });
    });

});
