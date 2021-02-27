alert("hola mundo");
document.body.innerHTML = "<h2>Hola mundo </h2>";
console.log("hola consola");

function suma(){
    //alert("soy un botón");
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var suma = n1 + n2;
    document.getElementById("suma").innerHTML = "la suma es" +suma;
}