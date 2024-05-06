function checkEmail(email) {
    return email.includes('@');
}
document.getElementById('loginButton').addEventListener('click', function () {
    var email = document.getElementById('emailInput').value;

    if (checkEmail(email)) {

        localStorage.setItem('userEmail', email);
        alert('Login successful!');
    } else {

        alert('Invalid email format!');
    }
});


window.onload = function () {
    var storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        document.getElementById('emailInput').value = storedEmail;
    }
};