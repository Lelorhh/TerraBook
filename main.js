// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Change the eye icon
  const eyeIcon = this.querySelector('svg');
  if (type === 'text') {
    eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="1" y1="1" x2="23" y2="23"></line>';
  } else {
    eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  }
});

// Form validation
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simple validation
  let isValid = true;
  
  if (!emailInput.value || !emailInput.value.includes('@')) {
    isValid = false;
    emailInput.style.borderColor = 'var(--error)';
  } else {
    emailInput.style.borderColor = 'var(--success)';
  }
  
  if (!passwordInput.value || passwordInput.value.length < 6) {
    isValid = false;
    passwordInput.style.borderColor = 'var(--error)';
  } else {
    passwordInput.style.borderColor = 'var(--success)';
  }
  
  if (isValid) {
    // Simulate login success
    const loginButton = document.querySelector('.login-button');
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      window.location.href = '/dashboard.html';
    }, 1500);
  }
});

// Add input event listeners to clear validation styling
emailInput.addEventListener('input', function() {
  this.style.borderColor = '';
});

passwordInput.addEventListener('input', function() {
  this.style.borderColor = '';
});

// Add animation effects
document.addEventListener('DOMContentLoaded', function() {
  const formElements = document.querySelectorAll('.login-form > *');
  
  formElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
});
