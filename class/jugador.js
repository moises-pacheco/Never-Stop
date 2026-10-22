export class Jugador {
    laberintoDiv;
    personaje;
    laberinto;
    velocidad;
    velovidadIntervalo;
    posicionX;
    posicionY;
    constructor(laberintoDiv) {
        this.laberintoDiv = laberintoDiv;
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
        let teclas = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false
        };
        document.addEventListener("keydown", (event) => {
            clearInterval(intervalo);
            if (event.key === "ArrowUp") {
                intervalo = setInterval(() => {
                    this.posicionY -= this.velocidad;
                    console.log(this.posicionY);
                    this.mover();
                }, this.velovidadIntervalo);
            }
            else if (event.key == "ArrowDown") {
                clearInterval(intervalo);
                intervalo = setInterval(() => {
                    this.posicionY += this.velocidad;
                    console.log(this.posicionY);
                    this.mover();
                }, this.velovidadIntervalo);
            }
            else if (event.key == "ArrowLeft") {
                intervalo = setInterval(() => {
                    this.posicionX -= this.velocidad;
                    console.log(this.posicionY);
                    this.mover();
                }, this.velovidadIntervalo);
            }
            else if (event.key == "ArrowRight") {
                intervalo = setInterval(() => {
                    this.posicionX += this.velocidad;
                    console.log(this.posicionY);
                    this.mover();
                }, this.velovidadIntervalo);
            }
        });
    }
    mover() {
        this.personaje.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`;
    }
    crearPersonaje() {
        this.personaje.classList.add("personaje");
        this.laberinto.appendChild(this.personaje);
        this.personaje.style.transform = `translate(${this.posicionX + "px"},${this.posicionY + "px"})`;
    }
}
