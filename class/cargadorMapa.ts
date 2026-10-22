interface Mapa {
    nombre: string,
    mapa: string[][],
    inicio: Inicio
}

interface Laberintos {
    laberintos: Mapa[]
}

interface Inicio {
    x: number,
    y: number
}

export class CargarMapa {
    private url: string;
    constructor(url: string) {
        this.url = url;
    };

    async cargarMapa() {
        const respuesta = await fetch(this.url);
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar el mapa.");
        }

        const laberintos = (await respuesta.json() as Laberintos).laberintos;
        const mapa = laberintos.find((m) => m.nombre === "Primer laberinto");
        return mapa;
    }

}