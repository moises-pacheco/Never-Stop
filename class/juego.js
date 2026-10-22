import { Jugador } from "./jugador.js";
import { Laberinto } from "./laberinto.js";
document.addEventListener("DOMContentLoaded", () => {
    const jugador = new Jugador();
    jugador.detectarTecla();
    const laberinto = new Laberinto(jugador);
    console.log(laberinto.getMapas().then((data) => {
        data[0];
    }));
});
