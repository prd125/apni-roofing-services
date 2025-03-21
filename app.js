document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        service: document.getElementById('service').value
    };

    emailjs.send("service_g5tk2jn", "template_g3xlaqh", templateParams)
        .then(function(response) {
            alert('Quote Request Sent Successfully!');
            document.getElementById('quoteForm').reset(); // Clear the form
        }, function(error) {
            alert('Error Sending Quote. Please try again.');
            console.error('EmailJS Error:', error);
        });
});
