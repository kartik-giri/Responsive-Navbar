const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const cross = document.querySelector(".cross");
const navlink =document.querySelectorAll(".nav-link")
hamburger.addEventListener("click", () =>{
    navMenu.classList.add("active");
})
cross.addEventListener("click", () =>{
    navMenu.classList.remove("active");
})

navlink.forEach(n=> n.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
}))
