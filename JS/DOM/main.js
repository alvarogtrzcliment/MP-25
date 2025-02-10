const elementoH3 = document.getElementById('elementoh3')
console.log(elementoH3)
elementoH3.innerHTML = 'Cambiando el HTML desde JS'

const elementoH2 = document.getElementsByTagName('h2')
console.log(elementoH2)

const divCreadoJS = document.createElement('div')
divCreadoJS.id = 'divCreadoJS'
console.log(divCreadoJS)

const div1 = document.querySelector('.div1')
console.log(div1.children)
div1.appendChild(divCreadoJS)

const parrafoJS = document.createElement('p')
parrafoJS.innerHTML = 'Párrafo creado por JS'
divCreadoJS.appendChild(parrafoJS)

const boton = document.getElementById('boton')
boton.addEventListener('click', clickHandler)

const tituloh1 = document.getElementById('tituloh1')

function clickHandler(informacionEvento){
    console.log('He sido Clickado!!')

    if(tituloh1.style.backgroundColor === 'red'){
        tituloh1.style.backgroundColor = 'white'
    } else {
        tituloh1.style.backgroundColor = 'red'
    }

    
}