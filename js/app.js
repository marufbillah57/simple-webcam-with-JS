const video = document.getElementById('webcam');
const camera = navigator.mediaDevices.getUserMedia;
if(camera) {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    })
    .then(function(streamLive){
        video.srcObject = streamLive;
    })
    .catch(function(error){
        console.log('Error!!! Please try again');
    })
}