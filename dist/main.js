import { CargarMapa } from "./cargadorMapa.js";
import { iniciarJuego } from "./juego.js";
import { Jugador } from "./jugador.js";
import { Laberinto } from './laberinto.js';
document.addEventListener("DOMContentLoaded", async () => {
    const cargadorMapa = new CargarMapa("../src/laberintos/laberintos.json");
    const mapa = await cargadorMapa.cargarMapa();
    const laberinto = new Laberinto(mapa.mapa);
    const jugador = new Jugador(mapa.inicio.x, mapa.inicio.y);
    laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
    laberinto.construirMapa();
    laberinto.getParedLimites();
    jugador.detectarTecla();
    jugador.getUbicacion();
    iniciarJuego(jugador, laberinto.getParedLimites(), mapa.inicio);
});
