// password in array that are organzied in the same order
// test arrays
let userID = ['rjm13600', 'rjm12500', 'rjm13400']
let password = ['hi', 'hello', 'hey']
let loginPass = false
//test propmts
let user = iptUsername.value
let pw = iptPassword.value
//user = user.trim()
//pw = pw.trim()

btnLogin.onclick=function(){
  // login button on submit
for (i = 0; i < userID.length; i++) {
  if (user == userID[i] && pw == password[i]) {
  loginPass = true;
  break;
} 
  }
  
// Test to see if login is succesful
if (loginPass == true) {
  alert('Login Succesful')
} else { 
  alert('Login not Succesful')
}

}