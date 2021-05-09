
// function ajax(){
// var xttp = new XMLHttpRequest();
// xttp.onreadystatechange = function(){
//     if(this.readyState==4 && this.status==200){
//         var resp = JSON.parse(this.responseText);
//         var outputunchecked ="";
//         // var outputchecked ="";
//         // var activecheckbox ;
//         for(var i=0;i<resp.length;i++){

//             // if((resp[i].completed)==false){
//             //    // document.getElementById("content").disabled = true;
//             // console.log("success");
//             // output+= '<input type="checkbox">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
//             // }
//         //  else{
//             // activecheckbox = resp[i].completed;
//             // if (activecheckbox==true){

//                 outputunchecked += '<input type="checkbox" id="mycheck">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
//                 console.log(outputunchecked);
//         //    if(resp[i].completed==true){
//         //         document.getElementById("mycheck").disabled = true;
//         //      console.log("success");
//         //$('#myCheck').prop('checked', true);
//         // activecheckbox = resp[i].completed;
//         // console.log(activecheckbox);
        
//             // document.getElementById("mycheck").disabled = true;
//         // }
//         // }
//             // console.log(outputunchecked);
//         document.getElementById("content").innerHTML = outputunchecked;
//     // }
// }  
//     }
// // for(var i=0;i<resp.length;i++){
// //     if((resp[i].completed)==true){
// //         outputchecked+= '<input type="checkbox" id="mycheck">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
// //         document.getElementById("checkedcontent").innerHTML = outputchecked;
// //     }
// // }


// xttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// xttp.send();


//     }
// }


function ajax(callback){

    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
    var resp = JSON.parse(this.responseText);
    var outputunchecked ="";
    var outputchecked ="";
    for(var i=0;i<resp.length;i++){
         if((resp[i].completed)==false){

        
        outputunchecked += '<input type="checkbox" id="mycheck">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
        document.getElementById("content").innerHTML = outputunchecked;
   
        }
        else{
             outputchecked += '<input type="checkbox" id="mycheck" checked onclick="return false;">'+'&nbsp;'+'&nbsp;'+resp[i].title+'</input>'+'<br />'+'<br />';
   
         document.getElementById("checkedcontent").innerHTML = outputchecked;
         }
    }
    callback();
    }

    }


xttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xttp.send();

}
function checkboxes(){


var numberOfChecked = $('input:checkbox:checked').length;
console.log(numberOfChecked);
var totalCheckboxes = $('input:checkbox').length;
console.log(totalCheckboxes);
var numberNotChecked = totalCheckboxes - numberOfChecked;
console.log(numberNotChecked);
}
// let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.htm");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );