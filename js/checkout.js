// Formulario 

const inputName = document.querySelector("#inputName");
const inputPhone = document.querySelector("#inputPhone");
const inputEmail = document.querySelector("#inputEmail");
const btnSubmit = document.querySelector("#submit");

let inputData = "";

// Submit

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    alert("Formulario enviado.");
    const data = (e);
    console.log(data);
    

})

// Focus y Blur 
inputName.addEventListener("focus", (e)=> {
    //console.log("has hecho foco en el campo NOMBRE")
    e.target.style.background = "yellow";
})

inputName.addEventListener("blur", (e)=> {
    //console.warn("el campo NOMBRE ha perdido el foco")
    e.target.style.background = "";
})