
function suma(n1,n2){
    const numero1 = n1
    const numero2 = n2
    const suma = numero1 + numero2
    console.log(suma)
    return(suma)
}

const resultado4y3 = suma(4,3)

const resultado5y8 = suma(5,8)

const array = [5,4,3,2,1]

function sumaDos(numero){
    return numero+2
}

// const resultadoSumaDos = array.map((elementoArray)=>{
//    return sumaDos(elementoArray)
// })

// const resultadoSumaDos = array.map(function(elementoArray){
//     return sumaDos(elementoArray)
// })

const resultadoSumaDos = array.map(elementoArray => sumaDos(elementoArray))

console.log('Resultado Suma Dos',resultadoSumaDos)

// Funcion Invertir Palabra

function invertirPalabra(palabra){
    const arrayLetras = palabra.split('')
    const arrayDelReves = arrayLetras.reverse()
    return arrayDelReves.join('')
}

console.log(invertirPalabra('Hola'))

function numeroVocales(palabra){

    const arrayLetras = palabra.toLowerCase().split('')
    let contador = 0
    arrayLetras.map((letra)=>{
        if(letra === 'a' || letra === 'e' || letra === 'i'|| letra === 'o'|| letra === 'u'){
            contador++
        }
    })

    return contador

}

console.log(numeroVocales('Contador'))