const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    if (transcript.includes("what time is it")) {
        speakTime();
    }
};

function startListening() {
    recognition.start();
}

function speakTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `It is ${formatHour(hours)} ${minutes === 0 ? "o'clock" : minutes}`;
    
    const utterance = new SpeechSynthesisUtterance(timeString);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

function formatHour(hour) {
    const h = hour % 12 || 12;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    return `${h} ${ampm}`;
}
