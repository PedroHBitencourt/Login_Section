'USE STRICT'

//Elements

//Containers
const signInContainer = document.querySelector('.sign-in-container');
const signUpContainer = document.querySelector('.sign-up-container');
const resetPassword = document.querySelector('.reset-password');
const sentEmail = document.querySelector('.sent-email');



//BTNS AND LINKS
const resetPassBtn = document.getElementById('reset-pass-btn');
const erroPrint = "Some of the inputs fields are empty."

/********************************/
//CALLING FORGET PASSWORD CONTAINER
/********************************/
const forget = document.querySelector('.forget-pass').addEventListener('click', function(){
    signInContainer.classList.add('hidden');
    resetPassword.classList.remove('hidden');
});

/********************************/
//SENT EMAIL FOR VALIDATION
/********************************/
resetPassBtn.addEventListener('click', function(){
    if(document.getElementById('reset-email').value.length === 0){
        return alert(erroPrint);
    }else if(document.getElementById('reset-email').value.length >= 1){
        resetPassword.classList.add('hidden');
        sentEmail.classList.remove('hidden');
    }
});

/********************************/
//CALLING SIGN IN CONTAINER BACK ON FORGOT PASSWORD CONTAINER
/********************************/
const signInEl = document.querySelector('.sign-in-txt').addEventListener('click', function(){
    signInContainer.classList.remove('hidden');
    resetPassword.classList.add('hidden');
});

/********************************/
//CALLING SIGN IN CONTAINER BACK ON SIGN UP CONTAINER
/********************************/
const signInRegister = document.querySelector('.sign-in-txt-register').addEventListener('click', function(){
    signInContainer.classList.remove('hidden');
    signUpContainer.classList.add('hidden');
});

const signUpBtn = document.querySelector('.sign-up-btn').addEventListener('click', function(){
    const usernameSignUp = document.getElementById('sign-up-username').value;
    const emailSignUp = document.getElementById('sign-up-email').value;
    const passwordSignUp = document.getElementById('sign-up-password').value;
    const rePasswordSignUp = document.getElementById('sign-up-re-password').value;

    if(usernameSignUp.length === 0 || emailSignUp.length === 0 || passwordSignUp.length === 0 || rePasswordSignUp.length === 0 ){
        alert(erroPrint);
    }else if(passwordSignUp !== rePasswordSignUp){
        alert('The password needs to be equal each other');
    }else{
        alert('SUCCESS');
        console.log(passwordSignUp);
        console.log(rePasswordSignUp);
        signInContainer.classList.remove('hidden');
        signUpContainer.classList.add('hidden');
    }
});

/********************************/
//CALLING SIGN UP CONTAINER
/********************************/
const signUpEl = document.querySelector('.sign-up-txt').addEventListener('click', function(){
    signUpContainer.classList.remove('hidden');
    signInContainer.classList.add('hidden');
});

/********************************/
//CALLING SIGN IN CONTAINER AFTER THE RESET PASSWORD 
/********************************/
const doneBtn = document.querySelector('.done-btn').addEventListener('click', function(){
    signInContainer.classList.remove('hidden');
    sentEmail.classList.add('hidden');
});

