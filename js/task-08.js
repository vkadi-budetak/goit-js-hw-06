const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.elements.email.value || !loginForm.elements.password.value) {
    window.alert("всі поля повинні бути заповнені");

    return;
  }

  const dataForm = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value
  }
  console.log(dataForm);

  loginForm.reset();
});

