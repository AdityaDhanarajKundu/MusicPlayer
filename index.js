const slider = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcons = document.getElementById("ctrlIcon");
const ctrlDiv = document.querySelector(".control-div");

song.onloadedmetadata = function(){
    slider.max = song.duration;
    slider.value = song.currentTime;
}

ctrlIcons.addEventListener("click",playPause);
ctrlDiv.addEventListener("click",playPause);

function playPause(){
    if(ctrlIcons.classList.contains("fa-pause")){
        song.pause();
        ctrlIcons.classList.remove("fa-pause");
        ctrlIcons.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcons.classList.add("fa-pause");
        ctrlIcons.classList.remove("fa-play");
    }
}

//function to move the slider thumb
if(song.play()){
    setInterval(()=>{
        slider.value = song.currentTime;
    },500);
}

//function to play the song from a particular position by moving the slider
slider.onchange = function(){
    song.play();
    song.currentTime = slider.value;
    ctrlIcons.classList.add("fa-pause");
    ctrlIcons.classList.remove("fa-play");
}