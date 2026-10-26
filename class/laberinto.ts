export class Laberinto {

    /*  REQUISITOS DEL LABERINTO  */
    private divLaberinto: HTMLElement;
    private limitePared: HTMLElement[];
    private divMeta: HTMLElement[];
    private mapa: string[][];

    /* PROPIEDADES DEL LABERINTO*/
    private tamanoCelda = 25;

    constructor() {
        this.divMeta = [];
        this.limitePared = [];
        this.divLaberinto = document.getElementById("laberinto")!;
        this.mapa = [];


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
                    this.divLaberinto.appendChild(pared); // Agrego al HTML cada div creado en cada #.
                    this.limitePared.push(pared); //Array para obtener las paredes del laberinto.
                }

                if (celda === "O") {
                    let meta = document.createElement("div"); //Por cada # crea un div para simular la pared del laberinto.
                    meta.classList.add("meta"); // Le da los estilos a la meta del laberinto.

                    //Formula matemática que según su fila y columna en la matriz, lo adapta a la pantalla. 
                    meta.style.left = indiceColumna * this.tamanoCelda + "px";
                    meta.style.top = indiceFila * this.tamanoCelda + "px"
                    meta.style.width = this.tamanoCelda + "px";
                    meta.style.height = this.tamanoCelda + "px";
                    this.divLaberinto.appendChild(meta); // Agrego al HTML cada div creado en cada #.
                    this.divMeta.push(meta); //Array para obtener las paredes del laberinto.
                }
            })
        })
    }

    setMapa(mapa: string[][]) {
        this.mapa = mapa;
    }

    eliminarMapa(){
        let paredes = this.divLaberinto.children;
        Array.from(paredes).forEach((p) => {
            p.remove();
        })
        console.log(paredes);

    }

    cambiarMapa(mapa:string[][]){
        this.eliminarMapa();
        this.setMapa(mapa);
        this.construirMapa();
    }


    getParedLimites() {
        let paredesLimites: DOMRect[] = this.limitePared.map((p) => {
            return p.getBoundingClientRect();
        })
        return paredesLimites;
    }

    ajustarTamanioMapa(mapa: string[][]) {
        this.divLaberinto.style.width = mapa[0]!.length * this.tamanoCelda + "px";
        this.divLaberinto.style.height = mapa.length * this.tamanoCelda + "px";
    }

    getDivLaberinto() {
        return this.divLaberinto;
    }

    getDivMeta(){
        let meta: DOMRect[] = this.divMeta.map((m) => {
            return m.getBoundingClientRect();
        })
        return meta;
    }

}