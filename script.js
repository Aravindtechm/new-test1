function validateForm(){
    
    var uname=document.getElementById("uname");
    var pass=document.getElementById("pass");
    if(uname.value=="Aravind" && pass.value=="raina143"){
        return true;
    
    }
    else{
        alert("Wrong id or password");
        return false;
        
    
        
    }
}