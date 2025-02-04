
/* Crea un programa que haga lo siguiente:
Si el primer número es mayor que el segundo: Sumas los números y los enseñas por consola
Si el segundo número es negativo o distinto de cero: Multiplicas el segundo número por 3 y lo enseñas por consola.
Si al incrementar en 1 unidad el valor del número 1 no lo hace mayor o igual que el número 2: Determinas cuanto deberías sumarle al valor del número 1 para que sea igual que el numero 2 y lo enseñas por consola.
*/

let numero1 = -4
const numero2 = 0

if(numero1 > numero2){
    const suma = numero1 + numero2
    console.log(suma)
} else if (numero2 < 0 || numero2 !== 0){
    const multiplicacionNumero = numero2 * 3
    console.log(multiplicacionNumero)
} else if (++numero1 < numero2){
    const resta = numero2 - numero1
    console.log(resta)
}