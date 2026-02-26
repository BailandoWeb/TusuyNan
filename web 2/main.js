// Función para cargar componentes HTML externos
function cargarComponente(id, archivo) {
    const elemento = document.querySelector(id);
    if (elemento) {
        fetch(archivo)
            .then(response => {
                if (!response.ok) throw new Error(`Error al cargar ${archivo}`);
                return response.text();
            })
            .then(data => {
                elemento.innerHTML = data;
            })
            .catch(error => console.error(error));
    }
}

// Ejecutar cuando la página esté cargada
document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("#nav-dinamica", "navbar.html");
    cargarComponente("#footer-dinamico", "footer.html");
});




// Función para el menú hamburguesa
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menu && menu.contains(e.target)) {
        navLinks.classList.toggle('active');
        menu.classList.toggle('is-active'); // Opcional: para animar las barras
    } else if (navLinks && navLinks.classList.contains('active')) {
        // Cerrar menú si se hace click fuera o en un enlace
        navLinks.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;
        
        // Calculamos la opacidad basada en cuánto hemos bajado
        // 0.8 es la velocidad de desvanecimiento (ajustable)
        let opacity = 1 - (scrollPos / (windowHeight * 0.6));
        
        if (opacity >= 0) {
            heroContent.style.opacity = opacity;
            // Opcional: un pequeño movimiento hacia arriba mientras desaparece
            heroContent.style.transform = `translateY(${scrollPos * 0.2}px)`;
        } else {
            heroContent.style.opacity = 0;
        }
    }
});
