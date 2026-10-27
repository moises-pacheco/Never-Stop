
const btnCreditos = document.getElementById('btnCreditos'); //Guardamos btonCreditos
const pantallaCreditos = document.getElementById('pantalla_creditos');
const cerrarCreditos = document.getElementById('cerrar_creditos');


const btnComoJugar = document.getElementById('btnComoJugar');
const pantallaComoJugar = document.getElementById('pantalla_comoJugar');
const cerrarComoJugar = document.getElementById('cerrar_comoJugar')

//Abrir Ventana
btnCreditos.addEventListener('click',(evento)=> {
    evento.preventDefault();
    pantallaCreditos.classList.add('activa'); //Agregamos la clase activa a pantallaCreditos
});

// Cerrar Ventana
cerrarCreditos.addEventListener('click', (evento)=> {
    evento.preventDefault();
    pantallaCreditos.classList.remove('activa'); //Quitamos la clase activa a pantallaCreditos
});


btnComoJugar.addEventListener('click', (evento)=>{
    evento.preventDefault();
    pantallaComoJugar.classList.add('activa')

})

cerrarComoJugar.addEventListener('click', (evento)=>{

    evento.preventDefault();

    pantallaComoJugar.classList.remove('activa')

})