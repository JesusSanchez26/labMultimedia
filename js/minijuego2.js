const pantallaInicio = document.querySelector(".inicio");
const pantallaFinal = document.querySelector(".final");
const resultado = document.querySelector(".final .puntuacion");
const botonJugar = document.querySelector(".final .boton");
const puntero = document.querySelector(".puntero");

let puntos;
let tiempo;
let necesarios;

pantallaInicio.addEventListener("click", () => {
    pantallaInicio.classList.remove("active");
    empezar();
});

const empezar = () => {

    puntos = 0;
    tiempo = 15;
    necesarios = 15;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
    puntero.classList.add("active");
    document.getElementById('player').addEventListener("mouseover", sumarPuntos);

    function sumarPuntos() {
        puntos++;
        document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
        randNum = Math.round(Math.random() * 500);
        randNum2 = Math.round(Math.random() * 500);
        document.getElementById("player").style.marginTop = randNum + "px";
        document.getElementById("player").style.marginLeft = randNum2 + "px";
        if (puntos == necesarios) {
            puntero.classList.remove("active");
            finalizarBien();
        }
    }

    function restarTiempo() {
        tiempo--;
        document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
        if (tiempo == 0) {
            finalizarMal();
        }
    }
    setInterval(restarTiempo, 1000);
};

const finalizarBien = () => {
    pantallaFinal.classList.add("active");
    resultado.innerHTML = "Has ganado";
};

const finalizarMal = () => {
    pantallaFinal.classList.add("active");
    resultado.innerHTML = "Has perdido";
};

botonJugar.addEventListener("click", () => {
    window.location.href="minijuego2.html";
});