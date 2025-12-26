// Auto set today's date
document.getElementById("date").valueAsDate = new Date();

// Auto calculate total hours
document.getElementById("outTime").addEventListener("change", calculateHours);
document.getElementById("inTime").addEventListener("change", calculateHours);

function calculateHours() {
  const inTime = document.getElementById("inTime").value;
  const outTime = document.getElementById("outTime").value;

  if (inTime && outTime) {
    const inDate = new Date(`1970-01-01T${inTime}`);
    const outDate = new Date(`1970-01-01T${outTime}`);

    if (outDate > inDate) {
      const diff = (outDate - inDate) / (1000 * 60 * 60);
      document.getElementById("totalHours").value = diff.toFixed(2) + " hrs";
    } else {
      document.getElementById("totalHours").value = "";
      alert("Out Time must be after In Time");
    }
  }
}

function submitTimesheet() {
  const project = document.getElementById("project").value;
  const task = document.getElementById("task").value;
  const inTime = document.getElementById("inTime").value;
  const outTime = document.getElementById("outTime").value;

  if (!project || !task || !inTime || !outTime) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Please fill all fields";
    return;
  }

  document.getElementById("message").style.color = "green";
  document.getElementById("message").innerText =
    "Timesheet submitted successfully!";
}
