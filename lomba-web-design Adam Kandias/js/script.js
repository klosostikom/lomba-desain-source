const navbar = document.getElementsByClassName("navbar")[0]
const signinButton = document.getElementsByTagName("button")[2]

// Navbar
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 1) {
        navbar.classList.replace("bg-transparent", "nav-color")
        signinButton.classList.replace("btn-primary", "btn-info")
    }else if(window.scrollY <= 1){
        navbar.classList.replace("nav-color", "bg-transparent")
        signinButton.classList.replace("btn-info", "btn-primary")
    }
})