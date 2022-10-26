/*
Nama: Daffa Haidar Nabil Zufar
NIM : 2440100456
Lembar Jawaban Soal Study Kasus
Link Video Penjelasan: https://youtu.be/XtVjxkoT7tc
*/

//Javascript Source Code:

//Regex validation
function verification(regex, input, helpId, helpMessage){
  if(!regex.test(input)) {
    if (helpId != null)
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);
      }
      helpId.appendChild(document.createTextNode(helpMessage));
  }else{
      if (helpId != null){
        while (helpId.childNodes[0]){
          helpId.removeChild(helpId.childNodes[0]);
        }
      }
  }
}

//Form validation for email
function verifyEmail(inputField, helpId) {
  return verification(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
    inputField.value, 
    helpId,
    "Please enter a valid email address that consists of only letters, numbers, periods, and the @sign.");
}
 
//Form validation for password
function verifyPassword(inputField, helpId) {
  return verification(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  inputField.value, helpId,
  "Your password must contain at least 8 characters with one letter and one number!");
}

//Form validation for confirm
function verifyCon(inputField, helpId) {
  return verification(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  inputField.value, helpId,
  "Please confirm your password!");
}

//Submit Validation
var ceklist = document.getElementById('ceklist');
var submit = document.getElementById('saveButtonId');
submit.style.backgroundColor = "gainsboro";
ceklist.onclick = function(){
  //Kondisi dimana checkbox sudah di ceklist
  if(submit.style.backgroundColor == "gainsboro"){
    submit.style.backgroundColor = "#ff6a00";
    submit.style.cursor="pointer";
    submit.onclick = function(){
      

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirm = document.getElementById("confirm").value;
      var cust = {
        password: password,
        confirm: confirm,
        email: email,
      };
      //Kondisi dimana setiap element form tidak diisi sama sekali
      if(cust.email===""&&cust.password===""&&cust.confirm===""){
        document.getElementById("email_help").innerHTML = "Please enter your email";
        document.getElementById("password_help").innerHTML = "Please enter your password";
        document.getElementById("confirm_help").innerHTML = "Please confirm your password";
      }else if(cust.email === ""){
        document.getElementById("email_help").innerHTML = "Please enter your email";
      }else if(cust.password===""){
        document.getElementById("password_help").innerHTML = "Please enter your password";
      }else if(cust.confirm===""){
        document.getElementById("confirm_help").innerHTML = "Please enter your password";
      }else if(cust.confirm != cust.password){
        //Password Validation Check (Jika form confirm tidak sama dengan password maka data tidak bisa di submit)
        var pwdCheck = $("#password").val();
        var validationCheck = $("#confirm").val();
        if (pwdCheck != validationCheck) {
          document.getElementById("confirm_help").innerHTML = "Your password doesn't match! Please confirm your password!";
          return false;
        }
        return true;
      }
      //Kondisi dimana setiap form sudah diisi kemudian d submit
      else {
        alert("Data berhasil di submit namun belum dapat dikirimkan ke Database!");
      }
      
    }
  //Kondisi dimana checkbox tidak di ceklist
  }else{
    submit.style.backgroundColor = "gainsboro";
    submit.style.cursor="not-allowed";
    submit.onclick = function(){
      submit.style.cursor="not-allowed";
    }
  }
}

//Show Hide Contact
$(document).ready(function(){
  $("#btn-contact").click(function(){
    $("#showHideContact").show();
    $("#btn-contact").hide();
  });
  $("#X").click(function(){
    $("#showHideContact").hide();
    $("#btn-contact").show();
  });
});

//Show Hide Password Function
$(document).ready(function(){
  var password = document.getElementById('password');
  var confirm = document.getElementById('confirm');
  //Show Password Function
  $("#showpw").click(function(){
    $("#hidepw").show();
    $("#showpw").hide();
    password.setAttribute('type', 'text');
  });
  $("#showcn").click(function(){
    $("#hidecn").show();
    $("#showcn").hide();
    confirm.setAttribute('type', 'text');
  });
  //Hide Password Function
  $("#hidepw").click(function(){
    $("#showpw").show();
    $("#hidepw").hide();
    password.setAttribute('type', 'password');
  });
  $("#hidecn").click(function(){
    $("#showcn").show();
    $("#hidecn").hide();
    confirm.setAttribute('type', 'password');
  });
});

//Copyright animation
var typed = new Typed(".typing", {
  strings: ["Copyright by Alidafa Cloud All rights reserved.", "Created by Daffa Haidar Nabil Zufar - 2440100456."],
  typeSpeed: 50,
  backSpeed: 10,
  loop: true
});