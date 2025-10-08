document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Customer OTP Login Simulation ---
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpSection = document.getElementById('otp-section');
    const loginBtn = document.getElementById('login-btn');
    const otpInput = document.getElementById('otp-input');
    const loginMessage = document.getElementById('login-message');

    if (sendOtpBtn) {
        sendOtpBtn.addEventListener('click', function() {
            otpSection.style.display = 'block';
            loginMessage.textContent = 'An OTP has been sent to your number.';
            loginMessage.style.color = 'var(--primary-color)';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            if (otpInput.value === '7777') {
                loginMessage.textContent = 'Success! You are now logged in.';
                loginMessage.style.color = 'var(--success-color)';
                // In a real app, you would redirect here:
                // window.location.href = 'index.html';
            } else {
                loginMessage.textContent = 'Invalid OTP. Please try again.';
                loginMessage.style.color = '#dc3545';
            }
        });
    }

    // --- Admin Login Simulation (THIS IS THE NEW CODE) ---
    const adminLoginBtn = document.getElementById('admin-login-btn');
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            const user = document.getElementById('admin-user').value;
            const pass = document.getElementById('admin-pass').value;
            const messageEl = document.getElementById('admin-login-message');

            if (user === 'admin' && pass === 'password123') {
                messageEl.textContent = 'Login successful! Redirecting...';
                messageEl.style.color = 'var(--success-color)';
                
                // Redirect to the dashboard after a short delay
                setTimeout(() => {
                    window.location.href = 'admin-dashboard.html';
                }, 1000); // 1 second delay

            } else {
                messageEl.textContent = 'Invalid username or password.';
                messageEl.style.color = '#dc3545';
            }
        });
    }

    // --- Admin Products Page - Modal Logic ---
    const editButtons = document.querySelectorAll('.btn-edit-product');
    const modal = document.getElementById('edit-product-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const saveChangesBtn = document.getElementById('save-changes-btn');

    if (modal) {
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        saveChangesBtn.addEventListener('click', () => {
            alert('Demo: Product details would be saved now!');
            modal.style.display = 'none';
        });

        // Close modal if user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

});


// --- Smooth Scroll Fade-In Animation ---
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

const sectionsToFade = document.querySelectorAll('.fade-in-section');
sectionsToFade.forEach((section) => {
    fadeInObserver.observe(section);
});
