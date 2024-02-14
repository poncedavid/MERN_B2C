class Ninja{
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 999;
        this.fuerza = 999;
    }


    sayName(){
        return console.log(`El nombre del ninja es: ${this.nombre}`);
    }

    showStats(){
        return console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinSake(){
        this.salud += 10;
    }


}

const ninjita = new Ninja("David",)
ninjita.showStats();



class Sensei extends Ninja{
    constructor(nombre){

        super(nombre,200);

        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){


        super.drinSake();
        super.drinSake();
        super.drinSake();
        super.drinSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
        super.showStats();
    }

    showStats(){
        return console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}, Sabiduria: ${this.sabiduria}`);
    }






}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();