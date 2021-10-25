var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    //it calls a function (start) in the API. it will convert speech to text.
    recognition.start();
}
//when the result is obtained, it will call a function and execute it. you will have to give a parameter.
recognition.onresult = function(event) {
    console.log(event);
    //here, we are giving the computer a proper locarion to put the value it has obtained in the process.
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        speak();
    };
    speak();
    //calling the speak() function
}


function speak() {
    //storing the API in a variable named "synth"
    var synth = window.speechSynthesis;
    //making the API speak the text in the box for practice for the next class
    var speakData = document.getElementById("textbox").value;
    //it will create an istace for the speechSynthesisUtterance which is nothing but asking the API to allow to speak
    var toBeSpoken = new SpeechSynthesisUtterance(speakData);
    console.log(toBeSpoken);
    //toBeSpoken.volume = 0.4;
    
    //this line actually tells the API to speak.
    synth.speak(toBeSpoken);
    //the variable "camera" which will be written below, will get attached to the "Webcam"
    Webcam.attach(camera);
    //takeSnapshot();
    console.log("exiting speak function");
    setTimeout(function(){
        takeSnapshot();
        save();
        
    },5000);
}

camera = document.getElementById("camera");
//int hese lineds of code, we will set the attributes of the webcam. you can choose the width, height, image format and the quality of the same
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

function save() {
    console.log("inside save function");
    link = document.getElementById("link");
    image = document.getElementById("finalPic").src; 
    link.href = image;
    link.click();

}
function takeSnapshot(){
    console.log("reached the takeSnapshot function");
    Webcam.snap(function(picture){
        document.getElementById("result").innerHTML = "<img id='finalPic' src='"+picture+"'>";
    })
}

