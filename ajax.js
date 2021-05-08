
function ajax(){

    if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
        location.href = "/Login.html";
      }

else{
var xttp = new XMLHttpRequest();
xttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var resp = JSON.parse(this.responseText);
        var output ="";
        for(var i=0;i<resp.length;i++){

            // if(resp[i].completed==true){
            //    // document.getElementById("content").disabled = true;
            // console.log("success");
            // output+= '<input type="checkbox">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
            // }
        //  else{
           output+= '<input type="checkbox" id="mycheck">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
        //    if(resp[i].completed==true){
        //         document.getElementById("mycheck").disabled = true;
        //      console.log("success");
        //$('#myCheck').prop('checked', true);
        // }
        document.getElementById("content").innerHTML = output;
    }
         
        
       


    }
}
xttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xttp.send();
}
}