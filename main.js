var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHtml ="";
Recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content=event.result[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHtml =Content;
    console.log(Content);
    speak();
}
function speak(){
     var synth=window.speechSythesis;
     speak_data=document.getElementById("textbox").value;
     var utterThis=new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
     Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");