const botonModo = document.getElementById('btn-modo');


if (localStorage.getItem('modo-oscuro') === 'true') {
    document.body.classList.add('dark-mode');
    if (botonModo) botonModo.textContent = "☀️ Modo Luz";
}


if (botonModo) {
    botonModo.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        const esOscuro = document.body.classList.contains('dark-mode');
        localStorage.setItem('modo-oscuro', esOscuro);
        
        botonModo.textContent = esOscuro ? "☀️ Modo Luz" : "🌙 Modo Noche";
    });
}

const buscador = document.getElementById('buscador-proyectos');
const tarjetasProyectos = document.querySelectorAll('.tarjeta-proyectos');

if (buscador) {
    buscador.addEventListener('input', (e) => {
        const textoBusqueda = e.target.value.toLowerCase();

        tarjetasProyectos.forEach(tarjeta => {
           
            const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
            const descripcion = tarjeta.querySelector('p').textContent.toLowerCase();

            
            if (titulo.includes(textoBusqueda) || descripcion.includes(textoBusqueda)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
}

const formulario = document.getElementById('form-inscripcion');

if (formulario) {
    formulario.addEventListener('submit', (e) => {

        e.preventDefault(); 

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const perfil = document.getElementById('tipo-asistente').value;

        if (nombre === "" || email === "") {
            alert("❌ Por favor, completa todos los campos obligatorios.");
            return;
        }

        alert(`¡Inscripción Exitosa! \nBienvenido/a ${nombre}. Te registraste como: ${perfil}.`);
        
        formulario.reset(); 
    });
}

const botonToggleInfo = document.getElementById('btn-toggle-info');
const bloqueInformacion = document.querySelector('#informacion ul'); 
if (botonToggleInfo && bloqueInformacion) {
    bloqueInformacion.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
    bloqueInformacion.style.overflow = "hidden";

    botonToggleInfo.addEventListener('click', () => {
        if (bloqueInformacion.style.display === 'none' || bloqueInformacion.style.display === '') {
            bloqueInformacion.style.display = 'block';
            botonToggleInfo.textContent = "🙈 Ocultar Detalles del Evento";
        } else {
            bloqueInformacion.style.display = 'none';
            botonToggleInfo.textContent = "👀 Mostrar Detalles del Evento";
        }
    });
}