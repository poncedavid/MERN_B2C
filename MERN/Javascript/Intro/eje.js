

        //indice 0,1,2,3,4,5,6,7,8,9
const arreglo = ["David","Apellido",3,true]




const [nombre,apellido,edad,activo] = arreglo;



function fechaNacimento(valorEdad){
     
    let resultado = 2021 - valorEdad;
    return resultado
}

console.log(fechaNacimento(edad));