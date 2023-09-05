function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Configura las opciones de la síntesis de voz si es necesario
    utterance.rate = 0.6; // Velocidad de habla (opcional)
    utterance.pitch = 1.5; // Tono de voz (opcional)

    synth.speak(utterance);
}

