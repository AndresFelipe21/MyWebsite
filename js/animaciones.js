// Obtener referencias a los elementos HTML
const skillsButton = document.getElementById('skillsButton');
const toolsButton = document.getElementById('toolsButton');
const skillsContainer = document.getElementById('skillsContainer');
const toolsContainer = document.getElementById('toolsContainer');

// Función para mostrar los contenidos de Skills
function showSkills() {
    skillsContainer.style.display = 'block';
    toolsContainer.style.display = 'none';
}

// Función para mostrar los contenidos de Tools
function showTools() {
    skillsContainer.style.display = 'none';
    toolsContainer.style.display = 'block';
}

// Mostrar el contenedor de Skills al cargar la página
window.addEventListener('load', showSkills);

// Agregar eventos para los botones
skillsButton.addEventListener('click', showSkills);
toolsButton.addEventListener('click', showTools);
