// document.querySelector(".menu-btn").addEventListener('click', () =>{
//     document.querySelector("#links").classList.toggle("show-menu");
// });


const menu = document.querySelector(".menu-btn");
const links = document.querySelector("#links");

menu.addEventListener("click", () =>{
    if(!links.classList.contains("show-menu")) {
        links.classList.add("show-menu");
    }
    else {
        links.classList.remove("show-menu");
    }
})


document.getElementById("button").addEventListener("click" , function(e) { 
   
    var erreur = '';
    var Nom = document.getElementById("Nom");
    var Email = document.getElementById("Email");
    var tel = document.getElementById("tel");
    var objet = document.getElementById("objet");

    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let telRegex = /^[0-9]+$/;

    if(!Nom.value){
        erreur = "veuillez renseigner un nom";
        document.getElementById("erreur1").textContent = erreur;
    }
    else if (Nom.value.length < 6 || Nom.value.length > 32) {
        erreur = "faut être between 6 et 32 character";
        document.getElementById("erreur1").textContent = erreur;       
    }
    if(!Email.value){
        erreur = "veuillez renseigner un email";
        document.getElementById("erreur2").textContent = erreur;
    }
    else if (!emailRegex.test(Email.value)) {
        erreur = "email format pas correct";
        document.getElementById("erreur2").textContent = erreur;
    }

    if(!tel.value){
        erreur = "veuillez renseigner un tel";
        document.getElementById("erreur3").textContent = erreur;
    }
    else if (!telRegex.test(tel.value)) {
        erreur = "the telephone number must include only number";
        document.getElementById("erreur3").textContent = erreur;       
    }
    if(!objet.value){
        erreur = "veuillez renseigner un objet";
        document.getElementById("erreur4").textContent = erreur;
    }
    if (erreur != "")
    {
        e.preventDefault();
    }
    else {
        alert('Formulaire envoyé !');
    }
})