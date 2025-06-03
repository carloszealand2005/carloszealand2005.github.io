
//Conseguir los elementos del DOM para la navegación
const navLinks = document.querySelectorAll('nav ul li a');
const homeContent = document.getElementById('home-content');
const projectsContent = document.getElementById('projects-content');
const blogContent = document.getElementById('blog-content');
const contentSections = [homeContent, projectsContent, blogContent]; // Array de secciones de contenido
// Función para ocultar todas las secciones de contenido


navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace (#)

        
        const targetId = this.getAttribute('href').substring(1) + '-content'; // Obtiene el ID de la sección a mostrar

        // Ocultar todas las secciones
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección correspondiente
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block'; // O 'flex' si es necesario
        }

        console.log(`Mostrando sección: ${targetId}`);

        // Opcional: Actualizar la clase 'active' en la navegación
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});