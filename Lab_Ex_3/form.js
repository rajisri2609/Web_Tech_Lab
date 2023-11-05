function validateForm(event){
event.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const password = document.getElementById('password').value;
const confirm_password =
document.getElementById('confirm_password').value;
const errorMessages = document.getElementById("errorMessages");
errorMessages.innerHTML = ""; 
const nameRegex = /^[a-zA-Z\s]+$/;
const phoneRegex = /^\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/; 
let errors = []; 
if (!name || !name.match(nameRegex)) {
errors.push("Please enter a valid name.");
} 
if (!phone || !phone.match(phoneRegex)) {
errors.push("Please enter a valid 10-digit phone number.");
} 
if (!email || !email.match(emailRegex)) {
errors.push("Please enter a valid email address.");
} 
if (password.length < 6) {
errors.push("Password must be at least 6 characters long.");
} 
if (password !== confirm_password) {
alert('Password and Confirm Password must match.');
return false;
}
if (errors.length > 0) {
errors.forEach(error => {
const errorMessage = document.createElement("p");
errorMessage.textContent = error;
errorMessages.appendChild(errorMessage);
});
} else {
alert("Form submitted successfully!");
document.getElementById("registrationForm").reset();
}
}
