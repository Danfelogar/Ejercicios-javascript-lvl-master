"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files)
})

const leerArchivo = ar =>{
    for(var i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load",(e)=>{
            let newImg = `<div class="contenedor_img"><img src= '${e.currentTarget.result}'></div>`;
            document.querySelector(".resultado").innerHTML += newImg
        })
    }
}