//this is to change the background from the entire pants to its details
function mostrarDetalles() {
    const prenda = document.getElementById("prenda");
    var info = document.getElementById("production");
    const computedStyle = window.getComputedStyle(prenda);
    const currentImage = computedStyle.backgroundImage;

    if (currentImage.includes("jeans.png")) {
        prenda.style.backgroundImage = 'url("assets/jean-tag-nbk.png")';
        prenda.style.backgroundSize = "70%";
        //info.style.display = "block";
    } else if (currentImage.includes("assets/jean-tag-nbk.png")) {
        prenda.style.backgroundImage = 'url("assets/jeans.png")';
        prenda.style.backgroundSize = "contain"
        //info.style.display = "none";
    }
}
//function ocultarDetalles (){
    prenda.style.backgroundImage = 'url("assets/jeans.png")';
    //info.style.display = "none"//
//}

document.getElementById("prenda").addEventListener("mouseover", mostrarDetalles);
//document.getElementById("prenda").addEventListener("mouseout", ocultarDetalles);

//prenda.style.backgroundImage = 'url("assets/jean-star-remix.png")'
