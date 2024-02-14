let edad = 19;
let genero = "F";

//Condicionales comunes
// if (edad >= 18 && genero == "F") {
//     console.log("eres mujer mayor de edad");
// }
// else if(edad >= 18 && genero == "M"){
//     console.log("eres hombre mayor de edad");
// }
// else{
//     console.log("No cumples con las condiciones");
// }

// Condicnionales con operador ternario

let condiciones = (edad >= 18 && genero == "F") ? "eres mujer mayor de edad"
: "No cumples con las condiciones";


console.log(condiciones);