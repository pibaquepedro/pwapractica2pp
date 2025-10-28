// Array con las imágenes
let imagenes = ["imagen1.jpeg", "imagen2.jpeg", "imagen3.jpeg","imagen4.jpeg", "imagen5.jpeg", "imagen6.jpeg","imagen7.jpeg", "imagen8.jpeg", "imagen9.jpeg","imagen10.jpeg"];
let indice = 0; // Indica la imagen actual

// Referencias a elementos HTML
let img = document.getElementById("imagen");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");

// Función para mostrar la imagen actual
function mostrarImagen() {
    img.src = imagenes[indice];
}

// Botón siguiente
btnNext.addEventListener("click", function() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0; // vuelve a la primera imagen
    }
    mostrarImagen();
});

// Botón anterior
btnPrev.addEventListener("click", function() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1; // va a la última imagen
    }
    mostrarImagen();
});
