export class Laberinto {

    /*  REQUISITOS DEL LABERINTO  */
    private divlaberinto: HTMLElement;
    private mapa: string[][];

    /* PROPIEDADES DEL LABERINTO*/
    private tamanoCelda = 25;

    constructor(mapa: string[][]) {
        this.divlaberinto = document.getElementById("laberinto")!;
        this.mapa = mapa;
    }


    construirMapa() {

        //Adapta las dimensiones del nivel a la pantalla.
        this.ajustarTamanioMapa(this.mapa);

        this.mapa.forEach((fila, indiceFila) => {
            fila.forEach((celda: any, indiceColumna) => {
                if (celda === "#") {
                    let pared = document.createElement("div"); //Por cada # crea un div para simular la pared del laberinto.
                    pared.classList.add("pared"); // Le da los estilos a la pared del laberinto.

                    //Formula matemática que según su fila y columna en la matriz, lo adapta a la pantalla. 
                    pared.style.left = indiceColumna * this.tamanoCelda + "px";
                    pared.style.top = indiceFila * this.tamanoCelda + "px"
                    pared.style.width = this.tamanoCelda + "px";
                    pared.style.height = this.tamanoCelda + "px";
                    this.divlaberinto.appendChild(pared); // Agrego al HTML cada div creado en cada #.

                }
            })
        })
    }

    ajustarTamanioMapa(mapa: string[][]) {
        this.divlaberinto.style.width = mapa[0]!.length * this.tamanoCelda + "px";
        this.divlaberinto.style.height = mapa.length * this.tamanoCelda + "px";
    }

}