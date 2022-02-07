



function validate(){
    var username=document.getElementById("userName").value;
    var password=document.getElementById("password").value;
    var mail=document.getElementById("userMail").value;
    
    console.log("validated0")
    if (!(username=="robin" && password=="key") ){
         //console.log("validated");
         alert("Invalid details")
         return;
         
    }
    document.location.href = "dashboard.html";

}




function update(){
    console.log("hi rob")
    
    document.location.href="./register.html"
    

//document.getElementById("robi").innerHTML=document.getElementById("updates").value;
}
//document.getElementById("robi").innerHTML=document.getElementById("updates").value



function update1(){
    console.log("hi rob")
    document.getElementById("num").innerHTML=document.getElementById("updateNumber").value;
}

function update3(){
    console.log("hi rob")
    document.getElementById("email").innerHTML=document.getElementById("updateEmail").value;
}





