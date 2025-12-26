function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.querySelector('input[name="role"]:checked');

  if (!name || !email || !password || !confirmPassword || !role) {
    document.getElementById("error").innerText = "All fields are required";
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById("error").innerText = "Passwords do not match";
    return;
  }

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}
