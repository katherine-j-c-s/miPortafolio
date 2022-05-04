let menuOpen = false;
const menuBurguer = document.querySelector("class.open");
const menuCross = document.querySelector("class.close");
const menuOptions = document.querySelector("ul.menu-options");

const mostrarMenu = () => {
    menuOpen = !menuOpen;

    if(menuOpen) {

        menuCross.classList.remove("hidden");
        menuBurguer.classList.add("hidden");
        menuOptions.classList.remove("hidden");

    } else {

        menuCross.classList.add("hidden");
        menuBurguer.classList.remove("hidden");
        menuOptions.classList.add("hidden");
    }
}
window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeIn);

function fadeIn(){
    var fadeIns = document.querySelectorAll(".fadeIn");

    for(var i = 0; i < fadeIns.length; i++){

        var windowheight = window.innerHeight;
        var fadeIntop = fadeIns[i].getBoundingClientRect().top;
        var fadeInpoint = 150;

        if(fadeIntop < windowheight - fadeInpoint){
            fadeIns[i].classList.add("active");
        }
        else{
            fadeIns[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeInScroll);

function fadeInScroll(){
    var fadeInScrolls = document.querySelectorAll(".fade-in-scroll");

    for(var i = 0; i < fadeInScrolls.length; i++){

        var windowheight = window.innerHeight;
        var fadeInScrolltop = fadeInScrolls[i].getBoundingClientRect().top;
        var fadeInScrollpoint = 150;

        if(fadeInScrolltop < windowheight - fadeInScrollpoint){
            fadeInScrolls[i].classList.add("active");
        }
        else{
            fadeInScrolls[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", halfFlip);

function halfFlip(){
    var halfFlips = document.querySelectorAll(".half-flip");

    for(var i = 0; i < halfFlips.length; i++){

        var windowheight = window.innerHeight;
        var halfFliptop = halfFlips[i].getBoundingClientRect().top;
        var halfFlippoint = 150;

        if(halfFliptop < windowheight - halfFlippoint){
            halfFlips[i].classList.add("active");
        }
        else{
            halfFlips[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", learnMore);

function learnMore(){
    var learnMores = document.querySelectorAll(".learn-more");

    for(var i = 0; i < learnMores.length; i++){

        var windowheight = window.innerHeight;
        var learnMoretop = learnMores[i].getBoundingClientRect().top;
        var learnMorepoint = 150;

        if(learnMoretop < windowheight - learnMorepoint){
            learnMores[i].classList.add("active");
        }
        else{
            learnMores[i].classList.remove("active");
        }
    }
}
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
  };
  
  const texts = [
    "efficiently",
    "creatives",
    "uniques",
    "innovatively"
  ];
  
  const morphTime = 1;
  const cooldownTime = 0.25;
  
  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;
  
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  
  function doMorph() {
    morph -= cooldown;
    cooldown = 0;
    
    let fraction = morph / morphTime;
    
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
    
    setMorph(fraction);
  }
  
  function setMorph(fraction) {
    
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }
  
  function doCooldown() {
    morph = 0;
    
    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";
    
    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
  }
  
  function animate() {
    requestAnimationFrame(animate);
    
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;
    
    cooldown -= dt;
    
    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }
      
      doMorph();
    } else {
      doCooldown();
    }
  }
  