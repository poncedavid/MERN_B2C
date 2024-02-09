const usuario = {
    id: "ffff",
    firstName: "Juan",
    lastName: "Perez",
    years: 30,
    direccion:{
        calle: "calle 123",
        ciudad: "Bogota",
        pais: "Colombia"
}
}


const {direccion:{calle}} = usuario;
const {direccion:{pais}} = usuario;

// console.log(`la calle es: ${calle} y el pais es: ${pais}`); // calle 123



const frutas = ["manzana", "pera", "uva", "fresa", "mango", "papaya"];

const [,,a,...b] = frutas;

console.log(b); // manzana
