class Humano{
    constructor(nombre, pais)
    {
        this.nombre = nombre;
        this.pais = pais;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setPais(pais){
        this.pais = pais;
    }

    getInformacion(){
        return console.log(`Nombre: ${this.nombre}, Pais: ${this.pais}`);
    }
}

class Estudiante extends Humano{
    constructor(nombre, pais, carrera, edad){
        super(nombre, pais);
        this.edad = edad;
        this.carrera = carrera;
    }

    getCararra(){
        return console.log(`El estudiante cursa: ${this.carrera}`);
    }

    getEdad(){
        return console.log(`La edad del estudiante es: ${this.edad}`);
    }

    setCumpleaños(){
        this.edad += 1;
    }

}


const david = new Estudiante("David", "Mexico", "Ingenieria en Sistemas", 25);

david.getInformacion();

david.setCumpleaños();
david.getEdad();