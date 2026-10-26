interface Mapa {
    nombre: string,
    mapa: string[][],
    inicio: Inicio
}

export type niveles = "Primer laberinto" | "Segundo laberinto" | "Tercer laberinto" | "Cuarto laberinto";

interface Laberintos {
    laberintos: Mapa[]
}

interface Inicio {
    x: number,
    y: number
}

export class CargarMapa {
    private nivelSeleccionado: niveles;
    constructor(){
        this.nivelSeleccionado = "Primer laberinto";
    };
    async cargarMapa() {
        const respuesta = await fetch("../src/laberintos/laberintos.json");
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar el mapa.");
        }

        const laberintos = (await respuesta.json() as Laberintos).laberintos;
        const mapa = laberintos.find((m) => m.nombre === this.nivelSeleccionado);
        return mapa;
    }

    setNivelSeleccionado(nivel:niveles){
        this.nivelSeleccionado = nivel;
    }

}