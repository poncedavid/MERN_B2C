// console.log("Estamos enlazado")

// var likeCount1 = 9;
// var likeSpan1 = document.querySelector("#post-1");

// function like(){
//     likeCount1++;
//     likeSpan1.innerHTML = likeCount1 + " likes(s)"

// }


// var likeCount2 = 12;
// var likeSpan2 = document.querySelector("#post-2");

// function like2(){
//     likeCount2++;
//     likeSpan2.innerHTML = likeCount2 + " likes(s)"
// }

// var likeCount3 = 9;
// var likeSpan3 = document.querySelector("#post-3");

// function like3(){
//     likeCount3++;
//     likeSpan3.innerHTML = likeCount3 + " likes(s)"
// }



// 0..1..2
var likes = [9,12,0]

var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
]

function like(id){

    likes[id]++;
    spans[id].innerHTML = likes[id] + " likes(s)";
}