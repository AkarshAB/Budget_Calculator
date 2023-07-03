

function registerUser() {
  userDetails = {
    id: uname.value,
    password: pswrd.value
  }
if(uname.value == "" || pswrd.value == ""){
  alert ('Enter Details');
}
else {
  if (userDetails.id in localStorage) {
    alert('User already exists');
    window.location = './index.html'
  }
  else {
    localStorage.setItem(userDetails.id, JSON.stringify(userDetails));
    window.location = './index.html'
    alert ('Resgister success')
  }
}
  
}
