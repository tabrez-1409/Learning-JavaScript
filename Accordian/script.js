
let accordionitemHTML = document.querySelector(".HTML .accordion-header");
let accordionitemCSS = document.querySelector(".CSS .accordion-header");
let accordionitemJavaScript = document.querySelector(".JavaScript .accordion-header");

let accordioncontenthtml = document.querySelector(".accordion-content.html");
let accordioncontentcss = document.querySelector(".accordion-content.css");
let accordioncontentJavaScript = document.querySelector(".accordion-content.JavaScript");

// Separate toggle variables
let toggleHTML = true;
let toggleCSS = true;
let toggleJavaScript = true;


// HTML Accordion
accordionitemHTML.addEventListener("click", function () {

    if (toggleHTML) {

        accordioncontenthtml.textContent =
            "HTML is used to create the structure of webpages.";

        accordionitemHTML.parentElement.classList.add("active");

        toggleHTML = false;

    } else {

        accordionitemHTML.parentElement.classList.remove("active");

        toggleHTML = true;
    }

});


// CSS Accordion
accordionitemCSS.addEventListener("click", function () {

    if (toggleCSS) {

        accordioncontentcss.textContent =
            "CSS is used to style and design webpages.";

        accordionitemCSS.parentElement.classList.add("active");

        toggleCSS = false;

    } else {

        accordionitemCSS.parentElement.classList.remove("active");

        toggleCSS = true;
    }

});


// JavaScript Accordion
accordionitemJavaScript.addEventListener("click", function () {

    if (toggleJavaScript) {

        accordioncontentJavaScript.textContent =
            "JavaScript is used to make webpages interactive.";

        accordionitemJavaScript.parentElement.classList.add("active");

        toggleJavaScript = false;

    } else {

        accordionitemJavaScript.parentElement.classList.remove("active");

        toggleJavaScript = true;
    }

});
