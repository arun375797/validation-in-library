const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const passcon = document.getElementById('passcon');

const err2 = document.getElementById('err2');
const err3 = document.getElementById('err3');
const err4 = document.getElementById('err4');
const err5 = document.getElementById('err5');

// Updated JS
function validate() {


  const validNameRegex = /^[a-zA-Z\s]+$/;
  const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validPhoneRegex=/^\d+$/
  const validformatRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const validpassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const cleanPhoneNumber = phone.value.replace(/[^\d]/g, ''); 

  let isValid = true;
  

  if (validEmailRegex.test(email.value)) {
    err2.innerText = "Email is valid";
    err2.style.color = 'green';
    err2.style.fontSize = '15px';
  } else {
    err2.innerText = "Email is not valid";
    err2.style.color = 'red';
    err2.style.fontSize = '15px';
    isValid = false;
  }
  if (validformatRegex.test(phone.value) && cleanPhoneNumber.length === 10) {
    err3.innerText = "Phone number is valid";
    err3.style.color = 'green';
    err3.style.fontSize = '15px';
  } else {
    err3.innerText = "Phone number is not valid";
    err3.style.color = 'red';
    err3.style.fontSize = '15px';
    isValid = false;
  }

  if (validpassRegex.test(pass.value)) {
    err4.innerText = "Password is valid";
    err4.style.color = 'green';
    err4.style.fontSize = '15px';
  } else {
    err4.innerText = "Password is not valid";
    err4.style.color = 'red';
    err4.style.fontSize = '15px';
    isValid = false;
  }

  if (pass.value === passcon.value ) {
    if (!passcon.value) {
      err5.innerText = "Password fields cannot be empty";
      err5.style.color = 'red';
    err5.style.fontSize = '15px'
    } else {
      err5.innerText = "Password match";
      err5.style.color = 'green';
      err5.style.fontSize = '15px';
    }
  } else {
    err5.innerText = "Password doesn't match";
    err5.style.color = 'red';
    err5.style.fontSize = '15px';
    isValid = false;
  }
  
  const passwordStrength = checkPasswordStrength(pass.value);
  if (passwordStrength === 'strong') {
    err4.innerText = "Password is strong";
    err4.style.color = 'green';
    pass.style.borderBottom="5px solid green"
   
  } else if (passwordStrength === 'medium') {
    err4.innerText = "Password is medium, use more case sensitive";
    err4.style.color = 'orange';
    pass.style.borderBottom="5px solid orange"
  } else {
    err4.innerText = "Password is weak";
    err4.style.color = 'red';
    pass.style.borderBottom="5px solid red"
    isValid = false;
  }
  return isValid;
}

function checkPasswordStrength(password) {
  if (password.length >= 12 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
    return 'strong';
  } else if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
    return 'medium';
  } else {
    return 'weak';
  }
}