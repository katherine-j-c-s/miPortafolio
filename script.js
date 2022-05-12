let cambiar = false
linkGithub = () => {

    cambiar = true

    let githubURL = document.querySelector("#github").getAttribute("href")

    if (cambiar == true){
        window.open(githubURL)
    }
}
linkGithub()
linkLinkelin = () => {

    cambiar = true

    let githubURL = document.querySelector("#linkelin").getAttribute("href")

    if (cambiar == true){
        window.open(githubURL)
    }
}
linkLinkelin()
linkGmail = () => {

    cambiar = true

    let githubURL = document.querySelector("#gmail").getAttribute("href")

    if (cambiar == true){
        window.open(githubURL)
    }
}
linkGmail()