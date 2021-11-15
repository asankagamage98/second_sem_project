function checkoutFormValidity(){
    var Alttext='';
    var cardNumb=document.getElementById("cardNum").value;
    var cardNumbLen=cardNumb.length;
    var custName=document.getElementById("cardName").value;
    var monthStr=document.getElementById("exMonth").value;
    var month=parseInt(monthStr);
    var yearStr=document.getElementById("exYear").value;
    var year=parseInt(yearStr);
    var yearLen=year.length;
    var cvvNumb=document.getElementById("cvv").value;
    var cvvLen=cvvNumb.length;
    document.getElementById("attentionMes").innerHTML='';

    if(custName==''){
        Alttext+='<br>Enter Card Holder Name !';
    }

    if(cardNumbLen!=16 || cardNumb==''){
        Alttext+='<br>Enter Valid Card Number !';
    }

    if(!(month<13) || !(month>0) || (year<20)){
        Alttext+='<br>Expire Details Are Not Valid !';
    }

    if(cvvLen!=3){
        Alttext+='<br>Enter Valid CVV !';
    }

    document.getElementById("attentionMes").innerHTML=Alttext;
}

function findCardType(){
    var cardnumb = document.getElementById("cardNum").value;

    if(cardnumb>=5100000000000000 && cardnumb<=5500000000000000){
    document.getElementById("cardType").src="images/user/master.jpg";
    }
    else if(cardnumb>=4000000000000000 && cardnumb<=4900000000000000){
    document.getElementById("cardType").src="images/user/visa.jpg";
    }
    else if(cardnumb>=3400000000000000 && cardnumb<=3700000000000000){
    document.getElementById("cardType").src="images/user/amex.jpg";
    }
    else{
    document.getElementById("cardType").src="";
    }
}