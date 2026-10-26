export class Laberinto {
    /*  REQUISITOS DEL LABERINTO  */
    divLaberinto;
    limitePared;
    divMeta;
    mapa;
    /* PROPIEDADES DEL LABERINTO*/
    tamanoCelda = 25;
    constructor() {
        this.divMeta = [];
        this.limitePared = [];
        this.divLaberinto = document.getElementById("laberinto");
        this.mapa = [];
    }
    construirMapa() {
        //Adapta las dimensiones del nivel a la pantalla.
        this.ajustarTamanioMapa(this.mapa);
        this.mapa.forEach((fila, indiceFila) => {
            fila.forEach((celda, indiceColumna) => {
                if (celda === "#") {
                    let pared = document.createElement("div"); //Por cada # crea un div para simular la pared del laberinto.
                    pared.classList.add("pared"); // Le da los estilos a la pared del laberinto.
                    //Formula matemática que según su fila y columna en la matriz, lo adapta a la pantalla. 
                    pared.style.left = indiceColumna * this.tamanoCelda + "px";
                    pared.style.top = indiceFila * this.tamanoCelda + "px";
                    pared.style.width = this.tamanoCelda + "px";
                    pared.style.height = this.tamanoCelda + "px";
                    this.divLaberinto.appendChild(pared); // Agrego al HTML cada div creado en cada #.
                    this.limitePared.push(pared); //Array para obtener las paredes del laberinto.
                }
                if (celda === "O") {
                    let meta = document.createElement("div"); //Por cada # crea un div para simular la pared del laberinto.
                    meta.classList.add("meta"); // Le da los estilos a la meta del laberinto.
                    //Formula matemática que según su fila y columna en la matriz, lo adapta a la pantalla. 
                    meta.style.left = indiceColumna * this.tamanoCelda + "px";
                    meta.style.top = indiceFila * this.tamanoCelda + "px";
                    meta.style.width = this.tamanoCelda + "px";
                    meta.style.height = this.tamanoCelda + "px";
                    this.divLaberinto.appendChild(meta); // Agrego al HTML cada div creado en cada #.
                    this.divMeta.push(meta); //Array para obtener las paredes del laberinto.
                }
            });
        });
    }
    setMapa(mapa) {
        this.mapa = mapa;
    }
    getParedLimites() {
        let paredesLimites = this.limitePared.map((p) => {
            return p.getBoundingClientRect();
        });
        return paredesLimites;
    }
    ajustarTamanioMapa(mapa) {
        this.divLaberinto.style.width = mapa[0].length * this.tamanoCelda + "px";
        this.divLaberinto.style.height = mapa.length * this.tamanoCelda + "px";
    }
    getDivLaberinto() {
        return this.divLaberinto;
    }
    getDivMeta() {
        let meta = this.divMeta.map((m) => {
            return m.getBoundingClientRect();
        });
        return meta;
    }
}
