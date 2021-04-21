let req = {}
let query = ''
let results = []
let pw = "" 
let netId = "dap58338"
let database = "357GroupA5"
let allUsers =[]

//check if user exists
let userNameInput = ""

SubmitButton.onclick=function(){
  userNameInput = inptLogin.value
  query = "Select * From user when ":
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
}   if (results.length == 0)
      lblMessage1.textContent = "Your name has been added to the database."
    else {

//check password
let passwordInput = ""

userPW = PasswordInput.value
query = "Select * From user When"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

if(req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
}   if (results.length == 0)
      lblMessage1.textContent = "Incorrect Password"
    else {
      changeform(userPage)

PasswordForgot.onclick=function(){
  var exitBtn = document.getElementById("exitBtn");
  exitBtn.addEventListener("click", password());

  function password() {
    var realPW = "<?php echo $pw ?>";
    var pword = prompt("Please enter your password:");
    if (realPW == pword) {
      self.location = "LoginBox.php"
    }
}

