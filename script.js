let openIcon = document.querySelector(".icon-hamburger");
let closeIcon = document.querySelector(".icon-close");
let nav = document.querySelector("nav");
let navlogo = document.querySelector("nav .logo");

openIcon.addEventListener("click",()=>{
    nav.classList.add("open");
})

closeIcon.addEventListener("click",()=>{
    nav.classList.remove("open");
})