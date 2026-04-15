document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
// Basic login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example: hardcoded credentials
  const validUsername = "admin";
  const validPassword = "12345";

  if (username === validUsername && password === validPassword) {
    document.getElementById("message").textContent = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Invalid username or password.";
    document.getElementById("message").style.color = "red";
  }
});
