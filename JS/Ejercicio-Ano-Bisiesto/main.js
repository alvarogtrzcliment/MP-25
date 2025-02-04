//  Ejercicio Año Bisiesto

const ano = 2021

if(ano%4 !== 0){
    console.log('No es bisiesto')
} else if (ano%100 !== 0){
    console.log('OLE BISIESTO!!')
} else if (ano % 400 === 0){
    console.log('OLE BISIESTO')
} else {
    console.log('No es bisiesto :(')
}