let password = document.getElementById("user_password")
  , confirm_password = document.getElementById("user_confirm_password");

function valiPassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = valiPassword;
confirm_password.onkeyup = valiPassword;