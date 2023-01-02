const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

const registerBtn = document.getElementById("register");

form.addEventListener('submit', (e) => {
    e.preventDefault();

        let pass = password.value;
        let passConfirm = passwordConfirm.value;
    

    if(pass !== passConfirm) {
        console.log("pass no");

    }else if (pass.value === passConfirm.value){
        console.log("pass yes");
    }
})


