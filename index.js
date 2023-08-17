const slider = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcons = document.getElementById("ctrlIcon");
const ctrlDiv = document.querySelector(".control-div");

//songs list
const songs = [
    {
        name : "media/Ed-Sheeran-Galway-Girl.mp3",
        artist: "Ed Sheeran",
        title: "Galway Girl",
        img: "media/images.jpeg"
    },
    {
        name : "media/One-Direction-What-Makes-You-Beautiful.mp3",
        artist: "One Direction",
        title: "What Makes You Beautiful",
        img: "media/What_Makes_You_Beautiful_Album_Cover.jpg"
    },
    {
        name : "media/Love-Me-Like-You-Do(PaglaSongs).mp3",
        artist: "Ellie Goulding",
        title: "Love Me Like You Do",
        img: "media/lovemelikeyoudo.jpeg"
    },
    {
        name : "media/Bhulado_Raeth.mp3",
        artist: "Raeth",
        title: "Bhula Do",
        img: "media/bhulado.jpg"
    },
    {
        name : "media/Aaoge_Tum_Kabhi.mp3",
        artist: "The Local Train",
        title: "Aaoge Tum Kabhi",
        img: "media/TLT.jpeg"
    }
]

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