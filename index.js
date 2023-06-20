import validator from './validator.js';

const seccionFormularioPago = document.getElementById("seccion_formulario_pago");
const SeccionPaginaPrincipal = document.getElementById("seccion_pagina_principal");
const botonComprarComedero =document.getElementById ("comprar_comedero");
const botonComprarKit = document.getElementById("comprar_kit");
const botonComprarTunel = document.getElementById("comprar_tunel");
const resultadoTarjeta = document.getElementById("resultadoTarjeta");

function enviarFormularioPago () {
  seccionFormularioPago.style.display = "block"
  SeccionPaginaPrincipal.style.display = "none"
}

botonComprarComedero.addEventListener("click", function () {
  enviarFormularioPago()
})

botonComprarKit.addEventListener("click", function () {
  enviarFormularioPago()
})


botonComprarTunel.addEventListener("click", function () {
  enviarFormularioPago()
})

const botonConfirmar = document.getElementById ("boton_formulario_pago");
botonConfirmar.addEventListener("click" , function () {
  const numeroTarjeta = document.getElementById("numero_tarjeta").value;
  const regexNumber = /^[0-9]+$/;
  if (numeroTarjeta.length === 0 || !numeroTarjeta.match(regexNumber)) {
    alert("Ingrese un número de tarjeta válido");
  }else {
    const tarjetaValida = validator.isValid (numeroTarjeta);
    const tarjetaMascara = validator.maskify (numeroTarjeta);

    if (tarjetaValida) {
      resultadoTarjeta.innerHTML = "Su tarjeta es válida " + tarjetaMascara
      resultadoTarjeta.style.color = "green";
    } else {
      resultadoTarjeta.innerHTML = "Su tarjeta es inválida " + tarjetaMascara
      resultadoTarjeta.style.color = "red";
    }
  }
    
});





 


