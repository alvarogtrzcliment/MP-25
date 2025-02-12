
class Casa {

    constructor(tamano, habitaciones, banos, plantas){

        this.tamano = tamano
        this.numeroHabitaciones = habitaciones
        this.banos = banos
        this.plantas = plantas

    }

    anadirHabitaciones (numeroHabitacionesAnadir) {

        this.numeroHabitaciones = this.numeroHabitaciones + numeroHabitacionesAnadir

    }

}

const casaAlvaro = new Casa(100,2,1,1)

casaAlvaro.anadirHabitaciones(3)

console.log(casaAlvaro)
