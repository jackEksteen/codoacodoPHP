//traigo los valores del html 
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var cantidad = document.getElementById("cantidad")
var categoria = document.getElementById("categoria")

//Variables
var descuento
var ticket = 200


switch (categoria.value) {
    case "estudiante":
        console.log("Sos un Estudiante");
        descuento = 0.8;
        break
    case "trainee":
        console.log("Sos un Trainee");
        descuento = 0.5;
        break
    case "junior":
        console.log("Sos un Junior");
        descuento = 0.15;
        break
}

//FUNCIONES

//función que calcula el boleto
function calcularBoleto() {

    valorBruto = cantidad.value * ticket
    valorNeto = valorBruto - valorBruto * descuento

}

function borrarForm(){

}