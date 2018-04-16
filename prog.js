function clickmethod(){
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var numbers = /^[0-9]+$/;
if(document.getElementById("firstName").value=="" && document.getElementById("lastName").value=="" && document.getElementById("emailAddress").value=="" && document.getElementById("phNo").value=="" && reg.test(document.getElementById("emailAddress").value) == false )
{

document.getElementById("Button").disabled = true;

}
else if(document.getElementById("firstName").value!="" && document.getElementById("lastName").value!="" && document.getElementById("emailAddress").value!="" && document.getElementById("phNo").value!=""&& reg.test(document.getElementById("emailAddress").value) == true && document.getElementById("phNo").value.match(numbers))
{
document.getElementById("Button1").disabled = false;
alert('First Name:'+document.getElementById("firstName").value +"\n"+ 'Last Name:'+document.getElementById("lastName").value +"\n"+ 'Email Id :' + document.getElementById("emailAddress").value +"\n"+ 'Phone No:'+document.getElementById("phNo").value);
 document.myForm.reset();
}

}

function clickbutton(){
 var reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var numbers1 = /^[0-9]+$/;
if(document.getElementById("firstName1").value=="" && document.getElementById("lastName1").value=="" && document.getElementById("emailAddress1").value=="" && document.getElementById("phNo1").value=="" && reg1.test(document.getElementById("emailAddress1").value) == false )
{

document.getElementById("Button1").disabled = true;

}
else if(document.getElementById("firstName1").value!="" && document.getElementById("lastName1").value!="" && document.getElementById("emailAddress1").value!="" && document.getElementById("phNo1").value!=""&& reg1.test(document.getElementById("emailAddress1").value) == true && document.getElementById("phNo1").value.match(numbers1))
{
document.getElementById("Button1").disabled = false;
alert('First Name:'+document.getElementById("firstName1").value +"\n"+ 'Last Name:'+document.getElementById("lastName1").value +"\n"+ 'Email Id :' + document.getElementById("emailAddress1").value +"\n"+ 'Phone No:'+document.getElementById("phNo1").value);
 document.myForm1.reset();
}

}