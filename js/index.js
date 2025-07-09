//Mas Info
const btnMostrarInfo1 = document.getElementById('btnMostrarInfo1');
const btnMostrarInfo2 = document.getElementById('btnMostrarInfo2');
const infoAdicional = document.getElementById('infoAdicional');
const btnCerrarInfo = document.getElementById('btnCerrarInfo');

const overlay = document.createElement('div');
overlay.classList.add('overlay'); 
document.body.appendChild(overlay); 
if ((btnMostrarInfo1 || btnMostrarInfo2) && infoAdicional && btnCerrarInfo) {
    btnMostrarInfo1.addEventListener('click', function(event) {
        event.preventDefault(); 
        infoAdicional.style.display = 'block'; 
        overlay.style.display = 'block'; 
        document.body.style.overflow = 'hidden'; 
    });

    btnMostrarInfo2.addEventListener('click', function(event) {
        event.preventDefault(); 
        infoAdicional.style.display = 'block'; 
        overlay.style.display = 'block'; 
        document.body.style.overflow = 'hidden';
    });

    btnCerrarInfo.addEventListener('click', function() {
        infoAdicional.style.display = 'none'; 
        overlay.style.display = 'none'; 
        document.body.style.overflow = ''; 
    });

    overlay.addEventListener('click', function() {
        infoAdicional.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    } else {
        console.error("Uno o más elementos del DOM no fueron encontrados en el DOM.");
    }

document.getElementById('ir-nosotros').addEventListener('click', function (e){
    e.preventDefault();
    const pag2 = document.getElementById('seccion-nosotros');
    const offset = window.innerHeight - pag2.offsetHeight; 
    const targetY = pag2.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
})