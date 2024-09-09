let btn_leer = document.querySelector(".btn")
let extra = document.querySelector(".extra")
let navbar = document.querySelector(".container-fluid")
let logoSin = document.querySelector(".logoSinFondo")
let btn_contacto = document.querySelector(".sendMessage-btn")
let input_form = document.querySelectorAll(".form-field input")
let textarea_form = document.querySelector(".form-field textarea")



window.addEventListener("scroll",()=>{
    navbar.classList.toggle("abajo",window.scrollY>0)
    logoSin.classList.toggle("achicar",window.scrollY>0)
    
})

btn_leer.addEventListener("click",()=>{
    if(btn_leer.textContent == "Leer más"){
        extra.style.display = "flex"
    btn_leer.textContent = "Leer menos"
    }
    else{
    extra.style.display = "none"
btn_leer.textContent = "Leer más"
}
});
