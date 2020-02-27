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




document.getElementById("form").addEventListener("submit" , function(e) { 
   
    // to store errors
    var erreurName = "";
    var erreurEmail = "";
    var erreurTelnum = "";
    var erreurObj = "";

    // element t check validaty;
    var Nom = document.getElementById("Nom");
    var Email = document.getElementById("Email");
    var tel = document.getElementById("tel");
    var objet = document.getElementById("objet");

    // where to display error
    var nameErr = document.getElementById("erreur1");
    var emailErr = document.getElementById("erreur2");
    var telErr = document.getElementById("erreur3");
    var objErr = document.getElementById("erreur4");


    // email form
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    // for digit
    let telRegex = /^[0-9]+$/;

    if(!Nom.value){
        erreurName = "Ce champ est obligatoire";
        Nom.classList.add("Erreur");
    }
    else if (Nom.value.length < 6 || Nom.value.length > 32) {
        erreurName = "faut être entre 6 et 32 caractére";
         Nom.classList.add("Erreur");
    }
    else {
        erreurName = "";
    }


    // for email;
    if(!Email.value){
        erreurEmail = "Ce champ est obligatoire";
         Email.classList.add("Erreur");
    }
    
    else if (!emailRegex.test(Email.value)) {
        erreurEmail = "exmple@email.com";
        Email.classList.add("Erreur");
    }
    else {
        erreurEmail = "";
    }


    // for telephone number validation
    // first two number of the telephone number;
    let firstTwo;

    if (tel.value.length > 2) {
        firstTwo = tel.value.slice(0, 2);
    }

    if(!tel.value){
        erreurTelnum = "Ce champ est obligatoire";
        tel.classList.add("Erreur");
    }
    else if (!telRegex.test(tel.value)) {
        erreurTelnum = "justement des chiffre";
        tel.classList.add("Erreur");
    }
    else if(tel.value.length !== 10) {
        erreurTelnum = "should contains 10 digit";
        tel.classList.add("Erreur");
    }
    
    else if (!((firstTwo == "06") || (firstTwo == "05") || (firstTwo = "07") )) {
        erreurTelnum = "phone should begin with 06 or 07 or 05";
        tel.classList.add("Erreur");
    }
    else {
        erreurTelnum = "";
    }

    // for object validation
    if(!objet.value){
        erreurObj = "Ce champ est obligatoire";
        objet.classList.add("Erreur");
    }
    else {
        erreurObj = "";
    }
    
    if (erreurName != "" || erreurEmail != "" || erreurTelnum != "" || erreurObj != "")
    {
        nameErr.textContent = erreurName;
        emailErr.textContent = erreurEmail;
        telErr.textContent = erreurTelnum;
        objErr.textContent = erreurObj;
        e.preventDefault();
    }
    else {
        alert("formulaire est envoyé");
    }
})
