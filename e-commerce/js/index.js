const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const containContainer = document.getElementById("containContainer");
const contentSpanElement = document.querySelector("#containContainer span");
const contentH1Element = document.querySelector("#containContainer h1");;
const contentButtonElement = document.querySelector("#containContainer Button");;

nextBtn.addEventListener('click', function(){
    contentSpanElement.innerText = "Slide Two Span Data Next";
    contentH1Element.innerText ="This is Headding Here Next";
    contentButtonElement.innerText ="Shop Now Next";
    containContainer.style.backgroundImage = "url(images/bg-2.jpg)";
});

previousBtn.addEventListener('click', function(){
    contentSpanElement.innerText = "Slide Two Span Data Previous";
    contentH1Element.innerText ="This is Headding Here Previous";
    contentButtonElement.innerText ="Shop Now Previous";
    containContainer.style.backgroundImage = "url(images/bg-3.jpg)";
});
console.log(nextBtn)