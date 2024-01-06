let nameError=document.getElementById('name-error');
let phoneError=document.getElementById('phone-error');
let emailError=document.getElementById('email-error');
let messageError=document.getElementById('message-error');
let submitError=document.getElementById('submit-error');

function validateName(){
    let name=document.getElementById('contact-name').value;
    if(name.length<=8){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='name is required';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = 'Valid';
    return true;
}

function validateEmail(){
    let email=document.getElementById('conatct-email').value;
    if(email.length==0){
        emailError.innerHTML='email is required';
        return false;
    }
    if(email.match(/^[A-Za-z]\._\-[0-9]*@[A-Za-z]*[\.][a-z]{2,4]$/)){
        emailError.innerHTML='invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;
}
function validateMessage(){
    let message=document.getElementById('contact-message').value;
    let required=30;
    let left =required-message.length;
    if(left>0){
        messageError.innerHTML=left+ 'more characters required';
        return false;
    }
    messageError.innerHTML='valid';
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){
            submitError.style.display='none';
        },3000);
        return false;
    }
}