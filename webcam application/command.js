let video = document.querySelector('video');
let recordButton = document.getElementById("record");
let stopButton = document.getElementById("stop");
let downloadLink = document.getElementById("link");


let data = [];
let mediaRecorder;

let startWebcam = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=>{
        video.srcObject = stream;
        video.play();
        mediaRecorder = new MediaRecorder(stream);


        mediaRecorder.addEventListener("dataavailable",(event)=>{
             data.push(event.data);
        })

        mediaRecorder.addEventListener("stop",()=>{
            let blob = new Blob(data,{type:"video/mp4"});
            let url = URL.createObjectURL(blob);
            video.src = url;
            downloadLink.href =url;
            downloadLink.download = "recorder.mp4";
        })

        recordButton.addEventListener("click",()=>{
            data = [];
            video.play();
            mediaRecorder.start();

        })

        stopButton.addEventListener("click",()=>{
            mediaRecorder.stop();
        })
    })
}

startWebcam();