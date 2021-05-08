

function validate1(redirct1){
    if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
        location.href = "Login.html";
      }
    

}function redirect(){
    // location.replace("main.html");
    return true;
}