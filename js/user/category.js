function tempalateSearchResult(){

    tempS = '';
    for(let i=0; i<templates.length; i++){

        textS += '  <div class="template-result"><img src="images\\user\\sadisha\\' + templates[i].path + '" class="temp-image"><p id="templateTitle">' + templates[i].title + '</p><p id="temp-desc">' + templates[i].description +'</p><button class="down-btn x2">';
        
        if(templates[i].price == 0){
            textS += '<input type="button" class="down-btn x1" value="Free Download">';
        }
        else{
            textS += '<img src="images/user/buy.png" class="buy-ico" alt="">Buy</button>';
        }

        textS += '</div>';

        document.getElementById("result").innerHTML = textS;
    }
}