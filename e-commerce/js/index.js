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



//Implement the Filtering Data Code Here Start
document.querySelectorAll('button[aria-controls^="filter-section-mobile-"]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('aria-controls');
        const section = document.getElementById(sectionId);

        // Toggle the aria-expanded attribute
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);

        // Toggle the visibility of the section
        section.classList.toggle('hidden');

        // Optionally, toggle icons if needed (plus/minus)
        const [expandIcon, collapseIcon] = button.querySelectorAll('svg');
        expandIcon.classList.toggle('hidden', !isExpanded);
        collapseIcon.classList.toggle('hidden', isExpanded);
    });
});


//Implement the Filtering Data Code Here Ends