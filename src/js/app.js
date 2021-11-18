document.addEventListener('DOMContentLoaded', function(){
    
    navegacionFija();

});

   function navegacionFija() {
 
    const barra = document.querySelector('.header');
 
    //Registrar el interseccion observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
 
    //Elemento a observar
    observer.observe(document.querySelector('.video'));
}


