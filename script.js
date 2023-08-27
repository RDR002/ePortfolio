// Complete JavaScript for extra page transitions and validations
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  
  // Inline validation for contact form
  form.addEventListener("submit", function(event) {
    let isValid = true;
    const nameField = document.getElementById("name");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");
    
    // Name validation
    if (nameField.value.trim() === "") {
      isValid = false;
      alert("Name is required");
    }
    
    // Phone validation
    if (!/^\d{10}$/.test(phoneField.value)) {
      isValid = false;
      alert("Phone number must be 10 digits");
    }
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailField.value)) {
      isValid = false;
      alert("Invalid email address");
    }
    
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Adding transitions on page load
  setTimeout(function() {
    document.getElementById('content').style.opacity = '1';
  }, 500);
  
  // Adding transitions for images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('mouseover', function() {
      img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', function() {
      img.style.transform = 'scale(1)';
    });
  });
});
