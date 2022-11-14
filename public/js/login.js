const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
<<<<<<< HEAD
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
=======
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();
  console.log(email);
  console.log(password);
>>>>>>> 75691fcec46131530d691d8ef3d931039cb4b20f

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the home page
      console.log('reach');
      //document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#new-name-input').value.trim();
  const email = document.querySelector('#new-email-input').value.trim();
  const password = document.querySelector('#new-password-input').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
<<<<<<< HEAD
      console.log('signreach');
      //document.location.replace("/");
=======
      document.location.replace("/login");
>>>>>>> 75691fcec46131530d691d8ef3d931039cb4b20f
    } else {
      alert(response.statusText);
    }
  }
};

document
<<<<<<< HEAD
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('click', signupFormHandler);
=======
  .querySelector("#login-form")
  .addEventListener("click", loginFormHandler);

document
  .querySelector("#signup-form")
  .addEventListener("click", signupFormHandler);
>>>>>>> 75691fcec46131530d691d8ef3d931039cb4b20f
