// Sticky Navbar

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    menuBtn.querySelector("i").classList.toggle("fa-bars");

    menuBtn.querySelector("i").classList.toggle("fa-xmark");

});


const courseButtons=document.querySelectorAll(".course-btn");
const courseContents=document.querySelectorAll(".course-content");

courseButtons.forEach(button=>{
button.addEventListener("click",()=>{

courseButtons.forEach(btn=>{
btn.classList.remove("active");
});

courseContents.forEach(content=>{
content.classList.remove("active");
});

button.classList.add("active");

document
.getElementById(button.dataset.target)
.classList.add("active");

});
});





const testimonialCards=document.querySelectorAll(".testimonial-card");
const nextBtn=document.querySelector(".testimonial-arrow.next");
const prevBtn=document.querySelector(".testimonial-arrow.prev");

let testimonialIndex=0;

function showTestimonial(index){

testimonialCards.forEach(card=>card.classList.remove("active"));

testimonialCards[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

testimonialIndex++;

if(testimonialIndex>=testimonialCards.length){

testimonialIndex=0;

}

showTestimonial(testimonialIndex);

});

prevBtn.addEventListener("click",()=>{

testimonialIndex--;

if(testimonialIndex<0){

testimonialIndex=testimonialCards.length-1;

}

showTestimonial(testimonialIndex);

});

setInterval(()=>{

testimonialIndex++;

if(testimonialIndex>=testimonialCards.length){

testimonialIndex=0;

}

showTestimonial(testimonialIndex);

},5000);


const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});



AOS.init({
duration:900,
once:false
});
  