// Función para mostrar mensaje con estilo
function mostrarMensaje() {
  let mensaje = document.getElementById("mensaje"); // corregido getElementById
  mensaje.innerHTML = "Cuida y protege a los animales";
  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.opacity = "1"; // corregido "l" a "1"
    mensaje.style.transform = "translateY(0)";
  }, 50);
}

// Cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const showButton = document.getElementById('show-message-button');
  const messageDiv = document.getElementById('my-message');

  showButton.addEventListener('click', function() {
    // Usamos IF para alternar visibilidad
    if (messageDiv.classList.contains('show')) {
      messageDiv.classList.remove('show'); // Ocultar
    } else {
      messageDiv.classList.add('show'); // Mostrar
      messageDiv.innerHTML = "Cuida a tus mascotas"; // Texto del primer mensaje
    }
  });

  const showButton2 = document.getElementById('show-message-button-2');
  const messageDiv2 = document.getElementById('my-message-2');

  showButton2.addEventListener('click', function() {
    if (messageDiv2.classList.contains('show')) {
      messageDiv2.classList.remove('show'); // Ocultar
    } else {
      messageDiv2.classList.add('show'); // Mostrar
      messageDiv2.innerHTML = "Ellos también tienen sentimientos"; // Texto del segundo mensaje
    }
  });
});
