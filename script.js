/////////// MENU TELEFONO//////////////////////////////////////////////////////////////////////////////////
let isMenuClosed = true;
const menuPhone = document.querySelector(".menu-icon");
const iconBurguer = document.querySelector(".open");
const iconCross = document.querySelector(".close");
const opciones = document.querySelector(".opciones");

menuPhone.addEventListener("click", abrirMenu = () => {
    console.log(isMenuClosed)
    if (isMenuClosed){
        iconCross.classList.remove("hidden");
        iconBurguer.classList.remove("appear");
        opciones.classList.remove("hidden");
        isMenuClosed = false;
    }else{
        iconCross.classList.add("hidden");
        iconBurguer.classList.add("appear");
        opciones.classList.add("hidden");
        isMenuClosed = true;
    }
})

///////////// EFECTOS DE ANIMACION//////////////////////////////////////////////////////////////////////////
const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

const fadeIn = () => {
    let fadeIns = document.querySelectorAll(".fadeIn");

    for(let i = 0; i < fadeIns.length; i++){

        let windowheight = window.innerHeight;
        let fadeIntop = fadeIns[i].getBoundingClientRect().top;
        let fadeInpoint = 150;

        if(fadeIntop < windowheight - fadeInpoint){
            fadeIns[i].classList.add("active");
        }
        else{
            fadeIns[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeIn);


/////////////////LINKS DE CONTACTO//////////////////////////////////////////////////////////////////////

let cambiar = false

const cambiarLink = (url) => {

    let cambiar = true

    if (cambiar == true){
        window.open(url)
    }
}

//////////////GITHUB//////////////////////////////////////////
const linkGithub = () => {

    let githubURL = document.querySelector("#github").getAttribute("href")

    cambiarLink(githubURL)

}
linkGithub()
//////////////LINKELIN//////////////////////////////////////////
const linkLinkelin = () => {

    let linkelinURL = document.querySelector("#linkelin").getAttribute("href")

    cambiarLink(linkelinURL)

}
linkLinkelin()
//////////////GMAIL//////////////////////////////////////////
const linkGmail = () => {

    let gmail = document.querySelector("#gmail").getAttribute("href")

    cambiarLink(gmail)

}
linkGmail()
