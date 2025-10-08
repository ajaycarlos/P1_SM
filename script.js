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
// --- Customer Login Page Logic ---
const sendOtpBtn = document.getElementById('send-otp-btn');
const otpSection = document.getElementById('otp-section');
const loginBtn = document.getElementById('login-btn');
const otpInput = document.getElementById('otp-input');
const loginMessage = document.getElementById('login-message');

if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', () => {
        const phoneNumber = document.getElementById('phone-number').value;
        if (phoneNumber.length >= 10) {
            otpSection.style.display = 'block';
            loginMessage.textContent = 'OTP has been sent!';
            loginMessage.style.color = 'var(--success-color)';
        } else {
            loginMessage.textContent = 'Please enter a valid phone number.';
            loginMessage.style.color = '#dc3545';
        }
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        if (otpInput.value === '7777') {
            loginMessage.textContent = 'Login Successful!';
            loginMessage.style.color = 'var(--success-color)';
            // In a real site, you would redirect here:
            // window.location.href = 'index.html';
        } else {
            loginMessage.textContent = 'Invalid OTP. Please try again.';
            loginMessage.style.color = '#dc3545';
        }
    });
}


// --- Admin Product Edit Modal Logic ---
const editProductModal = document.getElementById('edit-product-modal');
const editProductBtns = document.querySelectorAll('.btn-edit-product');
const closeModalBtn = document.getElementById('close-modal-btn');
const saveChangesBtn = document.getElementById('save-changes-btn');

editProductBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editProductModal.style.display = 'block';
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        editProductModal.style.display = 'none';
    });
}

if (saveChangesBtn) {
    saveChangesBtn.addEventListener('click', () => {
        alert('Product details updated successfully! (This is a demo)');
        editProductModal.style.display = 'none';
    });
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == editProductModal) {
        editProductModal.style.display = "none";
    }
}
