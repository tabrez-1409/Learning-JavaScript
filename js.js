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


// let form = document.querySelector("form");
// let Email = document.querySelector("#email");
// let Pass = document.querySelector("#password");
// let success = document.querySelector("#successMessage");

// let emailerror = document.querySelector("#emailError");
// let passerror = document.querySelector("#passwordError");

// form.addEventListener("submit", function(detls){
//     detls.preventDefault();

//     emailerror.textContent = " ";
//     passerror.textContent = " ";
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let email = emailRegex.test(Email.value);
//     let pass = passRegex.test(Pass.value);

//     let isValid = true;
//     if(!email){
//         emailerror.textContent = "Incorrect Email";
//         isValid = false;
//     }

//     if(!pass){
//         passerror.textContent = "Incorrect Password";
//         isValid = false;
//     }

//     if(isValid){
//         success.textContent = "Successfuly Submited";
//     }


// })

// let progress = document.querySelector("#progress");
// let percentage = document.querySelector("#percentage");
// let stat = document.querySelector("#status");
// let downloadMessage = document.querySelector("#downloadMessage");

// let count = 0;
// setInterval(
//     function(){
//     if (count<=99) {
//         count++;
//     }
//     progress.style.width = `${count}%`;
//     percentage.textContent = `${count}%`;
//     if (count === 100) {
//         stat.textContent = "Completed";
//         downloadMessage.textContent = "Download Your File"
//         alert("Download completed");
//     }

// }
// , 1000*10/100
// );



const users = [
    {
        name: "amisha rathore",
        bio: "silent chaos in a loud world 🌙 | not for everyone",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    },
    {
        name: "amita mehta",
        bio: "main character energy ✨ coffee + everything ☕",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    },
    {
        name: "isha oberoi",
        bio: "walking through dreams in doc martens 🖤 | late night thinker",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
    },
    {
        name: "ojin oklawa",
        bio: "too glam to give a damn ✨ | filter free soul",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
        name: "diya bansal",
        bio: "a little chaos, a lot of art 🎨 | just vibes",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
    },
    {
        name: "tanay rawat",
        bio: "good vibes, better stories 😎",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    },
    {
        name: "mohit chhabra",
        bio: "aesthetic overload ❤️ | living in lowercase",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    }
];

const cards = document.querySelector(".cards");
const searchInput = document.querySelector("input");

function showUsers(arr) {

    cards.innerHTML = "";

    arr.forEach(function(user) {

        // Card
        const card = document.createElement("div");
        card.className = "card";

        // Image
        const img = document.createElement("img");
        img.src = user.image;
        img.alt = user.name;
        img.className = "bg-img";

        // Blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage = `url("${user.image}")`;

        // Content
        const content = document.createElement("div");
        content.className = "content";

        // Heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Paragraph
        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        // Append elements
        content.append(heading, paragraph);
        card.append(img, blurredLayer, content);

        cards.appendChild(card);
    });
}

// Initial users
showUsers(users);

searchInput.addEventListener("input",function(){
    let newUser = users.filter(user=>{
        return user.name.startsWith(searchInput.value);
    })

    if (newUser.length>0) {
        showUsers(newUser);
    }else{
       cards.innerHTML = "";

        let p = document.createElement("p");
        p.textContent = "No Matches Found";
        p.style.color = "white";

        cards.appendChild(p);
    }

})

