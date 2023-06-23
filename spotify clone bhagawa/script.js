console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Bhagwadhari.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Bhagwadhari.mp3", filePath:"songs/Bhagwadhari.mp3", coverPath: "covers/ram1.jpg"},
    {songName:"Bharat Ka Bacha.mp3", filePath:"songs/Bharat Ka Bacha.mp3", coverPath: "covers/ram2.jpg"},
    {songName:"BOLO_HAR_HAR.mp3", filePath:"songs/BOLO_HAR_HAR.mp3", coverPath: "covers/ram3.jpg"},
    {songName:"Hindutva_Hai_.mp3", filePath:"songs/Hindutva_Hai_.mp3", coverPath: "covers/ram4.jpg"},
    {songName:"ham.mp3", filePath:"songs/ham.mp3", coverPath: "covers/ram5.jpg"},
    {songName:"Pawansut___Narci___.mp3", filePath:"songs/Pawansut___Narci___Hindi_Rap_Song___Prod._By_Narci(128k).mp3", coverPath: "covers/ram6.jpg"},
    {songName:"Sanatani_The_Song(128k).mp3", filePath:"songs/Sanatani_The_Song___Official_Song_Of_Sanatan_Dharma__(128k).mp3", coverPath: "covers/ram7.jpg"},
    {songName:"SHOORVEER_3_.mp3", filePath:"songs/SHOORVEER_3_.mp3", coverPath: "covers/ram8.jpg"},
    {songName:"Shri_Ram_Jaanki.mp3", filePath:"songs/Shri_Ram_Jaanki.mp3", coverPath: "covers/ram9.jpg"},
    {songName:"Wokal_-_Ramayan.mp3", filePath:"songs/Wokal_-_Ramayan.mp3", coverPath: "covers/ram10.jpg"},
    {songName:"Ram_Ji_Ki_Nikli_Ram_Navami_Spl", filePath:"songs/Ram_Ji_Ki_Nikli_Sawari_Nacho_Mix_Dj_Song_DJ_Rohit_Mumbai___Ram_Navami_Spl_Jay_Shree_Ram_Dj_Song_2023(128k).mp3", coverPath: "covers/ram11.jpg"},

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        function playSong(index) {
            if (songs[index]) {
                        songIndex = parseInt(e.target.id);
                        e.target.classList.remove('fa-play-circle');
                        e.target.classList.add('fa-pause-circle');
                        audioElement.src = songs[songIndex].filePath;
                        masterSongName.innerText = songs[songIndex].songName;
                        audioElement.currentTime = 0;
                        audioElement.play();
                        gif.style.opacity = 1;
                        masterPlay.classList.remove('fa-play-circle');
                        masterPlay.classList.add('fa-pause-circle');
            }
        }
    });
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});


document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});

function playSong(index) {
    if (songs[index]) {
        audioElement.src = songs[index].filePath;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
}


































// console.log("Welcome to Spotify");

// // Iniatialize the Variables
// let index = 0;
// let audioElement = new Audio('songs/Bhagwadhari.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songs = [
//     {songName:"Bhagwadhari.mp3", filePath:"songs/Bhagwadhari.mp3", coverPath: "covers/ram1.jpg"},
//     {songName:"Bharat Ka Bacha.mp3", filePath:"songs/Bharat Ka Bacha.mp3", coverPath: "covers/ram2.jpg"},
//     {songName:"BOLO_HAR_HAR.mp3", filePath:"songs/BOLO_HAR_HAR.mp3", coverPath: "covers/ram3.jpg"},
//     {songName:"Hindutva_Hai_.mp3", filePath:"songs/Hindutva_Hai_.mp3", coverPath: "covers/ram4.jpg"},
//     {songName:"ham.mp3", filePath:"songs/ham.mp3", coverPath: "covers/ram5.jpg"},
//     {songName:"Pawansut___Narci___.mp3", filePath:"songs/Pawansut___Narci___Hindi_Rap_Song___Prod._By_Narci(128k).mp3", coverPath: "covers/ram6.jpg"},
//     {songName:"Sanatani_The_Song(128k).mp3", filePath:"songs/Sanatani_The_Song___Official_Song_Of_Sanatan_Dharma__(128k).mp3", coverPath: "covers/ram7.jpg"},
//     {songName:"SHOORVEER_3_.mp3", filePath:"songs/SHOORVEER_3_.mp3", coverPath: "covers/ram8.jpg"},
//     {songName:"Shri_Ram_Jaanki.mp3", filePath:"songs/Shri_Ram_Jaanki.mp3", coverPath: "covers/ram9.jpg"},
//     {songName:"Wokal_-_Ramayan.mp3", filePath:"songs/Wokal_-_Ramayan.mp3", coverPath: "covers/ram10.jpg"},
//     {songName:"Ram_Ji_Ki_Nikli_Ram_Navami_Spl", filePath:"songs/Ram_Ji_Ki_Nikli_Sawari_Nacho_Mix_Dj_Song_DJ_Rohit_Mumbai___Ram_Navami_Spl_Jay_Shree_Ram_Dj_Song_2023(128k).mp3", coverPath: "covers/ram11.jpg"},

// ]

// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
// });
// // audioElement.pay();
// // Handle paly / pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;

//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{
//     console.log('timeupdate');
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })
// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })   
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = 'songs/$(songIndex+1).mp3';
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })