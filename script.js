// Display a welcome message when the page loads
window.onload = function() {
    alert("Welcome to my personal portfolio!");
};

// Change background color using color picker
document.getElementById("page-color-picker").addEventListener("input", function () {
    document.body.style.backgroundColor = this.value;
});

// Change text color using color picker
document.getElementById("text-color-picker").addEventListener("input", function () {
    document.body.style.color = this.value;
});

// Form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
