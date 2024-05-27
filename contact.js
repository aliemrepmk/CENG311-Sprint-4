const form = document.getElementById('myForm');
const submitButton = form.querySelector('.submit-button');

submitButton.addEventListener('click', function(event) {
  //event.preventDefault(); // Prevent default form submission
  event.stopImmediatePropagation

  let hasInvalidInput = false;

  // Check all required inputs for validity
  const inputs = form.querySelectorAll('input[required]');
  for (const input of inputs) {
    if (!input.checkValidity()) { // Use HTML5 validation for cleaner checks
      input.style.backgroundColor = '#F4D8CD';
      input.style.border = '1px solid #F4501E'; // Set background color for invalid input
      hasInvalidInput = true;
    } else {
      input.style.backgroundColor = '';
      input.style.border = ''; // Reset background color if valid again
    }
  }

  // Additional validation for email and phone (optional)
  const emailInput = document.getElementById('email');
  if (emailInput.value !== '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})?$/.test(emailInput.value)) {
    emailInput.style.backgroundColor = '#F4D8CD';
    hasInvalidInput = true;
  }

  const phoneInput = document.getElementById('phone');
  // Implement your desired phone number validation here (e.g., length, format)
  // if (phoneInput.value !== '' && !validPhoneNumber(phoneInput.value)) {
  //   phoneInput.style.backgroundColor = '#FFC0CB';
  //   hasInvalidInput = true;
  // }

  if (hasInvalidInput) {
    // Optionally display an error message or animation to indicate invalid input
    alert('Please enter valid information in the highlighted fields.');
  } else {
    // Form submission logic (e.g., send data using AJAX or submit form)
    console.log('Form submitted successfully!'); // Simulate form submission
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const clubTitle = document.querySelector(".club-title");
  clubTitle.addEventListener("click", function() {
      window.location.href = "index.html";
  });
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
});