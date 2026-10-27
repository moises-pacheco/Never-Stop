import { CargarMapa } from "./cargadorMapa.js";
import { iniciarJuego, susto } from "./juego.js";
import { Jugador } from "./jugador.js";
import { Laberinto } from './laberinto.js';

const contenedor = document.getElementById("contenedor");

document.addEventListener("DOMContentLoaded", async () => {
        const cargadorMapa = new CargarMapa(); //Inicializa el loader
        const laberinto = new Laberinto(); //Crea el alberinto
        const jugador = new Jugador(); // Crea al jugador
        iniciarJuego(jugador, laberinto, cargadorMapa); // Iniciar juego
})


