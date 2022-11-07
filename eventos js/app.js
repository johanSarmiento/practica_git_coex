document.getElementById("caja1").addEventListener("click", function(){
    alert("oprimiste el boton")
})
document.getElementById("caja2").addEventListener("dblclick",function(){
    alert("oprimiste dos veces el boton")
})

document.getElementById("caja1").addEventListener("mouseover",function() {
    document.getElementById("caja1").style.borderRadius="30px"
    document.getElementById("caja1").style.background="#000"
})
document.getElementById("caja1").addEventListener("mouseout",function() {
    document.getElementById("caja1").style.borderRadius="0px"
    document.getElementById("caja1").style.background="#7fffd4"
    document.getElementById("caja1").style.color="#fff"
})

document.getElementById("caja2").addEventListener("mouseover",function() {
    document.getElementById("caja2").style.borderRadius="50%"
})
document.getElementById("caja2").addEventListener("mouseout",function() {
    document.getElementById("caja2").style.borderRadius="0%"
})

// EVENTOS DE TECLADO
document.getElementById("texto").addEventListener("keyup",function () {
    let letras=document.getElementById("texto").value.length
    let Letras=50-parseInt(letras)
    document.getElementById("texto2").value=Letras
})

// EVENTOS FORMULARIOS 
    let cont=0
function incrementar() {
    cont++
    alert( `el numero ha incrementado ${cont}`)
}

//ejercicio2

function persona() {
    let nombre =document.getElementById("nombre").value
    let edad=parseInt(document.getElementById("edad").value)
    alert(`el nombre es: ${nombre} \n y la edad es: ${edad}`)      
}

//ejercicio3

function contraseña() {
    let contra=document.getElementById("contraseña").value
    if (contra.length<=5) {
        alert("largo de clave corecta")
    }
    else{
        alert(`la contraseña es demasiado larga`)
    }
}

// ejercicio4

function cambiarColor() {
    let seleccion=document.getElementById("select1")
    document.getElementById("text1").value=seleccion.selectedIndex;
    document.getElementById("text2").value=seleccion.options[seleccion.selectedIndex].text
    document.getElementById("text3").value=seleccion.options[seleccion.selectedIndex].value
}

// ejercicio5

function saber() {
    let cant=0
    if (document.getElementById("checkbox1").checked) {
        cant++;
    }
    if (document.getElementById("checkbox2").checked) {
        cant++;
    }
    if (document.getElementById("checkbox3").checked) {
        cant++;
    }
    if (document.getElementById("checkbox4").checked) {
        cant++;
    }
    alert(`la persona sabe ${cant} lenguajes de programacion`)
}

// ejercicio6

function texto() {
   if ( document.getElementById("curriculum").value.length>100) {
       alert("el curriculum es muy largo")
   }else{
    if (isNaN(document.getElementById("curriculum").value)) {
        alert("el curriculum es perfecto")
    }else{ 
        alert("el campo esta vacio")
    }
   }
}

//expresiones Regulares

let PatronLetras = /^[a-zA-Z]/;
let PatronVocal = /[aeiouAEIOUáéíóú]/
let texto1 = `CORECTO`
let texto2 = `INCORRECTO SIGUE LAS ESPECIFICAIONES`

function LetraVocal() {
let Validar=document.getElementById("LetraVocal").value;
    if (PatronLetras.test(Validar) && PatronVocal.test(Validar)) {
        document.getElementById("TextoVerificar").innerHTML=texto1
    }else{
    document.getElementById("TextoVerificar").innerHTML=texto2
}   
}

let patronLetras2= /^[a-zA-Z0-9]*$/;
let patronNumeros = /[0-9]{1}/;
function LetraVocalNumero() {
let Validar=document.getElementById("LetraVocalNumero").value
    if (patronLetras2.test(Validar)&&patronNumeros.test(Validar) && Validar.length>5) {
        document.getElementById("TextoVerificar2").innerHTML=texto1
}else{
    document.getElementById("TextoVerificar2").innerHTML=texto2
}
}

let patronTelefono = /^607\d{7}$/;  
function Numeros() {
texto2 = `Número debe iniciar 607 y contener 10 digitos`
let Validar= document.getElementById("Numeros").value;
    if (patronTelefono.test(Validar)) {
        document.getElementById("TextoVerificar3").innerHTML=texto1
    }else{
        document.getElementById("TextoVerificar3").innerHTML=texto2
    }
}

// CREACION DE NODOS

let elementoNodo = document.createElement("p");
let contenidoNodo = document.createTextNode("Insertado nuevo texto - coex")
elementoNodo.appendChild(contenidoNodo)

// FUNCIONES PARA LA CREACION DE LOS NODOS
function ftnCrear() {   
    let Crear = document.getElementById("nuevoTexto")
    Crear.appendChild(elementoNodo)
}

function ftnDuplicar() {
    let duplicar = document.getElementById("nuevoTexto")
    let copia = duplicar.cloneNode(true)
    document.getElementById("copia").appendChild(copia)
}

function ftnEliminar() {
    let elimianarNodo = document.getElementById("nuevoTexto")
    elimianarNodo.parentNode.removeChild(elimianarNodo)
}

// EXERCISE MANIPULATION IMAGES

const fisrt = document.getElementById("img1V");
const second = document.getElementById("img2V");
const third = document.getElementById("img3V");
const fourth = document.getElementById("img4V");
fisrt.addEventListener("click",()=>{muestra("img1V")})
second.addEventListener("click",()=>{muestra("img2V")})
third.addEventListener("click",()=>{muestra("img3V")})
fourth.addEventListener("click",()=>{muestra("img4V")})
function muestra(num) {
    let images = document.images[num].src
    let big = document.images["pantalla"]
    big.src=images
}

// EXERCISE CREATE LIST
let listaElementos =document.querySelector('#elementos');
// SEND ELEMT SUBMIT
let form=document.querySelector('#frmLista');
form.addEventListener('submit', fnAgregarElementos);
//ENVIAR ELIMINAR EVENTO
listaElementos.addEventListener('click', fnEliminarElementos);
// LISTA DE FUNCION
function fnAgregarElementos(evento){
    evento.preventDefault();
    let newElement=document.getElementById('txtElemento').value;
    // crear un nuevo elemento de lista li
    let li=document.createElement('li');
     // crear un nuevo elemento de botón
    let btnDelete=document.createElement('button');
    // agregar elementos a las clases
    li.className='list-group-item';
    btnDelete.className='btn btn-light btn-outline-danger btn-sm float-end delete';

    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode('X'));
    
    listaElementos.appendChild(li);
    li.appendChild(btnDelete)
}

function fnEliminarElementos(evento){
      // comprobar los elementos de la clase 'delete'
    if(evento.target.classList.contains('delete')){
            let li=evento.target.parentElement;
            listaElementos.removeChild(li);
        
    }
}
