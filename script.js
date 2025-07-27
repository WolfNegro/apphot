// --- 1. ELEMENTOS DEL DOM ---
const challengeTextElement = document.getElementById('challenge-text');
const nextChallengeBtn = document.getElementById('next-challenge-btn');

// --- 2. BASE DE DATOS DE COMANDOS ---
// Aquí está la lista completa y definitiva de retos.
const challenges = [
    // --- Nivel 1: Provocación ---
    "Describe con detalle qué es lo que más te gusta de mi cuerpo.",
    "Envíame un audio susurrando mi nombre de la forma más sensual posible.",
    "Tienes 30 segundos para describirme una fantasía que tengas conmigo.",
    "Elige una parte de tu cuerpo, bésala y mándame una foto de ello.",
    "Mírame a los ojos (por la cámara) y muérdete el labio inferior lentamente.",
    "Dime qué prenda de la que llevo puesta te gustaría quitarme primero y por qué.",
    "Mándame un GIF que represente tus intenciones conmigo ahora mismo.",
    "Describe mi olor como si pudieras olerme en este instante.",
    "Escribe un poema corto (3 líneas) sobre mis labios.",
    "Tararea una canción sexy y dedícamela.",
    "Ponte un cubito de hielo en el cuello y describe la sensación.",
    "Cuéntame qué pensaste la primera vez que me viste.",
    "Dame un apodo secreto y perverso que solo usaremos nosotros.",
    "Pasa la punta de tus dedos lentamente por tus brazos.",
    "Cierra los ojos e imagina mi mano en tu nuca. ¿Qué sientes?",
    "Envíame la última foto sexy que guardaste en tu teléfono.",
    "Describe el sabor que tendría un beso tuyo ahora mismo.",
    "Dime una sola palabra que describa cómo te hago sentir.",
    "Mueve tus caderas lentamente al ritmo de una canción imaginaria.",
    "Hazme un cumplido sobre mi inteligencia o mi personalidad, pero con un tono muy pícaro.",
    "Respira hondo y suelta el aire muy despacio, mirándome a los ojos.",

    // --- Nivel 2: Acción ---
    "Quítate una prenda de ropa. Yo elijo cuál.",
    "Quítate una prenda de ropa. Tú eliges cuál.",
    "Baila para mí los próximos 30 segundos de la canción más provocativa que encuentres.",
    "Escribe mi nombre en alguna parte de tu cuerpo (muslo, pecho, vientre) y envíame la foto.",
    "Date un masaje en el cuello y los hombros como si lo estuviera haciendo yo.",
    "Mándame un audio de 10 segundos solo con tu respiración agitada.",
    "Acaricia tus piernas desde los tobillos hasta los muslos, muy lentamente.",
    "Ponte de espaldas a la cámara y mira por encima del hombro de forma seductora.",
    "Desabróchate un botón de la camisa o baja un poco la cremallera de tu pantalón.",
    "Relata, como si fuera un audiolibro erótico, cómo te prepararías para una noche conmigo.",
    "Mete los dedos por debajo de tu camiseta y acaricia tu abdomen.",
    "Envíame una foto de tu cuello y tus clavículas.",
    "Haz 'striptease' solo con tus manos, sin quitarte la ropa.",
    "Recuéstate de forma provocativa y mantén la pose durante 15 segundos.",
    "Describe en voz alta los pasos que seguirías para desvestirme.",
    "Juega con tu pelo de la forma más sexy que sepas.",
    "Mándame una foto de la parte de tu cuerpo que más te excita.",
    "Si tuvieras que atarme, ¿dónde empezarías y con qué?",
    "Muestra un trozo de piel que normalmente no se ve (espalda baja, abdomen, hombro...).",
    "Imita el sonido que harías si te diera un mordisco suave en el lóbulo de la oreja.",
    "Haz 5 sentadillas de espaldas a la cámara.",

    // --- Nivel 3: Confesiones Atrevidas ---
    "¿Cuál es la locura más grande que harías conmigo en la cama?",
    "Hazme la pregunta más atrevida que nunca te has animado a hacerme.",
    "Describe el sonido que harías si te estuviera besando el cuello ahora mismo.",
    "Dime tres lugares de tu cuerpo donde te mueres por que te bese.",
    "Confiesa cuál ha sido el sueño más 'hot' que has tenido conmigo.",
    "Mándame un audio gimiendo suavemente.",
    "Tócate en algún lugar y describe con detalle la textura de tu piel y la sensación.",
    "Si pudieras tenerme de una sola forma esta noche, ¿sería dominante o sumisa?",
    "Describe el sabor de tu propia saliva en este momento.",
    "Susurra las tres palabras más sucias que se te ocurran ahora.",
    "Grábate diciendo 'Soy todo/a tuyo/a' con la voz más rendida que puedas poner.",
    "Imagina mis dedos recorriendo tu espalda. ¿Dónde quieres que se detengan?",
    "Envíame una foto de tu boca semiabierta.",
    "Cuéntame el sitio más arriesgado donde te gustaría hacerlo conmigo.",
    "De todas las cosas que hemos hecho, ¿cuál es la que más te gustaría repetir ahora mismo?",
    "Si yo fuera un objeto, ¿qué objeto serías tú para complementarnos?",
    "Describe tu orgasmo más intenso, pero sin usar palabras explícitas.",
    "Mete la mano bajo tu ropa y dime qué temperatura tiene tu piel.",
    "Dime una orden. Una sola orden que quieres que yo cumpla después de esto.",
    "Confiesa un fetiche que no me hayas contado.",
    "Contesta mi próxima pregunta solo con gemidos o suspiros."
];

// --- 3. LÓGICA DEL JUEGO ---

let lastChallengeIndex = -1; // Para evitar que se repita el mismo reto seguido

function showNewChallenge() {
    let newIndex;
    
    // Bucle para asegurarse de que el nuevo reto no es el mismo que el anterior
    do {
        newIndex = Math.floor(Math.random() * challenges.length);
    } while (challenges.length > 1 && newIndex === lastChallengeIndex);
    
    lastChallengeIndex = newIndex;
    const newChallenge = challenges[newIndex];
    
    // Animación de fundido para el texto
    challengeTextElement.style.opacity = '0';
    setTimeout(() => {
        challengeTextElement.textContent = newChallenge;
        challengeTextElement.style.opacity = '1';
    }, 400); // Coincide con la transición en el CSS
}

// Asignar la función al clic del botón
nextChallengeBtn.addEventListener('click', showNewChallenge);