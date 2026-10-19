import { Jugador } from "./jugador.js";
import { Laberinto } from "./laberinto.js"



document.addEventListener("DOMContentLoaded", ()=> {

    const laberinto = new Laberinto();
    laberinto.construirNivel(laberinto.getPrimerNivel());


    const jugador = new Jugador(laberinto);
    jugador.detectarTecla();

}) 