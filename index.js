/// tomo los elementos del thml

const nombre = document.querySelector("#nombre");
const btncomenzar = document.querySelector("#comenzar")

/// Agrego un event listener al boton comenzar
btncomenzar.addEventListener("click", ()=>{
    // seteo los valores del localstorage que seran necesarios
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0)
    // elimino del local storage las categoria que ya jugo
    localStorage.removeItem("categorias-jugadas")

    // lo dirijo a la parte del menu
    location.href = "menu.html";
})