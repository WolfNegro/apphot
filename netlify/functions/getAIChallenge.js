// Este código se ejecuta en el servidor de Netlify, no en el navegador del usuario.
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // Extraemos el historial de retos del cuerpo de la petición
    const { history } = JSON.parse(event.body);
    // Cargamos la clave API de forma segura desde las variables de entorno de Netlify
    const apiKey = process.env.GEMINI_API_KEY;
    const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    // --- EL NUEVO PROMPT CON CONCIENCIA DE LARGA DISTANCIA ---
    const prompt = `Eres un experto en juegos de pareja eróticos y creativos para relaciones a distancia. Tu tono es directo, sensual y provocador. Los jugadores se comunican por videollamada, texto o audios. NO pueden tocarse físicamente.
    Genera UN SOLO reto o pregunta original y coherente que se pueda realizar a través de una cámara, un micrófono o un chat. Evita retos que requieran estar en el mismo lugar.
    IMPORTANTE: NO repitas los siguientes ejemplos que te doy del historial reciente del juego. Sé original.
    Historial de ejemplos a evitar: "${history.join(', ')}"
    Responde únicamente con el texto del reto, sin introducciones ni comillas.`;

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                // Ajustes para máxima creatividad
                generationConfig: { temperature: 1.0, topP: 0.95 }
            })
        });

        if (!response.ok) {
            throw new Error(`Error de la API: ${response.statusText}`);
        }

        const data = await response.json();
        // Limpiamos la respuesta para asegurarnos de que solo viene el texto
        const challenge = data.candidates[0].content.parts[0].text.trim().replace(/\"/g, "");

        return {
            statusCode: 200,
            body: JSON.stringify({ challenge })
        };

    } catch (error) {
        console.error("Error en la función serverless:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "No se pudo generar el reto desde la IA." })
        };
    }
};