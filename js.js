let speech = new SpeechSynthesisUtterance();
let voices = [];

let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    voicesSelect.innerHTML = "";
    
    voices.forEach((voice, i) => {
        voicesSelect.options[i] = new Option(voice.name, i);
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    
    let selectedVoiceIndex = voicesSelect.selectedIndex;
    speech.voice = voices[selectedVoiceIndex];
    
    window.speechSynthesis.speak(speech);
});
