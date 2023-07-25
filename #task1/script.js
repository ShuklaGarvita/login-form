var emailArray=[];
var passwordArray=[];
function regTabFun() {
  event.preventDefault();
  regBox.style.visibility="visible";
  loginBox.style.visibility="hidden";
  
  loginTab.style.backgroundColor="rgb(12,132,189)";
  regTab.style.backgroundColor="rgba(11,177,224,0.82)";
}
function loginTabFun() {
  event.preventDefault();
  regBox.style.visibility="hidden";
  loginBox.style.visibility="visible";

  loginTab.style.backgroundColor="rgb(12,132,189)";
  regTab.style.backgroundColor="rgba(11,177,224,0.82)";
}

function register() {
  event.preventDefault();

  var email=document.getElementByclass('email').value;
  var password=document.getElementByclass('password').value;
  var passwordrt=document.getElementByclass('passwordrt').value;

  if (email== ""){
    alert("Email required!!! Please Enter the email:)");
    return;
  }
  else if (password== ""){
    alert("password required!!! Please Enter the password:)");
    return;
  }
  else if (passwordrt== ""){
    alert("password required!!! Please Enter the password:)");
    return;
  }
  else if (password != passwordrt){
    alert("password didn't matched check the password and enter again!!!:)");
    return;
  }
  else if (emailArray.indexOf(email)==-1){
    emailArray.push(email);
    passwordArray.push(password);
    alert(email+" Thanks for signing up!!!!\n Try to login now!!!!");
    document.getElementByclass('email').value="";
    document.getElementByclass('password').value="";
    document.getElementByclass('passwordrt').value="";
    return;
  }
  else{
    alert(email+" is already registered!!!");
    return;
  //}
}


function login() {
  event.preventDefault();

  var email=document.getElementByclass('email').value;
  var password=document.getElementByclass('password').value;

  var i=emailArray.indexOf(email);

  if (emailArray.indexOf(email)==-1){
    if (email=""){
      alert("Email Required!!!");
      return;
    }
    alert("Email does not exist!!!");
    return;
  }
  else if (passwordArray[i]!= password){
    if (email=""){
      alert("password Required!!!");
      return;
    }
    alert("password does not match!!!");
    return;
  }
  else{
    alert(email+" You are login now welcome to our Website!!!!");
    document.getElementByclass('email').value="";
    document.getElementByclass('password').value="";
  }
