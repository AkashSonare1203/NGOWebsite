var name;
var surname;
var address;
var pin;
var contact;
var email;
var flag=0;

function getuser()
{
    var error=false;
    name=document.getElementById("fname").value;
    surname=document.getElementById("lname").value;
    contact=document.getElementById("contact").value;
    address=document.getElementById("address").value;
    pin=document.getElementById("pin").value;
    email=document.getElementById("email").value;
    if(name=="") alert("Enter name");
    if(surname=="") alert("Enter surname");
    validateUSPhoneNumber(contact); 
    validateEmail(email); 
    validatePIN(pin);
    if(!error){
        console.log("++++");
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:8080/Visitorinfo/rest/hello/post', true);
    request.setRequestHeader("Content-Type","application/json"); 
    var body= '{"firstName":"'+name+'", "lastName":"'+surname+'", "contact":"'+contact+'", "address":"'+address+'", "pin":"'+pin+'", "email":"'+email+'"}';
    //var body= '{"firstName":"'+name+'", "lastName":"'+surname+'"}';
    request.onload = function () {
         var data = this.response;
         console.log("received: ",data);      
    }
    request.send(body);
    }
}
function validateUSPhoneNumber(contact) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(contact)) {
      flag=0;
  }
  else {
    flag=1;
    error=true;
  }
  if(flag==1) alert("Enter valid phone No.");
}
function validateEmail(elementValue){   
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(emailPattern.test(elementValue)) {
       flag=0;
   }
   else {
       flag=1;
       error=true;
   }
   if(flag==1) alert("Enter valid Email ID");
 } 
 function validatePIN (pin) {
  if (pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){
  flag=0;
  }
  
  else {
  flag=1;
  error=true;
  }
  if(flag==1) alert("Enter valid pin No.");
}