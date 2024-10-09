// Initialize EmailJS
(function() {
    emailjs.init("do402ofx5-KP8xYRK");
  })();
  
  // Event listener for the form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const captcha = document.getElementById('captcha').value;
  
    // Captcha validation
    if (captcha !== '4') {
      alert('Incorrect captcha answer! Please try again.');
      return;
    }
  
    // Send the email using EmailJS
    emailjs.sendForm('service_ap6itso', 'template_0wh70mr', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send the message. Please try again.');
      });
  });
  