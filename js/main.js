let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
let ventana_modal = document.querySelector('.modal');
let ventana_modal2 = document.querySelector('.modal2');
let ventana_modal3 = document.querySelector('.modal3');
let ventana_modalfinal1 = document.querySelector('.modalfinal1');

let p1 = false;
let p2 = false;
let p3 = false;
let p4 = false;
let p5 = false;
let p6 = false;
let p7 = false;
let p8 = false;
let p9 = false;
let p10 = false;

let terminado = false;

let preguntas = ["¿Cuál es el objetivo del regalmento de 2022?", "¿Cúal es el nombre que recibe el vórtice generado por los flaps delanteros?", "¿Por qué motivo el morro del monoplaza es más ancho?", "¿Cuales son los principales cambios de los neumaticos en 2022?", "¿Por qué a los neumáticos se les van a añadir aletines y tapacubos para 2022?", "¿Qué efecto vuelve a la F1 en 2022?", "¿Los alerones en 2022 generaran más carga aerodinamica que en 2021?", "¿Qué trata de hacer la FIA eliminando los pequeños componentes aerodinámicos del monoplaza?", "¿Por qué se ha ampliado el peso del monoplaza?", "¿Qué novedad se añade en lo que se refiere al motor en 2022?"];
let solucion = [0,0,1,2,1,2,0,2,1,0];

let opciones = [];
opciones.push(["Potenciar los adelantamientos", "No introducir muchos cambios", "Impedir que los coches se sigan de cerca"]);
opciones.push(["Y-250", "X-250", "Y-350"]);
opciones.push(["Motivos de estética", "Motivos de seguridad", "Aumentar el peso"]);
opciones.push(["Neumáticos de 18 pulgadas y aumento de degradación", "El único cambio será utilizar neumáticos de 18 pulgadas", "Neumáticos de 18 pulgadas y mejora de los compuestos de los neumáticos"]);
opciones.push(["Estética", "Reducir turbulencias", "Aumentar turbulencias"]);
opciones.push(["Efecto vuelo", "Efecto piano", "Efecto suelo"]);
opciones.push(["Generarán menos carga", "Generarán la misma carga", "Generarán más carga"]);
opciones.push(["Su función no era importante", "Rebajar el peso del coche", "Simplificar el coche a nivel aerodinámico"]);
opciones.push(["Por las ruedas únicamente", "Por las ruedas y por motivos de seguridad", "Porque cada año tienen que pesar más"]);
opciones.push(["Congelación de unidades de potencia hasta 2025", "Se podrán desarrollar hasta 2023", "El combustible no sufrirá cambios"]);

let posActual = 0;
let acertadas = 0

/*var pregunta1_respondida = new Boolean(false);
var pregunta2_respondida = new Boolean(false);
var pregunta3_respondida = new Boolean(false);
var pregunta4_respondida = new Boolean(false);
var pregunta5_respondida = new Boolean(false);
var pregunta6_respondida = new Boolean(false);
var pregunta7_respondida = new Boolean(false);
var pregunta8_respondida = new Boolean(false);
var pregunta9_respondida = new Boolean(false);
var pregunta10_respondida = new Boolean(false);
var terminado = new Boolean(false);*/

function empezar(){
    posActual = 0;
    acertadas = 0;
    cargarPregunta();
}

function cargarPregunta(){
    if(preguntas.length <= posActual){
        //terminarPreguntas();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("pregunta").innerHTML = preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];

        
}
}

function limpiarOpciones(){
    document.getElementById("n0").className = "btn_pregunta";
    document.getElementById("n1").className = "btn_pregunta";
    document.getElementById("n2").className = "btn_pregunta";

}

function comprobarRespuesta(opElegida){

    if(opElegida==solucion[posActual]){//acertó
        acertadas++;
    }
    posActual+=1;
    
    
    
    
    setTimeout(function() {
        cargarPregunta();
    }, 1000)
    


    enviarRespuesta1();
}





// ---------- CAMBIAR DE VIDEO ----------

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
            let id = video.children[0].getAttribute('id');
            mainVideo.id = id;
        };
    };
});


// ---------- VENTANA MODAL VIDEO 1 ----------

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 41.15 && mainVideo.id == 1){
        p1 = false;
    } else if (p1 == false && mainVideo.currentTime >= 41.15 /*&& mainVideo.currentTime() <= 42.00*/ && mainVideo.id == 1 ) {
        mainVideo.pause();   
        empezar();
        p1 = true;   
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 82.5 && mainVideo.id == 1){
        p2 = false;
    } else if (p2 == false && mainVideo.currentTime >= 82.5 && mainVideo.id == 1) {    
        mainVideo.pause();
        p2 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 118.5 && mainVideo.id == 1){
        p3 = false;
    } else if (p3 == false && mainVideo.currentTime >= 118.5 && mainVideo.id == 1) {    
        mainVideo.pause();
        p3 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 202.8 && mainVideo.id == 1){
        p4 = false;
    } else if (p4 == false && mainVideo.currentTime >= 202.8 && mainVideo.id == 1) {    
        mainVideo.pause();
        p4 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 234.85 && mainVideo.id == 1){
        p5 = false;
    } else if (p5 == false && mainVideo.currentTime >= 234.85 && mainVideo.id == 1) {    
        mainVideo.pause();
        p5 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});


mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 352.5 && mainVideo.id == 1){
        p6 = false;
    } else if (p6 == false && mainVideo.currentTime >= 352.5 && mainVideo.id == 1) {    
        mainVideo.pause();
        p6 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 397 && mainVideo.id == 1){
        p7 = false;
    } else if (p7 == false && mainVideo.currentTime >= 397 && mainVideo.id == 1) {    
        mainVideo.pause();
        p7 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 470.25 && mainVideo.id == 1){
        p8 = false;
    } else if (p8 == false && mainVideo.currentTime >= 470.25 && mainVideo.id == 1) {    
        mainVideo.pause();
        p8 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 509.25 && mainVideo.id == 1){
        p9 = false;
    } else if (p9 == false && mainVideo.currentTime >= 509.25 && mainVideo.id == 1) {    
        mainVideo.pause();
        p9 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 545.35 && mainVideo.id == 1){
        p10 = false;
    } else if (p10 == false && mainVideo.currentTime >= 545.35 && mainVideo.id == 1) {    
        mainVideo.pause();
        p10 = true; 
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener('ended', function () {
    if (terminado == false && mainVideo.id == 1){
        
        ventana_modalfinal1.classList.add('ventana_modalfinal1');
        document.getElementById("aciertos").innerHTML = acertadas;
        document.getElementById("total").innerHTML = preguntas.length;
       
    }
});

function cerrarVentanaModalFinal1() {
    ventana_modalfinal1.classList.remove('ventana_modalfinal1');
}

function enviarRespuesta1() {   
    ventana_modal.classList.remove('ventana_modal');
    mainVideo.play();
}

// ---------- VENTANA MODAL VIDEO 2 ----------

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 4 && mainVideo.id == 2){
        p1 = true;
    } else if (p1 && mainVideo.currentTime >= 4 && mainVideo.id == 2) {
        p1 = false;        
        mainVideo.pause();
        ventana_modal2.classList.add('ventana_modal2');
    }
});

function cerrarVentanaModal2() {
    ventana_modal2.classList.remove('ventana_modal2');
    mainVideo.play()
}

// ---------- VENTANA MODAL VIDEO 3 ----------

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 4 && mainVideo.id == 3){
        p1 = true;
    } else if (p1 && mainVideo.currentTime >= 4 && mainVideo.id == 3) {
        p1 = false;
        console.log(mainVideo.id)
        mainVideo.pause();
        ventana_modal3.classList.add('ventana_modal3');
    }
});

function cerrarVentanaModal3() {
    ventana_modal3.classList.remove('ventana_modal3');
    mainVideo.play()
}


// function pregunta(tiempoPregunta, pX, id) {
//     if(mainVideo.currentTime < tiempoPregunta) {
//         pX = true;
//     } else if (pX && mainVideo.currentTime >= tiempoPregunta && mainVideo.id == id){
//         pX = false;
//         console.log(mainVideo.id)
//         mainVideo.pause();
//         ventana_modal.classList.add('ventana_modal');
//     }
// }