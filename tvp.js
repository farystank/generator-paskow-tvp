function nowyPasek(){
    var czc;
    var wys;
    var x = document.getElementById("input").value;
    var los = Math.floor(Math.random() * 7);
    var zdj = ['1', '2', '3', '4', '5', '6', '7', '8'];        
    if (x.length <= 29) {
       czc = "66px";
       wys = 917;
    } else if (x.length > 29 && x.length <= 31 ) {
       czc = "62px";
       wys = 917;
    } else if (x.length > 31 && x.length <= 33 ) {
       czc = "58px";
       wys = 913;
    } else if (x.length > 33){
       czc = "54px";
       wys = 911;
    }

    var canvas = document.getElementById("tvp");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById(zdj[los]);
    var gradient = ctx.createLinearGradient(0, 865, 0, 911);
    gradient.addColorStop(0, "#F9FDFF");
    gradient.addColorStop(1, "#B3BAC6");
    ctx.fillStyle = gradient;
    ctx.shadowColor = "#141D51";
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 4;
    ctx.drawImage(img, 1, 1);
    ctx.font = "600 " + czc + " DM Sans, sans-serif";
    ctx.fillText(x,363,wys);
}