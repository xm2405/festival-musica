function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".video"))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src=`build/img/thumb/${n}.webp`,t.onclick=popup,t.dataset.imagenId=n;const c=document.createElement("LI");c.appendChild(t),e.appendChild(c)}}function popup(e){const n=parseInt(e.target.dataset.imagenId),t=document.createElement("IMG");t.src=`build/img/grande/${n}.webp`;const c=document.createElement("DIV");c.appendChild(t),c.classList.add("overlay");const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),c.onclick=function(){c.remove()},o.onclick=function(){c.remove()},c.appendChild(o);document.querySelector("body").appendChild(c)}document.addEventListener("DOMContentLoaded",(function(){navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map