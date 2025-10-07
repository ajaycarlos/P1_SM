document.addEventListener('DOMContentLoaded', function() {
    
    // --- Checkout Page Logic ---
    const deliveryRadio = document.getElementById('delivery');
    const pickupRadio = document.getElementById('pickup');
    const deliveryAddressForm = document.getElementById('delivery-address-form');

    if (deliveryRadio && pickupRadio && deliveryAddressForm) {
        deliveryRadio.addEventListener('change', function() {
            if (this.checked) {
                deliveryAddressForm.style.display = 'block';
            }
        });

        pickupRadio.addEventListener('change', function() {
            if (this.checked) {
                deliveryAddressForm.style.display = 'none';
            }
        });
    }

    // --- Add to Cart Alert ---
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('This is a demo! Product would be added to your cart.');
        });
    });

});
