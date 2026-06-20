import Cancion from "./cancion.js";

const listaCanciones = [
    new Cancion("Honey Jam", "Massobeats", "cancion1.mp3"),
    new Cancion("Anxiety", "Rama Low", "cancion2.mp3"),

];

let cancionActual = 0;

const botonplay = document.getElementById('boton_play');
const botonpausa = document.getElementById('boton_pausa');
const boton_siguiente = document.getElementById('boton_siguiente')
const audio = document.getElementById('audio_musica');

botonplay.addEventListener('click', () => {
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
    botonplay.style.display = 'none';
    botonpausa.style.display = 'block';
})

botonpausa.addEventListener('click', () => {
    audio.pause();
    botonplay.style.display = 'block';
    botonpausa.style.display = 'none';
})

audio.addEventListener('ended', () => {
    botonplay.style.display = 'block';
    botonpausa.style.display = 'none';
})

boton_siguiente.addEventListener('click', () => {
    cancionActual++;
    if (cancionActual >= listaCanciones.length) {
        cancionActual = 0;
    }
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
})
