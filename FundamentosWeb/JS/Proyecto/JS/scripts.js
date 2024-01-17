// console.log("Estas enlazado con JS")
// console.log("Estas enlazado con JS")

// // Variables

// var numeroEntero = 100;

// var numeroDecimal = 10.5;

// // Sting
// var nombre = "Juan";

// // Boolean

// var verdadero = true;
// var falso = false;

// var count = 5;
// count = "Ahora soy una cadena"
// count = true;

// var numeroUno = 25

// var numeroDos = 45

// var resultado = numeroUno / numeroDos;

// console.log("La división es:" , resultado)

// var total = 10;

// total += 100;

// console.log(total);

// Funciones

function x() {
  console.log("Hola Mundo");
}

function contador() {
  for (var num = 0; num <= 10; num++) {
    console.log(num);
  }
}

function contador(NumeroInicio) {
  //La función está esperando algún PARÁMETRO para ejecutarse
  for (var num = NumeroInicio; num >= 50; num--) {
    console.log(num);
  }
}

function crearArreglo(num) {

  var nuevoArreglo = [];

  for (var i = 0; i <= num; i++) {

    nuevoArreglo.push(i);
  }
  return nuevoArreglo; // añadió la declaración return
}
var y = crearArreglo(5); // ahora y es la variable que llama a crearArreglo


//Arreglos

var ArregloVacio = [];

var ArregloConDatos = [1, 2, "David", 4, 5,true, false, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(ArregloConDatos);

//Metodos de Arreglos

//Push
ArregloConDatos.push(1000)
ArregloConDatos.push("desdeUnPush")
ArregloConDatos.push(false)

console.log(ArregloConDatos);

//Pop
ArregloConDatos.pop();
ArregloConDatos.pop();


console.log(ArregloConDatos);

ArregloConDatos.shift();
ArregloConDatos.shift();
ArregloConDatos.shift();

console.log(ArregloConDatos);


function ejemplo(elemento) {

    alert("Hola desde la función ejemplo")
}