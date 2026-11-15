//let a = document.querySelectorAll("li");
//for (let i = 0; i < a.length; i++) {
//    console.log(a[i].textContent);
//}

// let a = document.querySelector("p");
// a.innerHTML = "<b>Khan</b> abc";
// console.log(a);

// let img = document.querySelector("img")
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1794287321419-09b339e2fcd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")

// let img = document.querySelector("img")
// img.getAttribute("src");
// console.log(img);

// let a = document.querySelector("a");
// a.href = "https://www.google.com/";
// console.log(a);

// let div = document.querySelector(".div").setAttribute("title","Khan")
// console.dir(div);

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "Khan";
// ul.appendChild(li);

// let div = document.querySelector(".div");
// let img = document.createElement("img");
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1794287321419-09b339e2fcd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
// div.prepend(img);

// let inp = document.querySelector("input");

// inp.addEventListener("input",function(data){
//     console.log(data.data);
// })

// let slc = document.querySelector("select");
// let h2 = document.querySelector("h2");
// slc.addEventListener("change",function(data){
//     h2.textContent= `${data.target.value} Selected`;
// });

// let h2 = document.querySelector("h2");

// window.addEventListener("keydown",function(data){

//     if(data.key === " "){
//         h2.textContent = "Spc";
//     }else{
//         h2.textContent = data.key;
//     }
// })

// let btn = document.querySelector(".btn");
// let inp = document.querySelector("input");
// btn.addEventListener("click",function(){
//     inp.click();
// })

// inp.addEventListener("change", function(data){
//     btn.textContent = data.target.files[0].name;
// })

let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit",function(detls){
    detls.preventDefault();

    inp.forEach((inp)=>{
        console.log(inp + " ");
    });
});
