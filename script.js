document.querySelector('#form-fields').addEventListener('submit', (event) =>  {

    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirmPassword');
    const errorMessage = document.querySelector('#error-message');

    if (password.value !== confirmPassword.value){
        errorMessage.style.display = 'block';
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
        event.preventDefault();
    }
    else{
        alert(password, confirmPassword)
        errorMessage.style.display = 'none';
    }
})


