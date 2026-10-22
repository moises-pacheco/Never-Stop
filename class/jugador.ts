import { Laberinto } from "./laberinto";



export class Jugador {

    private divJugador: HTMLElement;
    private velocidad: number;
    private velovidadIntervalo: number;
    private posicionX: number;
    private posicionY: number;

    constructor() {
        this.velovidadIntervalo = 75;
        this.posicionX = 30;
        this.posicionY = 40;
        this.velocidad = 20;
        

        this.divJugador = document.createElement("div");
        this.crearPersonaje();
    }

    detectarTecla() {
        let intervalo = setInterval(() => { });


        document.addEventListener("keydown", (event) => {
            clearInterval(intervalo);
            if (event.key === "ArrowUp") {

                intervalo = setInterval(() => {
                    this.posicionY -= this.velocidad;

                    console.log(this.posicionY)
                    this.mover();

                }, this.velovidadIntervalo)

            } else if (event.key == "ArrowDown") {
                clearInterval(intervalo);


                intervalo = setInterval(() => {
                    this.posicionY += this.velocidad;
                    console.log(this.posicionY)
                    this.mover();

                }, this.velovidadIntervalo)
            } else if (event.key == "ArrowLeft") {


                intervalo = setInterval(() => {
                    this.posicionX -= this.velocidad;
                    console.log(this.posicionY)
                    this.mover();
                }, this.velovidadIntervalo)

            } else if (event.key == "ArrowRight") {
 

                intervalo = setInterval(() => {
                    this.posicionX += this.velocidad;
                    console.log(this.posicionY)
                    this.mover();
                }, this.velovidadIntervalo)


            }
        })

    }


    mover() {
        this.divJugador.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`
    }

    crearPersonaje() {
        this.divJugador.classList.add("personaje");
        this.divJugador.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`
    }

    getDivJugador(){
        return this.divJugador;
    }

    getUbicacion(){
        return {x: this.posicionX, y:this.posicionY};
    }

}