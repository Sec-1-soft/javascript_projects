
const synthesis = window.speechSynthesis;
const txtInput = document.getElementById("speak");
const btn = document.getElementById("btn");

const voices = synthesis.getVoices();

btn.onclick = (event)=>{

    event.preventDefault();

    const uttarence = new SpeechSynthesisUtterance(txtInput.value);

    uttarence.lang = "tr";
    uttarence.rate = 0.6;
    uttarence.voice = voices[0];
    synthesis.speak(uttarence);


}