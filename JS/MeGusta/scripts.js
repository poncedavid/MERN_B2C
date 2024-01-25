console.log("Estamos enlazado")

var likeCount =50;

var likeSpan = document.querySelector("#post");

function like(){
    likeCount++;
    likeSpan.innerHTML = likeCount + " likes(s)"

}
