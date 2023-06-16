const validator = {
  isValid: function (numeroTarjeta) {
    const arr = Array.from(numeroTarjeta);
    arr.reverse();
    let pares = 0
    let impares = 0
    for ( let i = 1; i <= arr.length; i++ ) {
      console.log("Iteracion: ", i)
      if(i%2 === 0) {
        let suma = 0
        const digitos = arr[i-1] * 2
        console.log("let:digitos ", digitos)
        if (digitos >= 10) {
          const resultado = digitos.toString();
          console.log ("resultado: ", resultado);
          for ( let j = 0; j < resultado.length; j++) {
            suma = suma + Number(resultado[j]);
            console.log ("suma: ", suma);
          }
        } else {
          suma = digitos
          console.log ("suma=digitos: ", suma)
        }
        pares = pares + suma 
        console.log("pares: ", pares)
              
      } else {
        const posicimpar = arr[i-1]
        impares = impares + Number(posicimpar);
        console.log("posicionimpar: ", posicimpar)
        console.log("impares: ", impares)
      }
    }
    const valtotal = impares + pares
    if (valtotal%2 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify: function  (numeroTarjeta) {
    console.log ("numerotarjeta", numeroTarjeta)
    let resultadoMaskify = ""
    if (numeroTarjeta.length > 4) {
      let acumulador = ""
      const mostrar = numeroTarjeta.slice(-4);
      console.log ("mostrar: ", mostrar)
      for (let i = 0; i < numeroTarjeta.length - 4; i++) {
        console.log ("longitud tarjeta: ", numeroTarjeta.length)
        console.log ("i for", i)
        acumulador = acumulador + "#"
        console.log ("acumulador: ", acumulador)
      }
      resultadoMaskify = acumulador + mostrar;
    }else {
      resultadoMaskify = numeroTarjeta;
    }
    return resultadoMaskify    
  }
};

export default validator;



