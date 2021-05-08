let un = document.getElementById("InputEmail");
let pwd = document.getElementById("InputPassword");
let pwderr = document.getElementById("pwderror");
var sessionTimeout = 1; //hours
var loginDuration = new Date();
var sessionTimeout = 1; //hours
var loginDuration = new Date();

function validate(redirct){
    if(un.value==="admin" && pwd.value==="12345"){
        redirect();
    }
    else{
        alert("Invalid credentials");
    //    pwderr.innerHTML = "Invalid credentials";
	// 	pwderr.style.color = "red";
        return false;
		
    }

}function redirect(){
    
    loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
    
    loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
    document.cookie = "CrewCentreSession=Valid; "+loginDuration.toGMTString()+"; path=/";
    
    if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
        location.href = "/Login.html";
      }
   
    return true;
}