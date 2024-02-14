// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });







export function login() {
    var email = document.getElementById('em').value
    var password = document.getElementById('pa').value

    var emailf = document.getElementById('em')
    var passwordf = document.getElementById('pa')


    if (localStorage.getItem('email') == email && localStorage.getItem('password') == password) {
        window.location.href = 'ha.html'
        // window.location.assign
        alert("Login Successful");
    } else {
        var E = document.getElementById("error");
        E.innerHTML = "wrong email or password";
    }

   
}

