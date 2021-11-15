function completeType(){

var newText  ='';
var title    = document.getElementById("text1").value;
var Tumbnail = document.getElementById("text2").value;
var file     = document.getElementById("text3").value;
var desc     = document.getElementById("text4").value;
var search   = document.getElementById("text5").value;
var price    = document.getElementById("text6").value;
var free     = document.getElementById("radio").value;

//document.getElementById("alet").innerHTML='';

if(title ==''){
    newText +='\nAgain enter the title !';
}

if(Tumbnail ==''){
    newText+='\nAgain chose the thumbnail !';
}

if(file ==''){
    newText+='\nAgain chose the file !';
}

if(desc == ''){
    newText+='\nAgain enter the description !';
}
if(search == ''){
    newText+='\nAgain enter the search tag !';
}
if((price == '') || (free == '')){
    newText+='\nEnter price or select free icon  !';
} 
if((price !='') && (free !='')){
    newText+='\nselect price or free !';
} 

//document.getElementById("alet").innerHTML=newText;
alert(newText);
}
