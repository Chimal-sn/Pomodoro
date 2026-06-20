export default class Cancion {
    constructor(nombre, artista, ruta) {
        this.nombre = nombre;
        this.artista = artista;
        this.ruta = `assets/audio/${ruta}`;
    }
}