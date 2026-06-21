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
let videoActivo = 1; // 1 = video 1, 2 = video 2
const botonplay = document.getElementById('boton_play');
const botonpausa = document.getElementById('boton_pausa');
const boton_siguiente = document.getElementById('boton_siguiente');
const boton_atras = document.getElementById('boton_atras');
const audio = document.getElementById('audio_musica');
const nombreCancion = document.getElementById('nombre_cancion');
const artistaCancion = document.getElementById('artista_cancion');
const cambiarVideo = document.getElementById('cambiar_video');
const videoCalidadPrimero = document.getElementById('video_calidad_primero');
const videoCalidadSegundo = document.getElementById('video_calidad_segundo');
const videoFondoPrimero = document.getElementById('video_fondo_primero');
const videoFondoSegundo = document.getElementById('video_fondo_segundo');

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
    botonplay.style.display = 'none';
    botonpausa.style.display = 'block';
    cancionActual++;
    if (cancionActual >= listaCanciones.length) {
        cancionActual = 0;
    }
    audio.src = listaCanciones[cancionActual].ruta;
    audio.play();
    agregarDetallesCancion();
})

boton_atras.addEventListener('click', () => {
    botonplay.style.display = 'none';
    botonpausa.style.display = 'block';
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

function cargarVideo() {
    videoCalidadSegundo.src = listaFondos[videoActual + 1];
    videoFondoSegundo.src = listaFondos[videoActual + 1];
}
agregarDetallesCancion();
cargarVideo();

let enTransicion = false;

cambiarVideo.addEventListener('click', () => {
    if (enTransicion) return;
    enTransicion = true;

    videoActual++;
    if (videoActual >= listaFondos.length) {
        videoActual = 0;
    }

    let fondoActivo, calidadActivo, fondoSiguiente, calidadSiguiente;

    if (videoActivo == 1) {
        fondoActivo = videoFondoPrimero;
        calidadActivo = videoCalidadPrimero;
        fondoSiguiente = videoFondoSegundo;
        calidadSiguiente = videoCalidadSegundo;
        videoActivo = 2;
    } else {
        fondoActivo = videoFondoSegundo;
        calidadActivo = videoCalidadSegundo;
        fondoSiguiente = videoFondoPrimero;
        calidadSiguiente = videoCalidadPrimero;
        videoActivo = 1;
    }

    fondoSiguiente.src = listaFondos[videoActual];
    calidadSiguiente.src = listaFondos[videoActual];
    fondoSiguiente.style.zIndex = "1";
    calidadSiguiente.style.zIndex = "1";

    fondoActivo.style.zIndex = "2";
    calidadActivo.style.zIndex = "2";

    fondoActivo.style.transform = "translateX(100%)";
    calidadActivo.style.transform = "translateX(100%)";

    setTimeout(() => {
        function reiniciarSinAnimacion(elemento) {
            elemento.style.transition = "none";
            elemento.style.transform = "translateX(0)";
            elemento.style.zIndex = "0";
            void elemento.offsetHeight;
            elemento.style.transition = "";
        }

        reiniciarSinAnimacion(fondoActivo);
        reiniciarSinAnimacion(calidadActivo);

        enTransicion = false;
    }, 800);
})