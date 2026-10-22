export function iniciarJuego(jugador, limites, inicio) {
    console.log("ENTRA");
    let ubicacionJugador = jugador.getDivJugador().getBoundingClientRect();
    limites.forEach((pared) => {
        if (ubicacionJugador.left < pared.left
            && ubicacionJugador.right > pared.right
            && ubicacionJugador.bottom < pared.bottom
            && ubicacionJugador.top > pared.top) {
            jugador.setReseteoPosicion(inicio.x, inicio.y);
            console.log("ENTRO");
        }
    });
}
