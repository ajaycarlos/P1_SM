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
        const updateDeliveryOptions = () => {
            if (deliveryRadio.checked) {
                deliveryAddressForm.style.display = 'block';
            } else {
                deliveryAddressForm.style.display = 'none';
            }
        };
        updateDeliveryOptions();
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

    // --- Customer Login Page Logic (OTP Demo) ---
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpSection = document.getElementById('otp-section');
    const loginBtn = document.getElementById('login-btn');
    const loginMessage = document.getElementById('login-message');
    if (sendOtpBtn) {
        sendOtpBtn.addEventListener('click', function() {
            const phone = document.getElementById('phone-number').value;
            if (phone.length === 10 && /^\d+$/.test(phone)) {
                otpSection.style.display = 'block';
                loginMessage.textContent = `OTP sent to ${phone}. For demo, use 7777.`;
                loginMessage.style.color = 'green';
            } else {
                loginMessage.textContent = 'Please enter a valid 10-digit phone number.';
                loginMessage.style.color = 'red';
            }
        });
    }
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const otp = document.getElementById('otp-input').value;
            if (otp === '7777') {
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.style.color = 'green';
                setTimeout(() => { window.location.href = 'index.html'; }, 1500);
            } else {
                loginMessage.textContent = 'Invalid OTP. Please try again.';
                loginMessage.style.color = 'red';
            }
        });
    }

    // --- Admin Login Page Logic (FIXED) ---
    const adminLoginBtn = document.getElementById('admin-login-btn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            // Correct IDs are now used
            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
            const messageEl = document.getElementById('admin-login-message');
            if (username === 'admin' && password === 'admin123') {
                messageEl.textContent = 'Login successful! Redirecting to dashboard...';
                messageEl.style.color = 'green';
                setTimeout(() => { window.location.href = 'admin-dashboard.html'; }, 1000);
            } else {
                messageEl.textContent = 'Incorrect credentials. Please try again.';
                messageEl.style.color = 'red';
            }
        });
    }

    // --- Admin Products Page Modal Logic ---
    const modal = document.getElementById('edit-product-modal');
    const editButtons = document.querySelectorAll('.btn-edit-product');
    const closeButton = document.querySelector('.close-button');
    const saveChangesBtn = document.getElementById('save-product-changes');
    if (editButtons.length > 0 && modal) {
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.dataset.product;
                const productPrice = this.dataset.price;
                const productStock = this.dataset.stock;
                document.getElementById('modal-product-name').textContent = `Edit: ${productName}`;
                document.getElementById('modal-product-price').value = productPrice;
                document.getElementById('modal-product-stock').value = productStock;
                modal.style.display = 'block';
            });
        });
    }
    if(closeButton) { closeButton.onclick = function() { modal.style.display = "none"; } }
    if(saveChangesBtn) {
        saveChangesBtn.onclick = function() {
            alert('Demo: Product details would be saved here!');
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }

    // --- Scroll Fade-In Animation ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { observer.observe(section); });
});


