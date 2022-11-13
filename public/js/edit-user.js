async function editFormHandler(event) {
    event.preventDefault();

    let username = document.querySelector('input[name="user-name"]').value.trim();
    if(username.length) username = ' "username": "' + username + '"';
    let email = document.querySelector('input[name="email"]').value.trim();
    if(email.length) email = ' "email": " ' + email + '"';
    let password = document.querySelector('input[name="password"]').value.trim();
    if(password.length) {
        alert('Please enter current password to make changes or enter a new password.');
        return
    } else {
        password = '"password": "' + password + '"';
    }
}