import { Laberinto } from "./laberinto";



export class Jugador {

    private personaje: HTMLElement;
    private laberinto: HTMLElement;
    private velocidad: number;
    private posicionX: number;
    private posicionY: number;

    constructor(private laberintoDiv: Laberinto) {
        this.posicionX = 30;
        this.posicionY = 40;
        this.laberinto = laberintoDiv.getDivLaberinto();
        this.velocidad = 20;

        this.personaje = document.createElement("div");
        this.crearPersonaje();
    }

    detectarTecla() {
        let intervalo = setInterval(() => { });
        let teclas = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false
        }

        document.addEventListener("keydown", (event) => {
            clearInterval(intervalo);
            if (event.key === "ArrowUp") {
                teclas = {
                    ArrowUp: true,
                    ArrowDown: false,
                    ArrowLeft: false,
                    ArrowRight: false
                }
                intervalo = setInterval(() => {
                    this.posicionY -= this.velocidad;

                    console.log(this.posicionY)
                    this.mover();

                }, 100)

            } else if (event.key == "ArrowDown") {
            clearInterval(intervalo);

                teclas = {
                    ArrowUp: false,
                    ArrowDown: true,
                    ArrowLeft: false,
                    ArrowRight: false
                }

                intervalo = setInterval(() => {
                    this.posicionY += this.velocidad;
                    console.log(this.posicionY)
                    this.mover();

                }, 100)
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