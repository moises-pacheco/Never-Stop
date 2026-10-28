export class Jugador {

    private divJugador: HTMLElement;
    private velocidad: number;
    private velovidadIntervalo: number;
    private posicionX: number;
    private posicionY: number;
    private intervalo: number | undefined;

    constructor() {
        this.velovidadIntervalo = 80;
        this.posicionX = 0;
        this.posicionY = 0;
        this.velocidad = 17;


        this.divJugador = document.createElement("div");
        this.divJugador.classList.add("personaje");
        this.actualizarPosicion();
    }

    detectarTecla(alMoverse: (intervalo:number) => void) {
        document.addEventListener("keydown", (event) => {
            if (event.repeat) return;
            if (!event.key.startsWith("Arrow")) return;

            event.preventDefault();
            clearInterval(this.intervalo);
            if (event.key === "ArrowUp") {

                this.intervalo = setInterval(() => {
                    this.posicionY -= this.velocidad;

                    this.actualizarPosicion();
                    alMoverse(this.intervalo!);

                }, this.velovidadIntervalo)

            } else if (event.key === "ArrowDown") {
                this.intervalo = setInterval(() => {
                    this.posicionY += this.velocidad;
                    this.actualizarPosicion();
                    alMoverse(this.intervalo!);


                }, this.velovidadIntervalo)
            } else if (event.key === "ArrowLeft") {


                this.intervalo = setInterval(() => {
                    this.posicionX -= this.velocidad;
                    this.actualizarPosicion();
                    alMoverse(this.intervalo!);

                }, this.velovidadIntervalo)

            } else if (event.key === "ArrowRight") {


                this.intervalo = setInterval(() => {
                    this.posicionX += this.velocidad;
                    this.actualizarPosicion();
                    alMoverse(this.intervalo!);

                }, this.velovidadIntervalo)


            }
        })

    }


    actualizarPosicion() {
        this.divJugador.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`
    }

    getDivJugador() {
        return this.divJugador;
    }

    getUbicacion() {
        let ubicacionJugador = this.divJugador.getBoundingClientRect();
        console.log(`Left: ${ubicacionJugador.left}, Right:${ubicacionJugador.right} , Bottom: ${ubicacionJugador.bottom}, Top: ${ubicacionJugador.top}`)
    }


    setPosicionInicial(x: number, y: number) {
        this.posicionX = x;
        this.posicionY = y;
        this.actualizarPosicion();
    }



}