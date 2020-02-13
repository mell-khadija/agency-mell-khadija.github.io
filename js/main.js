
let links = document.getElementById("links");
let men = document.getElementById("menu");


function toggleMenu() {
    if (links.classList.contains("show")){
        links.classList.remove("show");
        menubar.addList.remove("hideMenu")
    }
    else {
        links.classList.add("show");
    }
}