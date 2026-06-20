import Cancion from "./cancion.js";

const listaCanciones = [
    new Cancion("Honey Jam", "Massobeats", "cancion1.mp3"),
    new Cancion("Anxiety", "Rama Low", "cancion2.mp3"),

];

const listaFondos = [
    "assets/video/fondo_ciudad.mp4",
    "assets/video/fondo_edificios.mp4",
];

let cancionActual = 0;
let videoActual = 0;
const botonplay = document.getElementById('boton_play');
const botonpausa = document.getElementById('boton_pausa');
const boton_siguiente = document.getElementById('boton_siguiente');
const boton_atras = document.getElementById('boton_atras');
const audio = document.getElementById('audio_musica');
const nombreCancion = document.getElementById('nombre_cancion');
const artistaCancion = document.getElementById('artista_cancion');
const cambiarVideo = document.getElementById('cambiar_video');
const videoCalidad = document.getElementById('video_calidad');
const videoFondo = document.getElementById('video_fondo');

botonplay.addEventListener('click', () => {
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
    cancionActual++;
    if (cancionActual >= listaCanciones.length) {
        cancionActual = 0;
    }
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
    agregarDetallesCancion();
})

boton_siguiente.addEventListener('click', () => {
    cancionActual++;
    if (cancionActual >= listaCanciones.length) {
        cancionActual = 0;
    }
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
    agregarDetallesCancion();
})

boton_atras.addEventListener('click', () => {
    cancionActual--;
    if (cancionActual < 0) {
        cancionActual = listaCanciones.length - 1;
    }
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
    agregarDetallesCancion();
})

function agregarDetallesCancion() {
    nombreCancion.textContent = `${listaCanciones[cancionActual].nombre} - `;
    artistaCancion.textContent = `${listaCanciones[cancionActual].artista}`;
}

agregarDetallesCancion();

cambiarVideo.addEventListener('click', () => {
    videoActual++;
    if (videoActual >= listaFondos.length) {
        videoActual = 0;
    }
    videoCalidad.src = listaFondos[videoActual];
    videoFondo.src = listaFondos[videoActual];
})