function login() {
    const modmeid = document.getElementById('modmeid').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (modmeid === '123456' && password === '78900') {
        errorMessage.textContent = 'You have successfully logged into Mars Space!';
        errorMessage.style.color = 'green';

    } else {
        errorMessage.textContent = 'Incorrect modmeid or password.';
        errorMessage.style.color = 'red';
    }
}
