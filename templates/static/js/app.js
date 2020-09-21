function getbath() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
        if(uiBathrooms[i].checked) {
            console.log(uiBathrooms[i].value);
            return uiBathrooms[i].value;
        }
    }
    return -1; // Invalid Value
}

function getbedrooms() {
    var bedrooms = document.getElementsByName("bedrooms");
    for(var i in bedrooms) {
        if(bedrooms[i].checked) {
            console.log(bedrooms[i].value);
            return bedrooms[i].value;
        }
    }
    return -1; // Invalid Value
}
function getrooms() {
    var rooms = document.getElementsByName("rooms");
    for(var i in rooms) {
        if(rooms[i].checked) {
            console.log(rooms[i].value);
            return rooms[i].value;
        }
    }
    return -1; // Invalid Value
}
function getcellar() {
    var cellar = document.getElementsByName("cellar");
    for(var i in cellar) {
        if(cellar[i].checked) {
            console.log(cellar[i].value);
            return cellar[i].value;
        }
    }
    return -1; // Invalid Value
}
function getparking() {
    var parking = document.getElementsByName("parking");
    for(var i in parking) {
        if(parking[i].checked) {
            console.log(parking[i].value);
            return parking[i].value;
        }
    }
    return -1; // Invalid Value
}
function getbalc() {
    var balc = document.getElementsByName("balc");
    for(var i in balc) {
        if(balc[i].checked) {
            console.log(balc[i].value);
            return balc[i].value;
        }
    }
    return -1; // Invalid Value
}
function getgf() {
    var gf = document.getElementsByName("gf");
    for(var i in gf) {
        if(gf[i].checked) {
            console.log(gf[i].value);
            return gf[i].value;
        }
    }
    return -1; // Invalid Value
}

function getlf() {
    var lf = document.getElementsByName("lf");
    for(var i in lf) {
        if(lf[i].checked) {
            console.log(lf[i].value);
            return lf[i].value;
        }
    }
    return -1; // Invalid Value
}
function getrenovated() {
    var renovated = document.getElementsByName("uireno");
    for(var i in renovated) {
        if(renovated[i].checked) {
            console.log(renovated[i].value);
            return renovated[i].value;
        }
    }
    return -1; // Invalid Value
}
function OnClick(){
    console.log();
}


function onClickedEstimatePrice() {

    var area = parseInt(document.getElementById("uiSqft").value);
    var rooms = parseInt(getrooms());
    var bedrooms = parseInt(getbedrooms());
    var bath = parseInt(getbath());
    var apart_floor = parseInt(document.getElementById("uifloor_ap").value);
    var build_floor = parseInt(document.getElementById("uifloor_building").value);
    var cellar = getcellar();
    var parking = getparking();
    var balc = getbalc();
    var renovated = getrenovated();
    var estPrice = document.getElementById("uiEstimatedPrice");
    var gf = getgf();
    var lf = getlf();
    var district= document.getElementById("uiLocations").value;
    //console.log([area,rooms,bedrooms,bath,apart_floor,build_floor,cellar,parking,balc,renovated,gf,lf,district]);
    var url = "https://house-price-prediction-paris.herokuapp.com/predict";
    var headers = {"Content-Type": "application/json"}
    var tab = [area,rooms,bedrooms,bath,apart_floor,build_floor,cellar,parking,balc,renovated,gf,lf,district]
    var data = {input: JSON.stringify(tab)}

    $.post(url, data
    ,function(data, status) {
        console.log(data.estimated_price);
       estPrice.innerHTML= "<h2>" + data.estimated_price.toString() + " € </h2>";
        console.log(status);
    });

    console.log(data.input);


}
