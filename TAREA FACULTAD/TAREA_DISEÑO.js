// Referencias a elementos del DOM
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const form = document.querySelector('form'); // Asegúrate de que hay un solo formulario

// Función para manejar el envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario para manejarlo con JS

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validaciones
    if (!username || !password) {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        errorMessage.style.color = "red";
        return;
    }

    // Simular un inicio de sesión exitoso
    if (username === "oscarlvrngg@gmail.com" && password === "1234") {
        errorMessage.textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
        errorMessage.style.color = "white";
        window.location.href = "PAGINA_PRINCIPAL.html"; // Redirige a la nueva pág
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
        errorMessage.style.color = "red";
    }
});
