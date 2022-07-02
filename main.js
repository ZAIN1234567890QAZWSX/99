var SpeachRecognition=window.webkitSpeechRecognition;
var recognition=new SpeachRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
Webcam.attach(camera);
Webcam.attach(camera2);
Webcam.attach(camera3);
}
function speak(){
    var synth=window.speechSynthesis;
   speak_data=document.getElementById("textbox").value;
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
}
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
var camera2=document.getElementById("camera2");
var camera3=document.getElementById("camera3");