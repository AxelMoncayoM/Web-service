const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".nav");

const images = document.querySelectorAll(".img-gallery");
const imagesLight = document.querySelector(".image-add");
const lightContainer = document.querySelector(".image-light");



hamburguer.addEventListener('click',() =>{
    menu.classList.toggle("spread");
});


images.forEach(image =>{
    image.addEventListener("click", () =>{
        addImage(image.getAttribute('src'));
    })
})

lightContainer.addEventListener("click", (e) =>{
    if(e.target !== imagesLight){
        lightContainer.classList.toggle("show");
        imagesLight.classList.toggle("show-image");
        hamburguer.style.opacity = "1";
    
    }
})

const addImage = (image) => {
    imagesLight.src = image;
    lightContainer.classList.toggle("show");
    imagesLight.classList.toggle("show-image");
    hamburguer.style.opacity = "0";

}
