const preguntas = [
    {
        id: 1, categoria: "general",
        titulo: "¿Qué podemos hacer para reducir el uso de plásticos?",
        opcionA: "Usar bolsas reutilizables",
        opcionB: "Comprar más productos empaquetados",
        opcionC: "Usar plásticos de un solo uso",
        opcionD: "Ignorar el problema",
        correcta: "A"
    },
    {
        id: 2, categoria: "general",
        titulo: "¿Cuál es una fuente de energía renovable?",
        opcionA: "Carbón",
        opcionB: "Petróleo",
        opcionC:"Energía solar",
        opcionD: "Gas natural",
        correcta: "C"

    },
    {
        id: 3, categoria: "general",
        titulo: "¿Qué gas contribuye más al efecto invernadero?",
        opcionA: "Oxígeno",
        opcionB: "Dióxido de carbono",
        opcionC: "Nitrógeno",
        opcionD:"Hidrógeno",
        correcta: "B"
    },
    {
        id: 4, categoria: "general",
        titulo: "¿Qué hábito ayuda a conservar el agua?",
        opcionA: "Dejar el grifo abierto",
        opcionB: "Regar el jardín al mediodía",
        opcionC: "Reparar fugas de agua",
        opcionD: "Lavar el coche todos los días",
        correcta: "C" 
    },
    {
        id: 5, categoria: "general",
        titulo: "¿Cuál es una forma efectiva de reducir la contaminación del aire?",
        opcionA: "Usar el automóvil diariamente",
        opcionB: "Fomentar el uso del transporte público",
        opcionC: "Quemar basura",
        opcionD: "Usar aerosoles en exceso",
        correcta: "B"
    },
    
    { id: 6, categoria: "aire",
        titulo: "¿Qué es la contaminación del aire?",
        opcionA: "Mezcla de gases beneficiosos",
        opcionB: "Presencia de sustancias nocivas en la atmósfera",
        opcionC: "Aire limpio de las montañas",
        opcionD: "Viento natural",
        correcta: "B" 
    },
    { id: 7, categoria: "aire",
        titulo: "¿Cuál de los siguientes es un contaminante del aire?",
        opcionA: "Nitrógeno",
        opcionB: "Oxígeno",
        opcionC: "Monóxido de carbono",
        opcionD: "Helio",
        correcta: "C" 
    },
    { id: 8, categoria: "aire",
        titulo: "¿Qué acción ayuda a reducir la contaminación del aire?",
        opcionA: "Quemar basura",
        opcionB: "Utilizar transporte público",
        opcionC: "Usar más automóviles",
        opcionD: "Fumar en espacios abiertos",
        correcta: "B" 
    },
    { id: 9, categoria: "aire",
        titulo: "¿Qué gas se emite principalmente por los vehículos?",
        opcionA: "Dióxido de carbono",
        opcionB: "Ozono",
        opcionC: "Argón",
        opcionD: "Oxígeno",
        correcta: "A" 
    },
    { id: 10, categoria: "aire",
        titulo: "¿Qué provoca el esmog?",
        opcionA: "Niebla natural",
        opcionB: "Lluvia ligera",
        opcionC: "Mezcla de contaminantes con niebla",
        opcionD: "Oxígeno puro",
        correcta: "C" 
    },

    { id: 11, categoria: "mar", titulo: "¿Qué es la contaminación marina?", opcionA: "El aumento del nivel del mar", opcionB: "El calentamiento del océano", opcionC: "La presencia de desechos y sustancias tóxicas en el mar", opcionD: "La pesca sostenible", correcta: "C" },
    { id: 12, categoria: "mar", titulo: "¿Cuál es una de las principales causas de contaminación en los océanos?", opcionA: "El ecoturismo", opcionB: "La agricultura orgánica", opcionC: "El vertido de plásticos", opcionD: "La navegación recreativa", correcta: "C" },
    { id: 13, categoria: "mar", titulo: "¿Qué efecto tiene el plástico en los animales marinos?", opcionA: "Les sirve de alimento saludable", opcionB: "Los protege del sol", opcionC: "Puede causarles la muerte al ingerirlo", opcionD: "No tiene ningún efecto", correcta: "C" },
    { id: 14, categoria: "mar", titulo: "¿Qué podemos hacer para reducir la contaminación del mar?", opcionA: "Tirar basura en la playa", opcionB: "Evitar productos de un solo uso", opcionC: "Usar más fertilizantes", opcionD: "Cazar animales marinos", correcta: "B" },
    { id: 15, categoria: "mar", titulo: "¿Qué es una zona muerta en el océano?", opcionA: "Una zona sin turistas", opcionB: "Una zona sin vida marina por falta de oxígeno", opcionC: "Una zona protegida", opcionD: "Una playa contaminada", correcta: "B" },
    
    { id: 16, categoria: "industrias", titulo: "¿Cómo contribuyen las industrias a la contaminación del aire?", opcionA: "Liberando oxígeno", opcionB: "Plantando árboles", opcionC: "Emitiendo gases tóxicos", opcionD: "Reduciendo la producción", correcta: "C" },
    { id: 17, categoria: "industrias", titulo: "¿Qué tipo de residuos generan comúnmente las industrias?", opcionA: "Solo residuos orgánicos", opcionB: "Residuos peligrosos y tóxicos", opcionC: "Residuos totalmente reciclables", opcionD: "Solo agua limpia", correcta: "B" },
    { id: 18, categoria: "industrias", titulo: "¿Qué medida puede reducir el impacto ambiental de las industrias?", opcionA: "Aumentar la producción sin control", opcionB: "Eliminar controles de calidad", opcionC: "Implementar tecnologías limpias", opcionD: "Reducir el reciclaje", correcta: "C" },
    { id: 19, categoria: "industrias", titulo: "¿Qué recurso natural se ve especialmente afectado por la actividad industrial?", opcionA: "La luz solar", opcionB: "El viento", opcionC: "El agua", opcionD: "La arena", correcta: "C" },
    { id: 20, categoria: "industrias", titulo: "¿Qué impacto tienen las industrias en los ecosistemas?", opcionA: "Los restauran automáticamente", opcionB: "No tienen ningún impacto", opcionC: "Pueden degradar o destruir hábitats", opcionD: "Crean nuevos ecosistemas", correcta: "C" },
    

    { id: 21, categoria: "clasificacion", titulo: "¿Qué color de contenedor se usa comúnmente para residuos orgánicos?", opcionA: "Azul", opcionB: "Verde", opcionC: "Gris", opcionD: "Marrón", correcta: "D" },
    { id: 22, categoria: "clasificacion", titulo: "¿Qué tipo de residuo debe ir en el contenedor amarillo?", opcionA: "Papel", opcionB: "Plásticos y envases metálicos", opcionC: "Vidrio", opcionD: "Desechos orgánicos", correcta: "B" },
    { id: 23, categoria: "clasificacion", titulo: "¿Dónde deben colocarse los restos de comida dentro del instituto?", opcionA: "Papelera azul", opcionB: "Contenedor gris", opcionC: "Contenedor marrón", opcionD: "Contenedor verde", correcta: "C" },
    { id: 24, categoria: "clasificacion", titulo: "¿Qué color de contenedor se usa para el vidrio?", opcionA: "Amarillo", opcionB: "Verde", opcionC: "Marrón", opcionD: "Rojo", correcta: "B" },
    { id: 25, categoria: "clasificacion", titulo: "¿Qué residuos van en el contenedor azul?", opcionA: "Papel y cartón", opcionB: "Vidrio", opcionC: "Orgánicos", opcionD: "Plásticos", correcta: "A" },
    

    { id: 26, categoria: "Bosques", titulo: "¿Qué función importante cumplen los bosques para el planeta?", opcionA: "Aumentan la contaminación", opcionB: "Producen dióxido de carbono", opcionC: "Regulan el clima y generan oxígeno", opcionD: "Secan los ríos", correcta: "C" },
    { id: 27, categoria: "Bosques", titulo: "¿Qué es la deforestación?", opcionA: "Plantación de árboles", opcionB: "Cuidado del bosque", opcionC: "Tala excesiva y sin control de árboles", opcionD: "Riego de áreas verdes", correcta: "C" },
    { id: 28, categoria: "Bosques", titulo: "¿Cómo afecta la deforestación a los animales?", opcionA: "Mejora su alimentación", opcionB: "Les proporciona más refugios", opcionC: "Destruye su hábitat natural", opcionD: "Aumenta su reproducción", correcta: "C" },
    { id: 29, categoria: "Bosques", titulo: "¿Qué podemos hacer para proteger los bosques?", opcionA: "Cortar árboles sin permiso", opcionB: "Reforestar y evitar incendios", opcionC: "Construir más carreteras", opcionD: "Hacer fogatas en zonas secas", correcta: "B" },
    { id: 30, categoria: "Bosques", titulo: "¿Qué tipo de animales viven comúnmente en los bosques?", opcionA: "Peces tropicales", opcionB: "Animales marinos", opcionC: "Aves, mamíferos y reptiles", opcionD: "Animales de granja", correcta: "C" },
    


]


// tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");

// mantengo el número de preguntas actual
let numPreguntasActual = 0;

// controlo el puntaje que lleva hasta el momento
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// cargo las preguntas del tema elegido
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientepregunta(num) {
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#A");
    const opcionB = document.querySelector("#B");
    const opcionC = document.querySelector("#C");
    const opcionD = document.querySelector("#D");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.remove("correcta", "incorrecta", "no-events");
        opcion.removeEventListener("click", agregarEventListenerBoton); // eliminar viejo listener
        opcion.addEventListener("click", agregarEventListenerBoton);    // agregar nuevo
    });

    txtPuntaje.classList.remove("efecto");
}

cargarSiguientepregunta(numPreguntasActual);

function agregarEventListenerBoton(e) {
    const idSeleccionado = e.currentTarget.id;
    const idCorrecto = preguntasCategoria[numPreguntasActual].correcta;

    if (idSeleccionado === idCorrecto) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal += 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + idCorrecto);
        if (correcta) {
            correcta.classList.add("correcta");
        }
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });
}

// siguiente pregunta
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntasActual++;
    if (numPreguntasActual <= 4) {
        cargarSiguientepregunta(numPreguntasActual);
    } else {
        const categoriasjugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        if (categoriasjugadasLS.length < 6) {
            location.href = "menu.html";
        } else {
            location.href = "final.html";
        }
    }
});
