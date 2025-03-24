document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default action (jumping to section)

          const targetElement = document.querySelector(this.getAttribute('href'));
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // FAQ toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
      const question = item.querySelector('h3');
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling; // Get the <p> element that contains the answer
          if (answer.style.display === 'none' || !answer.style.display) {
              answer.style.display = 'block'; // Show the answer
          } else {
              answer.style.display = 'none'; // Hide the answer
          }
      });
  });

  // Form validation for the contact form
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent form from submitting

          let isValid = true;

          // Example validation checks
          const nameInput = form.querySelector('input[name="name"]');
          const emailInput = form.querySelector('input[name="email"]');
          const messageInput = form.querySelector('textarea[name="message"]');

          // Validate name input
          if (!nameInput.value.trim()) {
              isValid = false;
              alert('Please enter your name.');
          }

          // Validate email input
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(emailInput.value)) {
              isValid = false;
              alert('Please enter a valid email address.');
          }

          // Validate message input
          if (!messageInput.value.trim()) {
              isValid = false;
              alert('Please enter a message.');
          }

          // If the form is valid, you can proceed with submitting or sending data
          if (isValid) {
              form.submit(); // Submit the form (if you want to send it via AJAX, handle it here)
              alert('Form submitted successfully!');
          }
      });
  }
});
