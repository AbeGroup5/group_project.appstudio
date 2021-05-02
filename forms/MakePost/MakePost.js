
Hamburger2.onclick=function(){
  if (typeof(s) == "object") 
    return
switch(s){
case "Login":
    ChangeForm(Login)
    break
case "Home Search":
    ChangeForm(HomeSearch)
    break
}
}

let prof = drpProf.value
let rtg = drpRating.value
let comment = iptMakePost.value

btnPost.onclick=function(){
  ChangeForm(PostMade)
}

// add to database call a fuction that connects to both, can connect to the google login form and use as proxy 
// addToDatabase() onclick for function button 

let req = {}
let query = ''
let results = []
let pw = "123ABC"
let netId = "dap58338"
let database = "375groupa5"
let allUsers =[]

//check if user exists
let userNameInput = ""

SubmitButton.onclick=function(){
  userNameInput = inptLogin.value
  query = "Select * From user when ":
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dap58338&pass=" + pw + "&database=" + database + "&query=" + query)