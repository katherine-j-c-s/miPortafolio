/////////// MENU TELEFONO//////////////////////////////////////////////////////////////////////////////////
const menuPhone = document.querySelector(".menu-icon");
const iconBurguer = document.querySelector(".open");
const iconCross = document.querySelector(".close");
const opciones = document.querySelector(".opciones");

const abrirMenu = () => {
    iconCross.classList.toggle("hidden");
    iconBurguer.classList.toggle("appear");
    opciones.classList.toggle("hidden");
}

menuPhone.addEventListener("click", abrirMenu)

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

const abrirLink = (url) => window.open(url);
const handleLinkEvent = (event) => {
    const link = event.target.getAttribute("data-link");
    abrirLink(link)
}
const addLinksEvents = () => {

    const externalLinks = document.querySelectorAll(".externalLink");

    for (let linkIndex = 0; linkIndex < externalLinks.length; linkIndex++) {
        const linkElement = externalLinks[linkIndex];
        linkElement.addEventListener("click", handleLinkEvent)
    }
}

addLinksEvents()