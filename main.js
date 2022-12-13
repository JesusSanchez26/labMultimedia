let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
let ventana_modal = document.querySelector('.modal');
let ventana_modal2 = document.querySelector('.modal2');
let ventana_modal3 = document.querySelector('.modal3');
let p1 = true;
let p2 = true;

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
    if (mainVideo.currentTime < 3 && mainVideo.id == 1){
        p1 = true;
    } else if (p1 && mainVideo.currentTime >= 3 && mainVideo.id == 1) {
        p1 = false;        
        mainVideo.pause();
        ventana_modal.classList.add('ventana_modal');
    }
});

mainVideo.addEventListener("timeupdate", function () {
    if (mainVideo.currentTime < 6 && mainVideo.id == 1){
        p2 = true;
    } else if (p2 && mainVideo.currentTime >= 6 && mainVideo.id == 1) {
        p2 = false;        
        mainVideo.pause();
        ventana_modal.classList.add('ventana_modal');
    }
});

function cerrarVentanaModal1() {
    ventana_modal.classList.remove('ventana_modal');
    mainVideo.play()
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