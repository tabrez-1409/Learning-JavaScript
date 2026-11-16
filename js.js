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

// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");
// let main = document.querySelector(".main")

// form.addEventListener("submit", function (detls) {
//     detls.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");
//     let img = document.createElement("img");
//     img.setAttribute("src", inp[4].value);

//     let nameP = document.createElement("p");
//     nameP.textContent = inp[0].value;

//     let classP = document.createElement("p");
//     classP.textContent = inp[1].value;

//     let rollP = document.createElement("p");
//     rollP.textContent = inp[2].value;

//     let subjectP = document.createElement("p");
//     subjectP.textContent = inp[3].value;

//     card.appendChild(img);
//     card.appendChild(nameP);
//     card.appendChild(classP);
//     card.appendChild(rollP);
//     card.appendChild(subjectP);
//     main.appendChild(card);

//     inp.forEach((inp)=>{
//         if(inp.type !== "submit"){
//             inp.value = " ";
//         }
//     })
// });

// let cl = document.querySelector(".color");

// cl.addEventListener("mouseover", function () {
//     cl.style.backgroundColor = "Yellow"  
// });

// cl.addEventListener("mouseout", function () {
//     cl.style.backgroundColor = "red"  
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", (detls)=>{
//     detls.target.style.textDecoration = "line-through";
// });

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function(){
//     let left = span.textContent = 20-inp.value.length;

//     if(left < 0){
//         span.style.color = "red";
//     }else{
//         span.style.color = "black";
//     }

// });