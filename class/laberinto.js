export class Laberinto {
    /*  REQUISITOS DEL LABERINTO  */
    jugador;
    divlaberinto;
    mapasLaberinto = [];
    /* PROPIEDADES DEL LABERINTO*/
    tamanoCelda = 25;
    constructor(jugador) {
        this.jugador = jugador;
        this.divlaberinto = document.getElementById("laberinto");
        this.divlaberinto.appendChild(jugador.getDivJugador()); // Mete al jugador en el laberinto
    }
    //Aquí cargo todos los mapas.
    async cargarMapas() {
        let respuesta = await fetch("../src/laberintos/laberintos.json");
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar los mapas");
        }
        const datosNivelesLaberintos = await respuesta.json();
        //Guardo en una variable, todos los mapas.
        this.mapasLaberinto = datosNivelesLaberintos.laberintos.map((m) => m.mapa);
    }
    construirMapa(mapa) {
        //Adapta las dimensiones del nivel a la pantalla.
        this.ajustarTamanioMapa(mapa);
        mapa.forEach((fila, indiceFila) => {
            fila.forEach((celda, indiceColumna) => {
                if (celda === "#") {
                    let pared = document.createElement("div"); //Por cada # crea un div para simular la pared del laberinto.
                    pared.classList.add("pared"); // Le da los estilos a la pared del laberinto.
                    //Formula matemática que según su fila y columna en la matriz, lo adapta a la pantalla. 
                    pared.style.left = indiceColumna * this.tamanoCelda + "px";
                    pared.style.top = indiceFila * this.tamanoCelda + "px";
                    pared.style.width = this.tamanoCelda + "px";
                    pared.style.height = this.tamanoCelda + "px";
                    this.divlaberinto.appendChild(pared); // Agrego al HTML cada div creado en cada #.
                }
            });
        });
    }
    ajustarTamanioMapa(mapa) {
        this.divlaberinto.style.width = mapa[0].length * this.tamanoCelda + "px";
        this.divlaberinto.style.height = mapa.length * this.tamanoCelda + "px";
    }
    async test() {
        await this.cargarMapas();
        console.log(this.mapasLaberinto);
    }
    async getMapas() {
        await this.cargarMapas();
        return this.mapasLaberinto;
    }
}
