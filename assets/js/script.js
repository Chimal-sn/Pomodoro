const botonplay = document.getElementById('boton_play');
const botonpausa = document.getElementById('boton_pausa');
const audio = document.getElementById('audio_musica');

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