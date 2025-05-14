// Tomamos los elementos del HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador-menu");

// Asignamos la info del LOCAL STORAGE
nombre.innerHTML = localStorage.getItem("nombre") || "-";
nombreJugador.innerHTML = localStorage.getItem("nombre") || "Jugador";

// Recupero el puntaje si ya estaba jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Recupero las categorías jugadas
let categoriasjugadas = [];
const categoriasjugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if (categoriasjugadasLS) {
    categoriasjugadas = categoriasjugadasLS;
}

// Función para agregar eventos y deshabilitar las jugadas
function agregarEventListenerOpciones() {
    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach(categoria => {
        const idCategoria = categoria.id;

        // Si ya fue jugada, deshabilito visualmente
        if (categoriasjugadas.includes(idCategoria)) {
            categoria.classList.add("deshabilitada");
            categoria.classList.add("no-events");

            // OPCIONAL: mostrar texto de "Jugado"
            const jugadoTag = document.createElement("span");
            jugadoTag.textContent = "✔ Ya jugado";
            jugadoTag.classList.add("jugado-label");
            categoria.appendChild(jugadoTag);
        }

        // Agrego el evento solo si no fue jugada
        categoria.addEventListener("click", (e) => {
            if (!categoriasjugadas.includes(idCategoria)) {
                categoriasjugadas.push(idCategoria);
                localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasjugadas));
            }

            localStorage.setItem("categoria-actual", idCategoria);
            location.href = "juego.html";
        });
    });
}

agregarEventListenerOpciones();
