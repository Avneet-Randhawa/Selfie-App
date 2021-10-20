var SpeechRecoginition = window.webkitSpeechRecognition;
var recognition = new SpeechRecoginition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        console.log("taking selfie---");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    var speech_data = "Taking Your Selfie in 5 Seconds";
    var utter_this = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        snapshot();
        save();
    },5000)

}
camera = document.getElementById("camera");
Webcam.set({
    height: 240,
    width : 360,
    image_format: "png",
    image_quality:90
})
function snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"' />"})
}
function save(){
    link = document.getElementById("Link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}