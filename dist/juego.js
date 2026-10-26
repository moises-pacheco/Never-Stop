// Gestor de los niveles.
const niveles = ["Primer Laberinto", "Segundo Laberinto", "Tercer Laberinto"];
const gestorNiveles = {
    nivel: "Primer Laberinto"
};
let contadorNiveles = 0;
export async function iniciarJuego(jugador, laberinto, mapaLoader) {
    //CARGA EL MAPA
    const MAPA = await mapaLoader.cargarMapa();
    //ASIGNA LA MATRIZ AL LABERINTO
    laberinto.setMapa(MAPA.mapa);
    //CONSTRUYE EL LABERINTO
    laberinto.construirMapa();
    //AGREGA EL PERSONAJE AL LABERINTO.
    laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
    //INICIA AL JUGADOR EN SU POSICIÓN EN EL LABERINTO.
    jugador.setPosicionInicial(MAPA.inicio.x, MAPA.inicio.y);
    //PERMITE MOVERSE AL JGUADOR.
    jugador.detectarTecla(detectarColision);
    function detectarColision(intervalo) {
        let ubicacionJugador = jugador.getDivJugador().getBoundingClientRect(); // Obtiene la ubicación del jugador.
        const colisiona = laberinto.getParedLimites().some((pared) => ubicacionJugador.left < pared.right
            && ubicacionJugador.right > pared.left
            && ubicacionJugador.top < pared.bottom
            && ubicacionJugador.bottom > pared.top);
        const llegaMeta = laberinto.getDivMeta().some((meta) => ubicacionJugador.left < meta.right
            && ubicacionJugador.right > meta.left
            && ubicacionJugador.top < meta.bottom
            && ubicacionJugador.bottom > meta.top);
        if (colisiona) {
            clearInterval(intervalo);
            jugador.setPosicionInicial(MAPA.inicio.x, MAPA.inicio.y);
        }
        if (llegaMeta) {
        }
    }
}
