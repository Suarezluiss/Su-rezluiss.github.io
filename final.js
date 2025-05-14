// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    const nombreJugador = document.querySelector("#nombre-jugador-final");  // Corregido el ID
    const puntajeFinal = document.querySelector("#puntaje-final");  // Corregido el ID
    const totalAcertadas = document.querySelector("#total-acertadas");  // Corregido el ID
    const totalNoAcertadas = document.querySelector("#total-no-acertadas");  // Corregido el ID

    const btnComenzar = document.querySelector("#btn-comenzar");

    // Obtener los valores de localStorage
    nombre.innerHTML = localStorage.getItem("nombre");  // Corregido el nombre clave
    nombreJugador.innerHTML = localStorage.getItem("nombre");  // Asumo que se guarda el nombre en el mismo lugar
    txtPuntaje.innerHTML = localStorage.getItem("puntaje-total");
    puntajeFinal.innerHTML = localStorage.getItem("puntaje-total") + " Puntos";

    // Calcular las respuestas correctas e incorrectas
    const correctas = parseInt(localStorage.getItem("puntaje-total")) / 100;
    const incorrectas = 30 - correctas;

    // Mostrar el puntaje final y las respuestas correctas e incorrectas
    totalAcertadas.innerHTML = correctas;
    totalNoAcertadas.innerHTML = incorrectas;

    // Manejar el evento de reiniciar el juego
    btnComenzar.addEventListener("click", () => {
        location.href = "index.html";  // Redirige a la página principal
    });
});
