import validator from './validator.js';

console.log(validator);

const seccionFormularioPago = document.getElementById("seccion_formulario_pago");
const SeccionPaginaPrincipal = document.getElementById("seccion_pagina_principal");
const botonComprarComedero =document.getElementById ("comprar_comedero");
const botonComprarKit = document.getElementById("comprar_kit");
const botonComprarTunel = document.getElementById("comprar_tunel");

function enviarFormularioPago () {
    seccionFormularioPago.style.display = "block"
    SeccionPaginaPrincipal.style.display = "none"
};

botonComprarComedero.addEventListener("click", function () {
    enviarFormularioPago()
});

botonComprarKit.addEventListener("click", function () {
    enviarFormularioPago()
});


botonComprarTunel.addEventListener("click", function () {
    enviarFormularioPago()
});

const botonConfirmar = document.getElementById ("boton_formulario_pago");
botonConfirmar.addEventListener("click" , function () {
    let numeroTarjeta = document.getElementById("numero_tarjeta").value;
    let tarjetaValida = validator.isValid (numeroTarjeta);

    if (tarjetaValida) {
        alert ("Tarjeta valida ")
    } else {
        alert ("Tarjeta invalida ")
    }
});
    



 


