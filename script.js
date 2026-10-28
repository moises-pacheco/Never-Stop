document.addEventListener("DOMContentLoaded", () => {

    const cronometro = document.getElementById("cronometro");
    const botonIniciar = document.getElementById("boton-iniciar");
    const botonDetener = document.getElementById("boton-detener")
    const botonReiniciar = document.getElementById("boton-reiniciar")
    const moduloVentana = document.querySelector(".modulo-ventana")


    let tiempoInicial = 1;   /*VARIALBE PARA INICIALIZAR EL TIEMPO */
    let segundos = tiempoInicial; /*VARIABLE QUE USAREMOS PARA SACAR LOS MINUTOS Y LOS SEGUNDOS */
    let intervalo = null;

    function actualizarPantalla() { /*fUNCION PARA REFLEJAR LOS MINUTOS Y SEGUNDOS */
        let minutos = Math.floor(segundos / 60);/*REDONDEAMOS PARA MANTENER LOS MINUTOS  */
        let segundosRestantes = segundos % 60;/*NOS QUEDAMOS CON EL RECIDUO QUE SERAN LOS SEGUNDOS */

        let minutosTexto = String(minutos).padStart(2, "0"); /*CONVERTIMOS A STRING, padStart ES UN METODO PARA MAENTENER 2 NUMEROS Y PONER UN 0 DELANTE */
        let segundosTexto = String(segundosRestantes).padStart(2, "0");

        let tiempoFormateado = `${minutosTexto}:${segundosTexto}`

        cronometro.textContent = tiempoFormateado;   /*AQUI ACTUALIZAMOS EL CRONOMETRO */

    }

    function detener() {

        clearInterval(intervalo);
        intervalo = null;
        botonIniciar.disabled = false;
    }

    botonIniciar.addEventListener("click", () => {

        if (!intervalo) {

            if (segundos === 0) {
                segundos = tiempoInicial
                actualizarPantalla();
            }


            botonIniciar.disabled = true;

            intervalo = setInterval(() => {

                segundos--;
                actualizarPantalla();

                if (segundos === 0) {

                    moduloVentana.classList.remove("hidden")
                    detener();
                }

            }, 1000);

        }
    })

    botonDetener.addEventListener("click", detener);

    botonReiniciar.addEventListener("click", () => {

        detener();
        segundos = tiempoInicial;
        actualizarPantalla();
    })

    actualizarPantalla();

});