// --- 1. ELEMENTOS DEL DOM ---
const challengeTextElement = document.getElementById('challenge-text');
const nextChallengeBtn = document.getElementById('next-challenge-btn');

// --- 2. BASE DE DATOS DE COMANDOS (VERSIÓN EXTENDIDA +100) ---
const challenges = [
    // --- Nivel 1: Provocación e Insinuación ---
    "Describe con detalle qué es lo que más te gusta de mi físico.",
    "Envíame un audio susurrando mi nombre de la forma más sensual posible.",
    "Describe la primera vez que pensaste en mí de forma 'traviesa'.",
    "Elige una parte de tu cuerpo, bésala y mándame una foto de ello.",
    "Mírame a los ojos (por la cámara) y muérdete el labio inferior lentamente.",
    "¿Qué prenda de la que llevo puesta te gustaría quitarme primero y por qué?",
    "Describe mi olor como si pudieras olerme en este instante.",
    "Escribe un poema corto (3 líneas) sobre mis labios o mis ojos.",
    "Pasa la punta de tus dedos lentamente por tus propios brazos, imaginando que son los míos.",
    "Cierra los ojos e imagina mi mano en tu nuca. ¿Qué sientes?",
    "Describe el sabor que tendría un beso tuyo ahora mismo.",
    "Dime una sola palabra que describa cómo te hago sentir en este momento.",
    "Mueve tus caderas lentamente al ritmo de una canción imaginaria.",
    "Hazme un cumplido sobre mi inteligencia, pero con un tono muy pícaro.",
    "¿Qué es lo más loco que has fantaseado hacer conmigo?",
    "Si pudieras oler una parte de mi cuerpo ahora mismo, ¿cuál sería?",
    "Envíame un emoji que resuma lo que quieres hacerme.",
    "Dime qué canción te recuerda a una noche de pasión.",
    "Describe el ambiente perfecto para una noche romántica y salvaje.",
    "¿Qué es lo que más te excita de mi voz?",
    "Posa de una manera que creas que me volvería loco/a.",
    "Cuéntame el último sueño que tuviste conmigo, sin omitir detalles.",
    "Mándame un audio contándome un secreto que nadie más sepa.",
    "Si tuvieras que describirme como un postre, ¿cuál sería y por qué?",
    "Aprieta los muslos y describe la sensación.",
    "¿Qué pasaría si estuviéramos solos en un ascensor que se detiene?",
    "Envíame una foto de tu sonrisa más pícara.",
    "Describe cómo te gusta que te besen en el cuello.",
    "Imagina que te doy un masaje. ¿Dónde te gustaría que empezara?",
    "Dime qué ropa interior te pondrías para una noche especial conmigo.",
    "Contesta la siguiente pregunta usando solo el lenguaje corporal.",

    // --- Nivel 2: Acción y Atrevimiento ---
    "Quítate una prenda de ropa. Yo elijo cuál.",
    "Quítate una prenda de ropa. Tú eliges cuál.",
    "Baila para mí los próximos 30 segundos de una canción provocativa.",
    "Escribe mi nombre en alguna parte de tu cuerpo (muslo, pecho, vientre) y envíame la foto.",
    "Mándame un audio de 10 segundos solo con tu respiración agitada.",
    "Acaricia tus piernas desde los tobillos hasta los muslos, muy lentamente.",
    "Ponte de espaldas a la cámara y mira por encima del hombro de forma seductora.",
    "Desabróchate un botón de la camisa o baja un poco la cremallera.",
    "Relata, como si fuera un audiolibro erótico, cómo te prepararías para una noche conmigo.",
    "Mete los dedos por debajo de tu camiseta y acaricia tu abdomen.",
    "Envíame una foto de tu cuello y tus clavículas, bien de cerca.",
    "Recuéstate de forma provocativa y mantén la pose durante 15 segundos.",
    "Describe en voz alta los pasos que seguirías para desvestirme ahora mismo.",
    "Juega con tu pelo de la forma más sexy que sepas.",
    "Mándame una foto de la parte de tu cuerpo que más te excita a ti.",
    "Muestra un trozo de piel que normalmente no se ve (espalda baja, cadera, nuca...).",
    "Imita el sonido que harías si te diera un mordisco suave en el lóbulo de la oreja.",
    "Haz 5 sentadillas de espaldas a la cámara, muy despacio.",
    "Pasa un cubito de hielo por tus labios y luego por tu pecho.",
    "Date una palmada en el trasero y mírame con cara de 'he sido malo/a'.",
    "Mete un dedo en tu boca y chúpalo sensualmente.",
    "Mándame un video corto de ti caminando hacia la cámara como si vinieras a buscarme.",
    "Abre y cierra las piernas lentamente cinco veces.",
    "Tócate el pezón por encima de la ropa y describe la sensación.",
    "Envíame una foto de tus pies.",
    "Muestra tu ropa interior por encima del pantalón o la falda.",
    "Siéntate en el suelo y estira las piernas hacia la cámara.",
    "Dame un beso francés apasionado... a la cámara.",
    "Grábate diciendo 'estoy listo/a para ti' de tres formas diferentes: tímida, autoritaria y desesperada.",
    "Abre la boca y saca la lengua como si fueras a lamerme.",

    // --- Nivel 3: Confesiones y Actos Explícitos ---
    "¿Cuál es la locura más grande que harías conmigo en la cama AHORA MISMO?",
    "Hazme la pregunta más sucia y directa que nunca te has animado a hacerme.",
    "Describe el sonido exacto que harías si te estuviera besando el cuello ahora mismo.",
    "Dime tres lugares de tu cuerpo donde te mueres por que te bese con intensidad.",
    "Confiesa cuál ha sido el sueño más húmedo que has tenido conmigo.",
    "Mándame un audio gimiendo mi nombre suavemente.",
    "Tócate en algún lugar íntimo y describe con detalle la textura y la sensación.",
    "Si pudieras tenerme de una sola forma esta noche, ¿sería dominante o sumisa? Demuéstralo.",
    "Grábate diciendo 'Soy todo/a tuyo/a, hazme lo que quieras' con la voz más rendida que puedas poner.",
    "Imagina mis dedos recorriendo tu cuerpo. ¿Dónde quieres que se detengan y qué quieres que hagan?",
    "Envíame una foto de tu boca semiabierta, como si esperaras un beso.",
    "Cuéntame el sitio más arriesgado donde fantaseas con hacerlo conmigo.",
    "De todas las cosas que hemos hecho, ¿cuál es la que más te gustaría repetir ahora mismo?",
    "Describe tu orgasmo más intenso, pero sin usar palabras explícitas, solo sensaciones.",
    "Mete la mano bajo tu ropa interior y dime qué temperatura tiene tu piel.",
    "Dime una orden sexual. Una sola orden que quieres que yo cumpla después de esto.",
    "Confiesa un fetiche que no me hayas contado y por qué te atrae.",
    "Contesta mi próxima pregunta solo con gemidos o suspiros.",
    "¿Qué es lo más pervertido que has hecho o pensado hacer?",
    "Simula un orgasmo para mí, solo con el sonido de tu voz.",
    "Mándame una foto de la marca que te dejaría un chupetón en el muslo.",
    "Quítate la parte de abajo de tu ropa.",
    "Describe cómo te tocarías si yo te estuviera mirando.",
    "¿Te gusta más dar o recibir? ¿Por qué?",
    "Si pudieras usar un juguete conmigo, ¿cuál sería y cómo lo usarías?",
    "Envíame una foto de tu cuerpo desnudo, pero tapando las partes clave de forma creativa.",
    "¿Cuál es tu 'palabra segura' o una que te gustaría que tuviéramos?",
    "Pon los ojos en blanco como si estuvieras en pleno éxtasis.",
    "Mándame un audio diciéndome lo húmeda/dura que te he puesto."
];

// --- 3. LÓGICA DEL JUEGO ---
let lastChallengeIndex = -1;

function showNewChallenge() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * challenges.length);
    } while (challenges.length > 1 && newIndex === lastChallengeIndex);
    
    lastChallengeIndex = newIndex;
    const newChallenge = challenges[newIndex];
    
    challengeTextElement.style.opacity = '0';
    setTimeout(() => {
        challengeTextElement.textContent = newChallenge;
        challengeTextElement.style.opacity = '1';
    }, 400);
}

nextChallengeBtn.addEventListener('click', showNewChallenge);
