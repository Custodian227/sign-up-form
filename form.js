const passwordInput = document.querySelector('#input-password');
const passwordConformationInput = document.querySelector('#input-password-conformation');
const submitButton = document.querySelector('#btn-submit');

function confirmPassword(firstPassword, secondPassword){
    if(firstPassword !== secondPassword){
       passwordConformationInput.setCustomValidity('Passwords do not match');
    }
    if(firstPassword === '' && secondPassword === ''){
        passwordConformationInput.setCustomValidity('');
        passwordConformationInput.reportValidity();
    }
    if(firstPassword === secondPassword && firstPassword !== '' && secondPassword !== ''){
        passwordConformationInput.setCustomValidity('');
        passwordConformationInput.reportValidity();
    } 
}

passwordConformationInput.addEventListener('keyup', () => {
    let originalPassword = passwordInput.value;
    let confirmedPassword = passwordConformationInput.value;
    confirmPassword(originalPassword, confirmedPassword);
})



