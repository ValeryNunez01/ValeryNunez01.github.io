//alert("hola mundo");
document.body.innerHTML = "<h2>Calculadora</h2>";
console.log("hola consola");

function reiniciar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("suma").innerHTML="";
    document.getElementById("division").innerHTML="";
    document.getElementById("resta").innerHTML="";
    document.getElementById("multiplicar").innerHTML="";
}

function multiplicar(){
    if(isNaN(document.getElementById("num1").value) || document.getElementById("num1").value==""){
        alert("num 1 no es un numero y no debe estar vacio");
    }
    else if (isNaN(document.getElementById("num2").value) || document.getElementById("num2").value==""){
        alert("num 2 no es un numero y no debe estar vacio");
    }
    else{
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var multiplicar = n1 * n2;
    document.getElementById("multiplicar").innerHTML = "El resultado de la multiplicacion es " +multiplicar;
    }
}

function suma(){
    //alert("soy un botón");

    if(isNaN(document.getElementById("num1").value) || document.getElementById("num1").value=="")
    {
        alert("num 1 no es un numero y no debe estar vacio");
    }
    else if(isNaN(document.getElementById("num2").value) || document.getElementById("num2").value=="")
    {
        alert("num 2 no es un numero y no debe estar vacio");
    }
    else{
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var suma = n1 + n2;
    document.getElementById("suma").innerHTML = "El resultado de la suma es " +suma;
    }
}

function division(){
    if(isNaN(document.getElementById("num1").value)||document.getElementById("num1").value==""){
        alert("num 1 no es un numero y no debe estar vacio");
    }
    else if (isNaN(document.getElementById("num2").value) || document.getElementById("num2").value==""){
        alert("num 2 no es un numero y no debe estar vacio");
    }
    else{
    
    if (document.getElementById("num2").value=="0"){
        alert("SINTAX ERROR :(")
    } else{
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var division = n1/n2;
    document.getElementById("division").innerHTML = "El resultado de la division es " + division;
    }
    }
}

function resta(){
    if(isNaN(document.getElementById("num1").value)||document.getElementById("num1").value==""){
        alert("num 1 no es un numero y no debe estar vacio");
    }
    else if (isNaN(document.getElementById("num2").value) || document.getElementById("num2").value==""){
        alert("num 2 no es un numero y no debe estar vacio");
    }
    else{
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var resta = n1-n2;
    document.getElementById("resta").innerHTML = "El resultado de la resta es " + resta;
    }
}