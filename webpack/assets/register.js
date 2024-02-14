export function register() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value

    var nameF = document.getElementById('name')
    var emailF = document.getElementById('email')
    var passwordF = document.getElementById('pass')

    if (name.length >= 8 && email.indexOf("@") !== -1 && password.length >= 8) {
       
        nameF.style.border = ""; 
        emailF.style.border = ""; 
        passwordF.style.border = ""; 
    
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        // localStorage.setItem('password', password);
        function savePassword(password) {
            var encryptedPassword = btoa(password);
            localStorage.setItem('Password', encryptedPassword);
        }

        savePassword(password)


    } else {
        
        if (name.length < 8) {
            nameF.style.border = "1px solid red"; 
        } else {
            nameF.style.border = ""; 
        }
    
        if (email.indexOf("@") === -1) {
            emailF.style.border = "1px solid red"; 
        } else {
            emailF.style.border = ""; 
        }
    
        if (password.length < 8) {
            passwordF.style.border = "1px solid red"; 
        } else {
            passwordF.style.border = ""; 
        }
    }
    


}
