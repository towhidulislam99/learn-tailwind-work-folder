document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById("nextBtn");
    const previousBtn = document.getElementById("previousBtn");
    const containContainer = document.getElementById("containContainer");
    const contentSpanElement = containContainer.querySelector("span");
    const contentH1Element = containContainer.querySelector("h1");
    const contentButtonElement = containContainer.querySelector("button");

    previousBtn.addEventListener('click', function() {
        contentSpanElement.innerText = "Slide Two Span Data Previous";
        contentH1Element.innerText = "This is Heading Here Previous";
        contentButtonElement.innerText = "Shop Now Previous";
        containContainer.style.backgroundImage = "url(images/bg-3.jpg)";
    });

    nextBtn.addEventListener('click', function() {
        contentSpanElement.innerText = "Slide Two Span Data Next";
        contentH1Element.innerText = "This is Heading Here Next";
        contentButtonElement.innerText = "Shop Now Next";
        containContainer.style.backgroundImage = "url(images/bg-2.jpg)";
    });
});


// const nextBtn = document.getElementById("nextBtn");
// const previousBtn = document.getElementById("previousBtn");
// const containContainer = document.getElementById("containContainer");
// const contentSpanElement = document.querySelector("#containContainer span");
// const contentH1Element = document.querySelector("#containContainer h1");
// const contentButtonElement = document.querySelector("#containContainer button"); 

// previousBtn.addEventListener('click', function() {
//     contentSpanElement.innerText = "Slide Two Span Data Previous";
//     contentH1Element.innerText = "This is Heading Here Previous";
//     contentButtonElement.innerText = "Shop Now Previous";
//     containContainer.style.backgroundImage = "url(images/bg-3.jpg)";
// });

// nextBtn.addEventListener('click', function() {
//     contentSpanElement.innerText = "Slide Two Span Data Next";
//     contentH1Element.innerText = "This is Heading Here Next";
//     contentButtonElement.innerText = "Shop Now Next";
//     containContainer.style.backgroundImage = "url(images/bg-2.jpg)";
// });


//Implement the Filtering Data Code Here Start

const sortButton = document.getElementById("sortButton");
const toggleContainer = document.getElementById("toggleContainer");
const menuItems = document.querySelectorAll("#toggleContainer a");

sortButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleContainer.hidden = !toggleContainer.hidden;
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    if (!toggleContainer.hidden && !toggleContainer.contains(event.target) && !sortButton.contains(event.target)) {
        toggleContainer.hidden = true;
    }
});

// Close the dropdown when selecting a menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleContainer.hidden = true;
    });
});


//Implement the Filtering Data Code Here Ends

