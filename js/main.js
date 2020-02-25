

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

// document.getElementById("button").addEventListener("click",function () {
    
// })

  
//     var name =document.getElementById("name").value;
//     var télé =document.getElementById("télé").value;
//     var name =document.getElementById("objet").value;
//     var Email =document.getElementById("email").value;
//     var message =document.getElementById("message").value;
//     var error_message = document.getElementById("error_message");
//     var text;
     

// // error_message.style.padding ="10px";
// if (name.length <5){
//     text ="please entrer valid name";
//     error_message.innerHTML =text;
//     return false;
// }
// if (name.length <10){
//     text ="please entrer correct subjet";
//     error_message.innerHTML =text;
//     return false;
// }
// if (isNaN(phone) || phone.length !=10){
//     text ="please entrer valid phone Number";
//     error_message.innerHTML =text;
//     return false;
// }
// if (email.indexof("@") == -1|| email.length < 6){
//     text ="please entrer valid Email";
//     error_message.innerHTML =text;
//     return false;
// }
// if (message.length <= 140){
//     text ="please entrer More Than 140 characters ";
//     error_message.innerHTML =text;
//     return false;
// } 
// alert("form Submitted Successfully!")
// return true;



// }

 