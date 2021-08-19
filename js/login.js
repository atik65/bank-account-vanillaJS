// document.getElementById("login-submit").addEventListener("click", function () {
//   // get user email
//   const emailField = document.getElementById("user-email");
//   const userEmail = emailField.value;
//   // get user password
//   const passwordField = document.getElementById("user-password");
//   const userPassword = passwordField.value;
//   // check email and password
//   if (userEmail == "admin" && userPassword == "password") {
//     window.location.href = "banking.html";
//   }
// });

// code from atik starts from here

document.getElementById("login-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;

  const password = document.getElementById("user-password").value;

  if (email === "user@gmail.com" && password === "password") {
    window.location.href = "banking.html";
  }

  document.getElementById("user-email").value = "";
  document.getElementById("user-password").value = "";
});
