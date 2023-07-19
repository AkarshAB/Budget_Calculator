function signup() {
  window.location = './register.html'
}

function loginAcc() {
  username = uname.value;
  password = pswrd.value;

  if (username in localStorage) {
    passwordKey = JSON.parse(localStorage.getItem(username));
    if (password === passwordKey.password) {
      alert('Login Successful');
      window.location = './projectpage.html'
    }
    else {
      alert('Password incorrect');
    }
  }
  else {
    alert ('Username not registered yet')
    window.location = './register.html'
  }
}