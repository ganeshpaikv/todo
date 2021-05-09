let un = document.getElementById("InputEmail");
let pwd = document.getElementById("InputPassword");
let pwderr = document.getElementById("pwderror");


 var  activesession = false;
 console.log(activesession);

 function redirectmain(){
    
    if(activesession!=true){
        location.href = "index.html";
    }   
}
function validate(redirect){
    if(un.value==="admin" && pwd.value==="12345"){
        window.location = "main.html";
        // activesession = true;
        // console.log(activesession);
    
        redirect();
    }
    else{
        alert("Invalid credentials");
    //    pwderr.innerHTML = "Invalid credentials";
	// 	pwderr.style.color = "red";
        return false;
		
    }
    // console.log(activesession);

}function redirect(){
    activesession = true;
    // console.log(activesession);
    // window.location.href = "main.html";
    return true;
    //   callback();
    // redirectmain();
}
redirect();
console.log(activesession);
 
//   else{
//     activesession=false;
//     
//   }
//  function redirectmain(){
    
//        activesession=false;
        

//     location.href = "index.html";
//     }
// console.log(activesession);
