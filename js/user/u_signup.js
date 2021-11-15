function signUpUser(){
    var myUserName = document.getElementById("Uname").value;
    var myFullName = document.getElementById("Fname").value;
    var myEmail    = document.getElementById("Email").value;
    var dateOfBirth =document.getElementById("dateOfB").value;
    var mypass = document.getElementById("pass").value;
    var myConfrom = document.getElementById("ComfromPass").value;
    var checkBox = document.getElementById("agrees");

    var fText = '';

    if(myUserName.length > 10 || myUserName.length == 0){
        fText += "User name Error ! ";
    }

    if(myFullName.length > 20 || myUserName.length == null){
        fText += "Full name Error ! ";
    }
		if(myEmail.length == 0 ){
    fText += "Email adress Error ! ";
    
    }
		if(dateOfBirth.length == 0 ){
    fText += "Date of birth Error ! ";
    }
		if(mypass.length !== 8 || mypass.length == null){
        fText += "Invalid Password !";
    }
		if(myConfrom != mypass)
      {
        fText += "Doesn't match password and comfrom password !";
      }
      
      
      if (checkBox.checked == false){
        fText += "Please tick with agree team of service ";
      }
		  if(fText != ''){
        alert(fText);
        }
    else{
        alert("Successfuly !")
    }
		

  
}





function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}




var input = document.querySelector('#myFile');
input.addEventListener('Change', preview);
function preview() {
  var fileObject = this.files[0];
  var fileReader = new FileReader();
  fileReader.readAsDataURL(fileObject);
  fileReader.onload = function () {
    var result = fileReader.result;
    document.getElementById('selectedImage').src = result;
    var img = document.querySelector('#selectedImage');
    img.setAttribute('src', result);
    
  };
}