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
   
    var erreur = "";
    var Nom = document.getElementById("Nom");
    var Email = document.getElementById("Email");
    var tel = document.getElementById("tel");
    var objet = document.getElementById("objet");

    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let telRegex = /^[0-9]+$/;

    if(!Nom.value){
        erreur = "Ce champ est obligatoire";
        document.getElementById("erreur1").textContent = erreur;
    }
    else if (Nom.value.length < 6 || Nom.value.length > 32) {
        erreur = "faut être entre 6 et 32 caractére";
        document.getElementById("erreur1").textContent = erreur;       
    }
    if(!Email.value){
        erreur = "Ce champ est obligatoire";
        document.getElementById("erreur2").textContent = erreur;
    }
    
    else if (!emailRegex.test(Email.value)) {
        erreur = "exmple@email.com";
        document.getElementById("erreur2").textContent = erreur;
    }

    // first two number of the telephone number;
    let firstTwo;

    if (tel.value.length > 2) {
        firstTwo = tel.value.slice(0, 2);
    }
    if(!tel.value){
        erreur = "Ce champ est obligatoire";
        document.getElementById("erreur3").textContent = erreur;
    }
    else if (!telRegex.test(tel.value)) {
        erreur = "justement des chiffre";
        document.getElementById("erreur3").textContent = erreur;       
    }
    else if(tel.value.length !== 10) {
        erreur = "should contains 10 digit";
        document.getElementById("erreur3").textContent = erreur; 
    }
    
    else if (!((firstTwo == "06") || (firstTwo == "05") || (firstTwo = "07") )) {
            erreur = "phone should begin with 06 or 07 or 05";
            document.getElementById("erreur3").textContent = erreur;
    }
    else {
        erreur = "";
        document.getElementById("erreur3").textContent = erreur;     
    }
    if(!objet.value){
        erreur = "Ce champ est obligatoire";
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