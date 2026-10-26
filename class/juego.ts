import { Jugador } from "./jugador"
import { Laberinto } from "./laberinto";
import { CargarMapa,type niveles } from './cargadorMapa';

// Gestor de los niveles.
const nivelesLaberinto: niveles[] = ["Primer laberinto", "Segundo laberinto", "Tercer laberinto", "Cuarto laberinto"];
const gestorNiveles: {nivel: niveles} = {
    nivel: "Primer laberinto"
}


let contadorNiveles = 0;


export async function iniciarJuego(jugador: Jugador, laberinto: Laberinto, cargadorMapa: CargarMapa) {

    //CARGA EL MAPA
    let mapa = await cargadorMapa.cargarMapa();
    //ASIGNA LA MATRIZ AL LABERINTO
    laberinto.setMapa(mapa!.mapa);
    //CONSTRUYE EL LABERINTO
    laberinto.construirMapa();
    //AGREGA EL PERSONAJE AL LABERINTO.
    laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
    //INICIA AL JUGADOR EN SU POSICIÓN EN EL LABERINTO.
    jugador.setPosicionInicial(mapa!.inicio.x, mapa!.inicio.y);
    //PERMITE MOVERSE AL JGUADOR.
    jugador.detectarTecla(detectarColision);

    async function detectarColision(intervalo: number) {
        let ubicacionJugador = jugador.getDivJugador().getBoundingClientRect(); // Obtiene la ubicación del jugador.

        const colisiona = laberinto.getParedLimites().some((pared) =>
            ubicacionJugador.left < pared.right
            && ubicacionJugador.right > pared.left
            && ubicacionJugador.top < pared.bottom
            && ubicacionJugador.bottom > pared.top
        );

        const llegaMeta = laberinto.getDivMeta().some((meta) =>
            ubicacionJugador.left < meta.right
            && ubicacionJugador.right > meta.left
            && ubicacionJugador.top < meta.bottom
            && ubicacionJugador.bottom > meta.top
        )

        if (colisiona) {
            clearInterval(intervalo);
            jugador.setPosicionInicial(mapa!.inicio.x, mapa!.inicio.y);
        }

        if (llegaMeta) {
            contadorNiveles++; //Sumas al llegar a la meta;
            gestorNiveles.nivel = nivelesLaberinto[contadorNiveles]!; //Cambia a la siguiente posición del array
            console.log("PASÓ")
            console.log(gestorNiveles.nivel);
            cargadorMapa.setNivelSeleccionado(gestorNiveles.nivel); // Buscas el nuevo mapa.
            mapa = await cargadorMapa.cargarMapa(); //Obtienes el nuevo mapa.
            laberinto.cambiarMapa(mapa!.mapa);
            jugador.setPosicionInicial(mapa!.inicio.x, mapa!.inicio.y);
            laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
        }




    }
}


