export class CargarMapa {
    url;
    constructor(url) {
        this.url = url;
    }
    ;
    async cargarMapa() {
        const respuesta = await fetch(this.url);
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar el mapa.");
        }
        const laberintos = (await respuesta.json()).laberintos;
        const mapa = laberintos.find((m) => m.nombre === "Primer laberinto");
        return mapa;
    }
}
