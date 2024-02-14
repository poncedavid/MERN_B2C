class Humano{
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    getInfo(){
        return console.log( `Nombre: ${this.nombre}, Edad: ${this.edad}, Pais: ${this.pais}`);
    }
    sumaEdad(cantiad){
        this.edad += cantiad;
    }
    setPais(pais){
        this.pais = pais;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

}



class Hombre extends Humano{
    constructor(nombre, edad, pais, genero){
        super(nombre, edad, pais);
        this.genero = genero;
    }

    mostrarGenero(){
        return console.log(`Genero: ${this.genero}`);
    }
}

