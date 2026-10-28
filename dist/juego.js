/* OBTENER ELEMENTOS HTML */
const divContenedor = document.getElementById("contenedor");
const parrafoNiveles = document.getElementById("niveles");
const parrafoCronometro = document.getElementById("cronometro");
const sfx = document.getElementById("sfx");
const musica = document.getElementById("music");
const pantallaFinal = document.getElementById("pantalla-final");
// Gestor de los niveles.
const nivelesLaberinto = ["Primer laberinto", "Segundo laberinto", "Tercer laberinto", "Cuarto laberinto"];
const gestorNiveles = {
    nivel: "Primer laberinto"
};
let contadorNiveles = 0;
// INTERVALO DEL CRONOMETRO
let intervalo = 0;
export async function iniciarJuego(jugador, laberinto, cargadorMapa) {
    //EMPIEZA LA MÚSICA
    musicaFondo();
    //CARGA EL MAPA
    let mapa = await cargadorMapa.cargarMapa();
    //ASIGNA LA MATRIZ AL LABERINTO
    laberinto.setMapa(mapa.mapa);
    //CONSTRUYE EL LABERINTO
    laberinto.construirMapa();
    //AGREGA EL PERSONAJE AL LABERINTO.
    laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
    //INICIA AL JUGADOR EN SU POSICIÓN EN EL LABERINTO.
    jugador.setPosicionInicial(mapa.inicio.x, mapa.inicio.y);
    //PERMITE MOVERSE AL JGUADOR.
    jugador.detectarTecla(detectarColision);
    //EMPIEZA CRONOMETRO
    cronometro();
    async function detectarColision(intervalo) {
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
            colision();
            clearInterval(intervalo);
            jugador.setPosicionInicial(mapa.inicio.x, mapa.inicio.y);
            //ACTUALIZA EL PARRAFO DEL NIVEL
            cambiarParrafoNivel(mapa.nombre);
        }
        if (llegaMeta) {
            if (gestorNiveles.nivel !== "Cuarto laberinto") {
                meta();
                contadorNiveles++; //Sumas al llegar a la meta;
                gestorNiveles.nivel = nivelesLaberinto[contadorNiveles]; //Cambia a la siguiente posición del array
                cargadorMapa.setNivelSeleccionado(gestorNiveles.nivel); // Buscas el nuevo mapa.
                mapa = await cargadorMapa.cargarMapa(); //Obtienes el nuevo mapa.
                laberinto.cambiarMapa(mapa.mapa);
                jugador.setPosicionInicial(mapa.inicio.x, mapa.inicio.y);
                laberinto.getDivLaberinto().appendChild(jugador.getDivJugador());
            }
            else {
                clearInterval(intervalo);
                meta();
                finalizarJuego("Has escapado del laberinto", "./src/imagenes/puerta.png");
                laberinto.eliminarMapa();
            }
        }
    }
}
function cronometro() {
    /* INICIALIZAMOS LAS VARIABLES QUE UTILIZAREMOS */
    let tiempoInicial = 90;
    let minutos;
    let segundos;
    //Corre el intervalo.
    intervalo = setInterval(() => {
        tiempoInicial--;
        actualizarTiempo();
        if (tiempoInicial <= 0) {
            finalizarJuego("No has conseguido escapar del laberinto", "./src/imagenes/jason2.png");
        }
    }, 1000);
    function actualizarTiempo() {
        minutos = Math.floor(tiempoInicial / 60);
        segundos = tiempoInicial % 60;
        parrafoCronometro.textContent = `Tiempo restante: ${String(minutos).padStart(2, "0")}: ${String(segundos).padStart(2, "0")}`;
    }
}
function finalizarJuego(mensaje, url) {
    clearInterval(intervalo);
    detenerMusica();
    if (!pantallaFinal) {
        throw new Error('No se encontró el elemento con id "pantalla-final".');
    }
    const parrafoFinal = pantallaFinal.querySelector("p");
    if (!parrafoFinal) {
        throw new Error('No se encontró un párrafo dentro de "pantalla-final".');
    }
    const imagenFinal = pantallaFinal.querySelector(".imgPantallaFinal");
    imagenFinal.src = url;
    parrafoFinal.textContent = mensaje;
    pantallaFinal.classList.remove("oculta");
    pantallaFinal.classList.add("mostrar");
}
function musicaFondo() {
    musica.volume = 0.010;
    musica.play();
}
function detenerMusica() {
    musica.pause();
    musica.currentTime = 0;
}
function colision() {
    efectoDanio();
    sfx.src = "../src/sfx/sfx_colision.mp3";
    sfx.play();
}
function meta() {
    efectoVictoria();
    sfx.src = "../src/sfx/sfx_victory.mp3";
    sfx.play();
}
function jumpScare() {
    divContenedor.style.background = "url(../src/imagenes/juon.avif)";
    divContenedor.style.backgroundRepeat = "no-repeat";
    divContenedor.style.backgroundSize = "cover";
}
function cambiarParrafoNivel(parrafoNivel) {
    parrafoNiveles.textContent = parrafoNivel;
}
function efectoDanio() {
    divContenedor.style.background = "#390e0e";
    setTimeout(() => {
        divContenedor.style.background = "black";
    }, 200);
}
function efectoVictoria() {
    divContenedor.style.background = "#0e320d";
    setTimeout(() => {
        divContenedor.style.background = "black";
    }, 200);
}
