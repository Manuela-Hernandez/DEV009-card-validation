const validator = {
  isValid: isValid,
  maskify: maskify
};
function isValid (numeroTarjeta) {
  let arr = Array.from(numeroTarjeta);
    arr.reverse();
    let pares = 0
    let impares = 0
    for ( let i = 1; i <= arr.length; i++ ) {
        console.log("Iteracion: ", i)
        if(i%2 === 0) {
            let suma = 0
            let xyz = arr[i-1] * 2
            console.log("let:xyz ", xyz)
            if (xyz >= 10) {
                let resultado = xyz.toString();
                console.log ("resultado: ", resultado);
                for ( let j = 0; j < resultado.length; j++) {
                  suma = suma + Number(resultado[j]);
                  console.log ("suma: ", suma);
                }
            } else {
                suma = xyz
                console.log ("suma=xyz: ", suma)
            }
        
            pares = pares + suma 
            console.log("pares: ", pares)
            
        } else {
            let posicimpar = arr[i-1]
            impares = impares + Number(posicimpar);
            console.log("posicionimpar: ", posicimpar)
            console.log("impares: ", impares)
        }

    }
    let valtotal = impares + pares
    if (valtotal%2 === 0) {
        return true
    } else {
        return false
    }
}

function maskify (numeroTarjeta) {

}
export default validator;



