// document.querySelector(".menu-btn").addEventListener('click', () =>{
//     document.querySelector("#links").classList.toggle("show-menu");
// });


const menu = document.querySelector(".menu-btn");
const body = document.querySelector("body");
const links = document.querySelector("#links");

body.addEventListener("click", () =>{
    if(!links.classList.contains("show-menu")) {
        links.classList.add("show-menu");
    }
    else {
        links.classList.remove("show-menu");
    }
})


function valider() {
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var objet = document.getElementById("objet");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var val = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if (nom.value == "") {
        nom.classList.add("erreur");
        span1.textContent = "*Name is Required!";
    }else{
        nom.classList.remove("erreur");
        nom.classList.add("valide");
        span1.textContent = "";
    }

    if (email.value == "") {
        email.classList.add("erreur");
        span2.textContent = "*email is Required!";
    } else {
        if (!val.test(email.value)) {
            email.classList.add("erreur");
            span2.textContent = "*Forme email pas Valider !";
            }else{
                email.classList.remove("erreur");
                email.classList.add("valide");
                span2.textContent = "";
            }
    }
        if (objet.value == "") {
            objet.classList.add("erreur");
            span3.textContent = "*objet is Required !";
        }else{
        objet.classList.remove("erreur");
        objet.classList.add("valide");
        span3.textContent = "";
        }
        
    }
    

