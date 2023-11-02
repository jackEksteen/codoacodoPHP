//traigo los valores del html 
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var cantidad = document.getElementById("cantidad")
var categoria = document.getElementById("categoria")
var formulario = document.querySelector("#formulario_pago")
var factura = document.querySelector("#ticketFinal")

//Variables
var descuento
var ticket = 200




//FUNCIONES

formulario.addEventListener('submit', function (event) {
 
    event.preventDefault();

    //cambio el tipo de descuento
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
    
   
    
    factura.style.visibility = 'visible'
     

    document.getElementById('ticketFinal').innerHTML = 'Total a pagar: $';

    //hago el calculo del valor del ticker
    valorBruto = cantidad.value * ticket
    valorNeto = valorBruto - (valorBruto * descuento)
    console.log(valorNeto);

    //creo elemento y lo pego en el html
    let elementoTicket = document.querySelector("#ticketFinal")
    let contenidoTicket = document.createTextNode(valorNeto)
    elementoTicket.appendChild(contenidoTicket)
}); 

function borrarForm() {
    factura.style.visibility = 'hidden'
    formulario.reset();
}
