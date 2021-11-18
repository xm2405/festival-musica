document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    
    for(let i =1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src=`build/img/thumb/${i}.webp`;

        //*Añadiendo la funcion popup */
        imagen.onclick = popup;
        imagen.dataset.imagenId = i;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function popup(e){
    const id = parseInt(e.target.dataset.imagenId );

    //*****Generando la imagen*****/
    const imagen = document.createElement('IMG');
    imagen.src=`build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //***Boton para cerrar la imagen***/
    const closeimg = document.createElement('P');
    closeimg.textContent = 'X';
    closeimg.classList.add('btn-cerrar'); 
    
    //***Cerrar imagen*/
    overlay.onclick = function(){
        overlay.remove();
    }

    closeimg.onclick = function(){
        overlay.remove();
    }
    
    overlay.appendChild(closeimg);

    //********Mostrar la imagen PopUp en el html************/
    const body = document.querySelector('body');
    body.appendChild(overlay); 
    

}
