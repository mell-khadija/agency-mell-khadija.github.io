const menu = document.querySelector(".menu-btn");
const body = document.querySelector("body");
const links = document.querySelector("#links");

body.addEventListener("click", () => {
        if (!links.classList.contains("show-menu")) {
            links.classList.add("show-menu");
        } else {
            links.classList.remove("show-menu");
        }
    })
    ///////////////////////////:
document.getElementById("inscription").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
});
// document.getElementById("inscription").addEventListener("submit", function(e) {
//     var erreur;
//     var firstname = document.getElementById("first name")
//     var lastname = document.getElementById("last name")
//     var email = document.getElementById("email")

//     if (!mdp.value) {
//         erreur = "Veuillez renseigner un last name";
//     }
//     if (!email.value) {
//         erreur = "Veuillez renseigner un email";
//     }
//     if (!pseudo.value) {
//         erreur = "Veuillez renseigner un first name";
//     }
// });