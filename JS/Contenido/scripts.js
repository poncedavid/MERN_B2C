console.log("Tienes enlazado tu js");
console.log("mensaje dossss")


function contador(startNum) {    //La función está esperando algún PARÁMETRO para ejecutarse
    for (var num = startNum ; num >= 0 ; num--) {        
        console.log(num);    
    }
}

contador(5);


function saludo(){
    console.log("Hola mundo desde JS");
}


saludo();


function saludoBtn(){
    alert("Hola mundo desde JS");
    console.log("Este un evento de click")
}

function over(element) {
    element.style.backgroundColor = "lime";    
}

function out(element) {
    element.style.backgroundColor = "red";   
}

var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog0.jpeg";  
}