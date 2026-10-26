export class CargarMapa {
    nivelSeleccionado;
    constructor() {
        this.nivelSeleccionado = "Primer laberinto";
    }
    ;
    async cargarMapa() {
        const respuesta = await fetch("../src/laberintos/laberintos.json");
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar el mapa.");
        }
        const laberintos = (await respuesta.json()).laberintos;
        const mapa = laberintos.find((m) => m.nombre === this.nivelSeleccionado);
        return mapa;
    }
    setNivelSeleccionado(nivel) {
        this.nivelSeleccionado = nivel;
    }
}
