// --- 1. ELEMENTOS DEL DOM ---
const challengeTextElement = document.getElementById('challenge-text');
const nextChallengeBtn = document.getElementById('next-challenge-btn');

// --- 2. BASE DE DATOS DE COMANDOS (VERSIÓN DEFINITIVA +100) ---
const challenges = [
    // PREGUNTAS HOT
    "¿Qué parte de tu cuerpo te gusta más que yo toque?",
    "¿Qué harías si estuviéramos solos en una habitación sin ropa?",
    "¿Tienes alguna fantasía pendiente conmigo?",
    "¿Prefieres hablar sucio o quedarte en silencio?",
    "¿Qué prenda mía te gustaría quitarme primero?",
    "¿Alguna vez pensaste en mí mientras te tocabas?",
    "¿Cómo sería tu “noche perfecta” conmigo?",
    "¿Te atreverías a hacerlo en un lugar público?",
    "¿Te gusta cuando tomo el control o cuando lo tomas tú?",
    "¿Me describirías un sueño erótico que tuviste conmigo?",
    "¿En qué lugar de tu cuerpo te gusta más que te besen?",
    "¿Qué harías si hoy llegara sin avisar a tu casa?",
    "¿Qué tipo de fotos o videos te gustaría que te mande?",
    "¿Qué parte mía te excita solo de recordarla?",
    "¿Qué te gustaría probar juntos que nunca hemos hecho?",
    "¿Qué palabra caliente te enciende al instante?",
    "¿Cómo sería nuestra primera vez (si aún no ha pasado)?",
    "¿Qué harías si ahora mismo te pidiera un video atrevido?",
    "¿Te atreverías a mandarme un audio diciendo lo que me harías?",
    "¿Te excita más hablar por teléfono o por videollamada?",
    "¿Te gustaría que grabáramos algo solo para nosotros?",
    "¿Me describirías paso a paso lo que me harías si me tuvieras al frente?",
    "¿Con qué frecuencia piensas en nosotros teniendo sexo?",
    "¿Hay algo que siempre quisiste decirme, pero no te atreves?",
    "¿Te gusta cuando soy dominante o sumis@?",
    "¿Alguna vez has usado algo para “jugar” pensando en mí?",
    "¿Cuál sería tu outfit ideal para seducirme?",
    "¿Qué me harías si te digo “haz lo que quieras conmigo”?",
    "¿Cuál fue la última vez que te tocaste pensando en mí?",
    "¿Dónde me besarías si solo tuvieras 10 segundos?",
    "¿Qué posición te gustaría intentar conmigo?",
    "¿Qué sonido mío te excita más?",
    "¿Te atreverías a hacer un roleplay conmigo por llamada?",
    "¿Qué me pedirías que te haga sin que puedas decir “no”?",
    "¿Has soñado con algo hot entre nosotros?",
    "¿Dónde te gustaría que te acaricie primero?",
    "¿Te gustaría que hiciéramos un striptease por videollamada?",
    "¿Cuál es tu zona más sensible?",
    "¿Cómo te gustaría despertarte una mañana conmigo?",
    "¿Qué canción te haría pensar en hacer el amor conmigo?",
    "¿Cuál fue tu pensamiento más caliente hoy?",
    "¿Qué te excita más: lo visual o lo que digo?",
    "¿Con qué frecuencia piensas en nuestro próximo encuentro?",
    "¿Qué harías si te reto a excitarme solo con tu voz?",
    "¿Qué prenda te gustaría verme usar… y luego quitarme?",
    "¿Te gustaría ver una versión más atrevida de mí?",
    "¿Qué fantasía crees que deberíamos cumplir sí o sí?",
    "¿Te atreverías a describir cómo se siente estar conmigo?",
    "¿Qué parte mía recordarás si estás solo(a) esta noche?",
    "¿Qué “palabra clave” usarías para decirme que estás hot?",

    // MINI RETOS HOT
    "Mándame un emoji que resuma cómo te sientes ahora (sin palabras).",
    "Escríbeme tu fantasía conmigo en solo 3 frases.",
    "Grábate diciendo una frase caliente en voz baja.",
    "Envíame una foto artística (no explícita) pero sensual.",
    "Mándame un mensaje de voz diciendo qué harías si estuviera en tu cama.",
    "Escribe mi nombre con tu dedo en una parte de tu cuerpo… y mándame foto de la zona (sin mostrar todo).",
    "Mándame un audio con gemidos suaves (sin mencionar palabras).",
    "Envíame un 'te deseo' de la forma más sexy que se te ocurra.",
    "Cuéntame un sueño erótico tuyo en menos de 1 minuto.",
    "Hazme una pregunta hot que no te atreverías en persona.",
    "Mándame una foto de algo que usarías para seducirme (ropa, perfume, etc).",
    "Hazme una confesión que te dé un poco de vergüenza.",
    "Rétame a decirte algo sucio usando solo 5 palabras.",
    "Imagina que estoy tocándote… descríbelo como si fuera real.",
    "Dime 3 cosas que harías conmigo sin censura.",
    "Envíame un mensaje de texto como si estuvieras a punto de tenerme encima.",
    "Escríbeme tu “plan” para una noche caliente entre nosotros.",
    "Rétame a escribirte un texto hot con emojis.",
    "Haz un roleplay por texto: tú dominas y yo obedezco.",
    "Mándame un audio diciendo mi nombre como si lo susurraras en la cama.",
    "Haz una cuenta regresiva: “5 cosas que me harías ahora”.",
    "Rétame a excitarte solo con palabras.",
    "Mándame una pista (foto o audio) de cómo estás vestid@ ahora.",
    "Envíame una foto tuya sonriendo de forma traviesa.",
    "Haz una “confesión hot” y no la expliques.",
    "Dime cómo te gustaría que te bese (¡detalles!).",
    "Escríbeme algo que nunca le dirías a nadie.",
    "Envíame un mensaje que diga: “No sabes lo que me harías si estuvieras aquí”.",
    "Descríbeme el primer movimiento que harías si me ves desnudo/a.",
    "Reescribe una canción romántica… pero vuelve la letra hot.",
    "Mándame una nota de voz diciendo “quiero más”.",
    "Describe cómo me mirarías si estuviéramos cara a cara.",
    "Escríbeme 3 frases sucias (sin usar malas palabras).",
    "Mándame un meme picante que te represente ahora.",
    "Haz una lista: “5 cosas que me harías con los ojos vendados”.",
    "Escríbeme un mini relato hot (menos de 100 palabras).",
    "Grábate diciendo: “Solo piensa en esto esta noche…”",
    "Envíame un mensaje que solo diga “tócame con palabras”.",
    "Dime cuál parte tuya está más caliente ahora.",
    "Mándame una pregunta que tú también deberás responder.",
    "Dime: “Esta noche quiero que sueñes que yo te…”",
    "Mándame una foto con una mirada que diga “hazme lo que quieras”.",
    "Dime cómo te excito más: lento o rápido.",
    "Rétame a seducirte sin fotos ni voz, solo con texto.",
    "Mándame un emoji escondido entre palabras que solo yo entenderé.",
    "Dime qué harías si esta llamada no tuviera ropa.",
    "Rétame a decirte un secreto hot ahora mismo.",
    "Escríbeme como si fuera la última vez que me ves.",
    "Dime cómo te gustaría que te acaricie si estuviéramos viendo una peli.",
    "Mándame una pista: ¿estás “caliente”, “ardiendo” o “a punto de explotar”?"
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

// Asignar la función al clic del botón
nextChallengeBtn.addEventListener('click', showNewChallenge);
