const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const countrySelect = document.getElementById("country");
const zipSelect = document.getElementById("zip");

const wrongPassMsg = document.querySelector("#wrong-password");
const errorMsg = document.querySelector("#passwords-match");
const countryErrorMsg = document.querySelector("#country-error");
const zipErrorMsg = document.querySelector("#zipcode");

const registerBtn = document.getElementById("register");

registerBtn.classList.add("disabled");
wrongPassMsg.classList.add("hidden");
errorMsg.classList.add("hidden");
countryErrorMsg.classList.add("hidden");
zipErrorMsg.classList.add("hidden");

let passValid = false;
let passConfirmValid = false;
let countryValid = false;
let zipValid = false;

// FUNCTIONS
function setInputFilter(textbox, inputFilter, errMsg) {
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value.
          if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 0){
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
  
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        }
        else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one.
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
        else {
          // Rejected value: nothing to restore.
          this.value = "";
        }
      });
    });
 }
 
 function formValidation(pass, confirm, country, zip) {
    if(pass === true && confirm === true && country === true && zip === true){
        registerBtn.classList.remove("disabled");
    }else{
        registerBtn.classList.add("disabled");
    }
}

password.addEventListener('change', () => {
    if(regex.test(password.value)) {
        wrongPassMsg.classList.add("hidden");
        passValid = true;
    }else if(password.value === ""){
        wrongPassMsg.classList.add("hidden");
        passValid = false;
    }else{
        wrongPassMsg.classList.remove("hidden");
        passValid = false;
    }
})

passwordConfirm.addEventListener('change', () => {
    if(password.value !== passwordConfirm.value){
        errorMsg.classList.remove("hidden");
        passConfirmValid = false;
    }else if (password.value === passwordConfirm.value){
        errorMsg.classList.add("hidden");
        passConfirmValid = true;
    }
})

countrySelect.addEventListener('change', () => {
    if(countrySelect.value === ""){
        countryErrorMsg.classList.remove("hidden");
        countryValid = false;
    }else if(countrySelect.value !== ""){
        countryErrorMsg.classList.add("hidden");
        countryValid = true;
    }
})

setInputFilter(zipSelect, function(value) {
    return /^\d*\d*$/.test(value);
  }, "Only digits are allowed");

zipSelect.addEventListener('change', () => {
    let inputLength = zipSelect.value.length;

    if(zipSelect.value === "" || inputLength < 4){
        zipErrorMsg.classList.remove("hidden");
        zipValid = false;
    }else if(zipSelect.value !== ""){
        zipErrorMsg.classList.add("hidden");
        zipValid = true;
    }
})

window.addEventListener('change', () => {
    formValidation(passValid, passConfirmValid, countryValid, zipValid);
});





