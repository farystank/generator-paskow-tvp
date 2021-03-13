
function nowyMem(){ 
    var x = document.getElementById("input").value;
    var y = document.getElementById("input2").value;
    var czc = document.getElementById("input_czc").value;
    var marl = document.getElementById("input_marl").value;
    var marl2 = document.getElementById("input_marl2").value;
    var wys = document.getElementById("input_mart").value;
    var wys2 = document.getElementById("input_mart2").value;
    var grub = document.getElementById("input_grub").value;
    var kol = document.getElementById("input_kol").value;
    var kol2 = document.getElementById("input_kol2").value;
    var wyso = document.getElementById("output_image").height;
    var szero = document.getElementById("output_image").width;
    var zdj = document.getElementById("output_image").src;
    var wys2 = wyso - wys2;
    if (x == "" || y == "" || czc == "" || marl == "" || marl2 == "" || wys == "" || wys2 == "" || grub == "" || kol == "" || kol2 == "" || zdj == "") {
        alert("Nie uzupełniono wszystkich pól");
    } else {
        var canvas = document.getElementById("mem");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("output_image");
        ctx.canvas.height = wyso;
        ctx.canvas.width = szero;
        ctx.strokeStyle = kol2;
        ctx.lineWidth = grub;        
        ctx.fillStyle = kol;
        ctx.drawImage(img, 0, 0);
        ctx.font = "600 " + czc + "px" + " Arial, sans-serif";
        ctx.strokeText(x,marl,wys);
        ctx.strokeText(y,marl2,wys2);
        ctx.fillText(x,marl,wys);
        ctx.fillText(y,marl2,wys2);
    }
}

function zaladuj_zdj(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}