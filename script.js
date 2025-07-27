// --- 1. ELEMENTOS DEL DOM ---
const challengeTextElement = document.getElementById('challenge-text');
const nextChallengeBtn = document.getElementById('next-challenge-btn');

// --- 2. MOTOR LOCAL (NUESTRO PLAN B, CON LA ÚLTIMA VERSIÓN BUENA) ---
const localDB = {
    components: {
        bodyParts: ["tu cuello", "tus labios", "tu espalda baja", "tus muslos", "tus hombros", "el lóbulo de tu oreja", "tus caderas", "tu abdomen", "tus manos"],
        adjectives: ["apasionado", "lento y profundo", "travieso", "dominante", "tierno e inesperado", "prohibido"],
        topics: ["nuestro primer beso", "la última vez que nos vimos", "lo que más te gusta de mí", "una fantasía secreta"]
    },
    baseChallenges: [
        { level: 1, text: "¿Qué es lo primero que harías si estuviera ahora mismo a tu lado?" }, { level: 1, text: "Usa tres emojis para describir tus ganas de verme." }, { level: 1, text: "Confiesa cuál de mis rasgos físicos te distrae más." }, { level: 1, text: "Si tuvieras que dedicarme una canción ahora mismo, ¿cuál sería y por qué?" }, { level: 1, text: "Mándame una foto de tu sonrisa más pícara." }, { level: 2, text: "Quítate una prenda de ropa, la que tú elijas, y describe cómo te sientes." }, { level: 2, text: "Mándame un audio con tu respiración, imaginando que estoy muy cerca." }, { level: 2, text: "Hazme una confesión: ¿Qué es lo más atrevido que has pensado hacer conmigo?" }, { level: 2, text: "Mírame a los ojos a través de la cámara y muérdete el labio inferior muy lentamente." }, { level: 3, text: "Mándame un audio gimiendo mi nombre como si no pudieras aguantar más." }, { level: 3, text: "Dime una orden explícita que te gustaría que yo cumpliera ahora mismo, sin peros." }, { level: 3, text: "Simula un orgasmo para mí, solo con el sonido de tu voz." }, { level: 3, text: "Describe cómo te tocarías si yo te estuviera mirando desde el otro lado de la habitación." }
    ],
    templateChallenges: [
        { level: 1, template: () => `Describe con detalle un beso __ADJECTIVE__.` }, { level: 1, template: () => `Hazme una confesión sobre __TOPIC__.` }, { level: 2, template: () => `Envíame una foto artística de __BODY_PART__.` }, { level: 2, template: () => `Describe la sensación de mis manos acariciando __BODY_PART__.` }, { level: 3, template: () => `Fantasea en voz alta sobre qué pasaría si te ato las manos y beso __BODY_PART__.` }, { level: 3, template: () => `¿Qué es lo más pervertido que te gustaría probar relacionado con __BODY_PART__?` }
    ]
};

// --- 3. ESTADO DEL JUEGO ---
const gameState = {
    heatLevel: 1,
    challengeCount: 0,
    history: [],
};

// --- 4. LÓGICA DEL MOTOR HÍBRIDO ---

// Plan B: Genera un reto desde nuestra base de datos local
function generateChallengeFromLocalDB() {
    console.warn("-> Usando motor local de respaldo.");
    let challengeText = "";
    const heat = gameState.heatLevel;
    const availableBase = localDB.baseChallenges.filter(c => c.level <= heat);
    const availableTemplates = localDB.templateChallenges.filter(t => t.level <= heat);

    do {
        if (Math.random() < 0.8 && availableBase.length > 0) {
            challengeText = selectRandom(availableBase).text;
        } else {
            const templateData = selectRandom(availableTemplates);
            const templateFunc = templateData.template;
            let generatedText = templateFunc.toString();
            if (generatedText.includes('__BODY_PART__')) { challengeText = templateFunc().replace('__BODY_PART__', selectRandom(localDB.components.bodyParts)); }
            else if (generatedText.includes('__ADJECTIVE__')) { challengeText = templateFunc().replace('__ADJECTIVE__', selectRandom(localDB.components.adjectives)); }
            else if (generatedText.includes('__TOPIC__')) { challengeText = templateFunc().replace('__TOPIC__', selectRandom(localDB.components.topics)); }
            else { challengeText = templateFunc(); }
        }
    } while (gameState.history.includes(challengeText));
    return challengeText;
}

// Plan A: El motor principal que intenta usar la IA
async function nextTurn() {
    nextChallengeBtn.disabled = true;
    nextChallengeBtn.textContent = "Pensando...";
    let challenge = "";

    try {
        console.log("Intentando obtener reto de la IA...");
        const response = await fetch('/.netlify/functions/getAIChallenge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ history: gameState.history.slice(-5) }) // Envía solo los últimos 5 para no sobrecargar el prompt
        });

        if (!response.ok) { throw new Error('La IA no respondió correctamente.'); }
        const data = await response.json();
        if (data.error) { throw new Error(data.error); }
        challenge = data.challenge;
        console.log("✅ Reto recibido de la IA:", challenge);
    } catch (error) {
        console.warn("Fallo de la IA. Motivo:", error.message, "Activando motor local.");
        challenge = generateChallengeFromLocalDB();
    }

    // Lógica para subir de nivel
    gameState.challengeCount++;
    if (gameState.challengeCount === 5 && gameState.heatLevel === 1) {
        gameState.heatLevel = 2;
        challenge = "<div class='event-text'>La temperatura está subiendo...</div>" + challenge;
    } else if (gameState.challengeCount === 12 && gameState.heatLevel === 2) {
        gameState.heatLevel = 3;
        challenge = "<div class='event-text'>Sin inhibiciones...</div>" + challenge;
    }

    updateScreen(challenge);
    gameState.history.push(challenge);
    if (gameState.history.length > 20) gameState.history.shift();

    nextChallengeBtn.disabled = false;
    nextChallengeBtn.innerHTML = "🔥 Siguiente Reto 🔥";
}

function updateScreen(content) {
    challengeTextElement.style.opacity = '0';
    setTimeout(() => {
        challengeTextElement.innerHTML = content;
        challengeTextElement.style.opacity = '1';
    }, 400);
}

function selectRandom(array) { return array[Math.floor(Math.random() * array.length)]; }

// --- 5. INICIO ---
nextChallengeBtn.addEventListener('click', nextTurn);
updateScreen("Presiona el botón para que el destino decida tu primer reto...");
