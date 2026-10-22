export class Jugador {

    private divJugador: HTMLElement;
    private velocidad: number;
    private velovidadIntervalo: number;
    private posicionX: number;
    private posicionY: number;
    private intervalo: number | undefined;

    constructor(x: number, y: number) {
        this.velovidadIntervalo = 75;
        this.posicionX = x;
        this.posicionY = y;
        this.velocidad = 20;


        this.divJugador = document.createElement("div");
        this.divJugador.classList.add("personaje");
        this.actualizarPosicion();
    }

    detectarTecla() {
        document.addEventListener("keydown", (event) => {
            if (event.repeat) return;
            if (!event.key.startsWith("Arrow")) return;

            event.preventDefault();
            clearInterval(this.intervalo);
            if (event.key === "ArrowUp") {
                this.getUbicacion();

                this.intervalo = setInterval(() => {
                    this.posicionY -= this.velocidad;

                    this.actualizarPosicion();

                }, this.velovidadIntervalo)

            } else if (event.key === "ArrowDown") {
                this.getUbicacion();
                this.intervalo = setInterval(() => {
                    this.posicionY += this.velocidad;
                    this.actualizarPosicion();


                }, this.velovidadIntervalo)
            } else if (event.key === "ArrowLeft") {
                this.getUbicacion();


                this.intervalo = setInterval(() => {
                    this.posicionX -= this.velocidad;
                    this.actualizarPosicion();

                }, this.velovidadIntervalo)

            } else if (event.key === "ArrowRight") {

                this.getUbicacion();

                this.intervalo = setInterval(() => {
                    this.posicionX += this.velocidad;
                    this.actualizarPosicion();

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


    setReseteoPosicion(x: number, y: number) {
        this.divJugador.style.transform = `translate(${x + "px"},${y + "px"})`
    }

}