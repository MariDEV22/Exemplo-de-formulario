
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
}); 

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    
    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email,"o email é obrigatorio.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email,"por favor ensira um email valido");
    } else {
        setSuccessFor(email);
    }

    if ( passwordValue === "") {
        setErrorFor(password, "A senha é obrigatoria.");
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "A senha tem que ter no minimo 8 digitos");
    } else {
        setSuccessFor(password);
    }

    if ( passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatoria.");
    } else if (passwordConfirmationValue !== passwordValue ) {
        setErrorFor(passwordConfirmation, "As senhas são diferents");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-Control");

    const formIsvalid = [...formControls].every(formControl => {
        return formControl.className === "form-control success";
    }) 
    
    if ( formIsvalid) {
        console.log("O formulario esta 100% valido!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    const small = formControl.querySelector("small");

    // adicionar mensagem de erro
    small.innerText = message;

    // adicionar classe de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}

