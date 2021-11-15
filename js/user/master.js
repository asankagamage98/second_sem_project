function template(){
    var text='';
    for(i=0; i<1; i++){
        text+="<div class='template-card'><img src='images/user/sample.jpg' class='template-card-img'><div class='template-card-title'>"+(i+1)+" Title</div><div class='template-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo, distinctio dignissimos explicabo porro saepe aspernatur quos deserunt sed sequi!</div></div>";
    }
    document.getElementById("t").innerHTML=text;
}

function contactUs(){
    var name = document.getElementById("contName").value;
    var email = document.getElementById("contEmail").value;
    var message = document.getElementById("contMessage").value;
    var emailValidation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var text ='';

    if(name == ''){
        text += 'Name is requred !<br>';
    }

    if(email == ''){
        text += 'Email is requred !<br>'
    }
    else if(!emailValidation.test(email)){
        text += 'Not valid email address !<br>'
    }

    if(message == ''){
        text += 'Message feild is empty !<br>';
    }

    if(text != ''){
        document.getElementById("popupBG").style.visibility = "visible";
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("message").innerHTML = text;
    }
}

function contactUsHide(){
    document.getElementById("popupBG").style.visibility = "hidden";
    document.getElementById("popup").style.visibility = "hidden";
}