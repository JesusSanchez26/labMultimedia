const pantallaInicio = document.querySelector(".inicio");
const pantallaClick = document.querySelector(".click");
const mensajeClick = document.querySelector(".click .mensaje");
const pantallaFinal = document.querySelector(".final");
const tiempoReaccion = document.querySelector(".final .tiempo");
const botonJugar = document.querySelector(".final .boton");

let temporizador;
let pantallaVerde;
let tiempoActual;
let esperandoInicio;
let esperandoPantallaVerde;
let puntuacion;

const init = () => {
    pantallaVerde = false;
    esperandoInicio = false;
    esperandoPantallaVerde = false;
    puntuacion = [];
};

init();

const setVerde = () => {
    pantallaClick.style.backgroundColor = "#32cd32";
    mensajeClick.innerHTML = "¡YA!";
    mensajeClick.style.color = "#111";
    pantallaVerde = true;
    tiempoActual = Date.now();
};


const empezar = () => {
    pantallaClick.style.backgroundColor = "#ee0000";
    mensajeClick.innerHTML = "Espera...";
    mensajeClick.style.color = "#fff";

    let numeroRandom = Math.floor(Math.random() * 4000 + 3000);
    temporizador = setTimeout(setVerde, numeroRandom);

    esperandoInicio = false;
    esperandoPantallaVerde = true;    
};


pantallaInicio.addEventListener("click", () => {
    pantallaInicio.classList.remove("active");
    empezar();
});


const finalizar = () => {
    pantallaFinal.classList.add("active");
    clearTimeout(temporizador);

    let total = 0;

    puntuacion.forEach((s) => {
        total += s;
    });

    let media = Math.round(total / 3);

    tiempoReaccion.innerHTML = `${media} ms`;
};


const displayReactionTime = (rt) => {
    pantallaClick.style.backgroundColor = "#faf0ca";
    mensajeClick.innerHTML = `<div class='tiempo'>${rt} ms</div>Haz click para continuar.`;
    pantallaVerde = false;
    esperandoInicio = true;
    puntuacion.push(rt);

    if (puntuacion.length >= 3) {
        finalizar();
    }
};

const pantallaRapido = () => {
    pantallaClick.style.backgroundColor = "#faf0ca";
    mensajeClick.innerHTML = "Demasiado rápido. Click para continuar";
    mensajeClick.style.color = "#111";
    esperandoInicio = true;
    clearTimeout(temporizador);
};


pantallaClick.addEventListener("click", () => {
    if (pantallaVerde) {
        let clickTime = Date.now();
        let reactionTiime = clickTime - tiempoActual;        
        displayReactionTime(reactionTiime);
        return;
    }

    if (esperandoInicio) {
        empezar();
        return;
    }

    if (esperandoPantallaVerde) {
        pantallaRapido();
    }
});

botonJugar.addEventListener("click", () => {
    pantallaFinal.classList.remove("active");
    init();
    empezar();
});