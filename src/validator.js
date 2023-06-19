const validator = {
  isValid: function (numeroTarjeta) {
    const arr = Array.from(numeroTarjeta);
    arr.reverse();
    let pares = 0
    let impares = 0
    for ( let i = 1; i <= arr.length; i++ ) {
      if(i%2 === 0) {
        let suma = 0
        const digitos = arr[i-1] * 2
        if (digitos >= 10) {
          const resultado = digitos.toString();
          for ( let j = 0; j < resultado.length; j++) {
            suma = suma + Number(resultado[j]);
          }
        } else {
          suma = digitos
        }
        pares = pares + suma        
      } else {
        const posicimpar = arr[i-1]
        impares = impares + Number(posicimpar);
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
    let resultadoMaskify = ""
    if (numeroTarjeta.length > 4) {
      let acumulador = ""
      const mostrar = numeroTarjeta.slice(-4);
      for (let i = 0; i < numeroTarjeta.length - 4; i++) {
        acumulador = acumulador + "#"
      }
      resultadoMaskify = acumulador + mostrar;
    }else {
      resultadoMaskify = numeroTarjeta;
    }
    return resultadoMaskify    
  }
};

export default validator;



