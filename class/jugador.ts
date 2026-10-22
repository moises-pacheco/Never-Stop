import { Laberinto } from "./laberinto";



export class Jugador {

    private personaje: HTMLElement;
    private laberinto: HTMLElement;
    private velocidad: number;
    private velovidadIntervalo: number;
    private posicionX: number;
    private posicionY: number;

    constructor(private laberintoDiv: Laberinto) {
        this.velovidadIntervalo = 75;
        this.posicionX = 30;
        this.posicionY = 40;
        this.laberinto = laberintoDiv.getDivLaberinto();
        this.velocidad = 20;
        

        this.personaje = document.createElement("div");
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
        this.personaje.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`
    }

    crearPersonaje() {
        this.personaje.classList.add("personaje");
        this.laberinto.appendChild(this.personaje);
        this.personaje.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`
    }

}