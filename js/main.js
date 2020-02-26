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




document.getElementById("button").addEventListener("click" , function(e) { 
   
    var erreur;
    var Nom = document.getElementById("Nom");
    var Email = document.getElementById("Email");
    var tel = document.getElementById("tel");
    var objet = document.getElementById("objet");

    if(!Nom.value){
        erreur = "veuillez renseigner un nom";
        document.getElementById("erreur1").innerHTML = erreur;
    }
    if(!Email.value){
        erreur = "veuillez renseigner un email";
        document.getElementById("erreur2").innerHTML = erreur;
    }
    if(!tel.value){
        erreur = "veuillez renseigner un tel";
        document.getElementById("erreur3").innerHTML = erreur;
    }
    if(!objet.value){
        erreur = "veuillez renseigner un objet";
        document.getElementById("erreur4").innerHTML = erreur;
    }
    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
      alert('Formulaire envoyé !');
    }
})