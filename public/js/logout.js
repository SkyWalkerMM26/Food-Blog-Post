//function not working: needs to end the session and redirect page
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
<<<<<<< HEAD
    document.location.replace('/');
=======
    document.location.replace("/login");
>>>>>>> d140752638257ed76b314b9a4b76eba5dfa637be
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
