function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").innerText = "Please enter all fields";
    return;
  }

  // Temporary role simulation
  if (email.includes("admin")) {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "employee-dashboard.html";
  }
}
