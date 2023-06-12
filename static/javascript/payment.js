function check(){
    nme=document.getElementById('name').value;
    mail=document.getElementById('mail').value;
    add=document.getElementById('add').value;
    city=document.getElementById('city').value;
    zip=document.getElementById('zip').value;
    card=document.getElementById('card').value;
    mon=document.getElementById('mon').value;
    cvv=document.getElementById('cvv').value;
    submit=document.getElementById('submit').value;
    if(nme==""){
        alert("please enter the name");
        return false;
    }
    if(mail==""){
        alert("please enter the mail id");
        return false;
    }
    if(add==""){
        alert("please enter the address");
        return false;
    }
    if(city==""){
        alert("please enter the city");
        return false;
    }
    if(zip==""){
        alert("please enter the zip");
        return false;
    }
    if(card==""){
        alert("please enter the card number");
        return false;
    }
    if(mon==""){
        alert("please enter the month");
        return false;
    }
    if(cvv==""){
        alert("please enter the cvv");
        return false;
    }
    if(submit){
        alert("payment successfully");
        return false;
    }
}
