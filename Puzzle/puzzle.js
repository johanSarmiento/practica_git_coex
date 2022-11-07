let fichas =[0,1,2,3,4,5,6,7,8];
let num_clic=0;
let primerClic=0;
// CREACION DE LA FUNCION SELECIONAR, LA CUAL SE ACTIVA AL TOCAR LA IMAGEN 
function seleccionar(casilla) {
    // CONTADOR DE CLIC
    num_clic++
    // LLEVAR EL CONTROL DE LOS CLICK
    if (num_clic==1) {
        primerClic = casilla;
    }
    if (num_clic==2) {
        // VARIABLE PARA TRABAJAR DENTRO DEL IF, YA QUE NO ES NECESITA EL VALOR AFUERA
        let segundoClic=casilla;
        // INTERCAMBIAR LOS VALORES DE LAS CASILLAS, CON LA POSICINES DE ARRAY
        let intercambio = fichas[primerClic];
        fichas[primerClic] = fichas[segundoClic];
        // UBICO EL CONTENIDO DEL PRIME CLIC EN LA CASILLA DES SEGUNDO CLIC
        fichas[segundoClic]=intercambio;

        // REINICAR EL NUM_CLICK PARA VOLVER A UTLIZIZARLO
        num_clic=0;
        moverFichas();
    }
    quitarBorde();
    document.getElementById("img_"+casilla).style.border="4px solid blue";
}
// DESMARCHAR LA CASILLA CON CLIC
function quitarBorde() {
    for(let i=0;i<9;i++){
        document.getElementById("img_"+i).style.border = null;
    }
}

function desordenar() {
    fichas= fichas.sort(function() {
        return Math.random()-0.5
    })
    // TOMA VALORES ENTRE +1 Y -1 Y 0.5 EN ORDEN ALEATORIO
}
// LA UTILIZAMOS PARA SABER EL NUMERO DE LA IMAGEN
function moverFichas() {
    // CREAMOS LA FUNCION PARA RECORRER EL ARRAY 
    for(let i=0;i<9;i++){
        // OBTENER EL NUMERO DE LA IMAGEN Y LO GUARDAMOS EN C
        let imagenFicha=fichas[i]
        document.getElementById("img_"+i).src = "images/i"+(imagenFicha+1)+".jpg";
    }
}
// CREAMOS LA FUNCION PARA COMPROBAR QUE LA IMAGENES ESTEN ORDENADAS 
function comprobarPuz() {
    let comprobar = true;
    for(let c=0;c<9;c++){
        if (fichas[c] != c) {
            comprobar=false
        }
    }
    if (comprobar) {
        alert("PUZZLE COMPLETO")
    }else{
        alert("PUZZLE INCOMPLETO")
    }
}
// CREAMOS UNA FUNCION PARA PODER COMPRABAR EL ESTDO DEL PUZLLE
let btn = document.querySelector("#btnComprobar")
btn.addEventListener("click",(event) => {
    comprobarPuz()
})
// ejecutamos la funcinoes de la pagina
window.onload = function () {
    // INVOCAR LA FUNCION DESORDENA PARA EMPEZAR EL PUZZLE
    desordenar();
    // INVOCAR LA FUNCINO PARA RESFRECAR EL PANEL DEL PUZZLE
    moverFichas();
}
