
  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var college = document.getElementById("college").value;
    var year = document.getElementById("year").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var captain = document.getElementById("whycaptain").value;

    // Check if required fields are empty
    if (name === "" || email === "" || college === "" || year === "" || country === "" || phone === "" || captain === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number format
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (captain.length === 0) {
        alert("Please enter a valid reason for why you want to be a captain.");
        return;
    }
    // If all validations pass, submit the form
    event.target.submit();
  }

  // Attach form submit event listener
  document.getElementById("contact-form").addEventListener("submit", validateForm);
