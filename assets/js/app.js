const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("success-message");


function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

submitBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";
    console.log("Email submitted:", email);
  }
});
