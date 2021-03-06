var cartas = [];
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargaarreglos(){
    for (var x = 2;x<=54;x++){
        cartas.push("loteria_"+ x + ".jpg");
    }
}

function sacar(){
    var t = cartas.length;
    var p = aleatorio(0,t-1);
    if( t > 0){
        document.getElementById("carta").src = cartas[p];
        cartas.splice(p,1);
    }
    else{
        alert("fin del juego:(");
        cartas = [];
        cargaarreglos();
        document.getElementById("carta").src = "loteria_1.jpg";
    }
}

var x = aleatorio (1,10);
console.log(x);