const elements = {
  play: document.querySelector(".play"),
  previous: document.querySelector(".prev"),
  next: document.querySelector(".next"),
  trackImage: document.querySelector(".track-image"),
  title: document.querySelector(".title"),
  artist: document.querySelector(".artist"),
  trackCurrentTime: document.querySelector(".current-time"),
  trackDuration: document.querySelector(".duration-time"),
  slider: document.querySelector(".duration-slider"),
  showVolume: document.querySelector("#show-volume"),
  volumeIcon: document.querySelector("#volume-icon"),
  currentVolume: document.querySelector("#volume"),
  autoPlayBtn: document.querySelector(".play-all"),
  hamBurger: document.querySelector(".fa-bars"),
  closeIcon: document.querySelector(".fa-times"),
  musicPlaylist: document.querySelector(".music-playlist"),
  pDiv: document.querySelector(".playlist-div"),
  playList: document.querySelector(".playlist"),
};

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
const track = document.createElement("audio");

// All Event Listeners
elements.play.addEventListener("click", justPlay);
elements.next.addEventListener("click", nextSong);
elements.previous.addEventListener("click", prevSong);
elements.autoPlayBtn.addEventListener("click", autoPlayToggle);
elements.volumeIcon.addEventListener("click", muteSound);
elements.currentVolume.addEventListener("change", changeVolume);
elements.slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
elements.hamBurger.addEventListener("click", showPlayList);
elements.closeIcon.addEventListener("click", hidePlayList);

// Load Tracks
function loadTrack(index) {
  clearInterval(timer);
  resetSlider();

  const { path, img, name, singer } = trackList[index];

  track.src = path;
  elements.trackImage.src = img;
  elements.title.innerHTML = name;
  elements.artist.innerHTML = singer;
  track.load();

  timer = setInterval(updateSlider, 1000);
}
loadTrack(indexTrack);

// Play song or Pause song
function justPlay() {
  if (!songIsPlaying) {
    playSong();
  } else {
    pauseSong();
  }
}

// Play Song
function playSong() {
  track.play();
  songIsPlaying = true;
  elements.play.innerHTML = '<i class="fas fa-pause"></i>';
}

// Pause Song
function pauseSong() {
  track.pause();
  songIsPlaying = false;
  elements.play.innerHTML = '<i class="fas fa-play"></i>';
}

// Next song
function nextSong() {
  indexTrack = (indexTrack + 1) % trackList.length;
  loadTrack(indexTrack);
  playSong();
}

// Previous song
function prevSong() {
  indexTrack = (indexTrack - 1 + trackList.length) % trackList.length;
  loadTrack(indexTrack);
  playSong();
}

// Mute Sound
function muteSound() {
  track.volume = 0;
  elements.showVolume.innerHTML = 0;
  elements.currentVolume.value = 0;
}

// Change Volume
function changeVolume() {
  elements.showVolume.value = elements.currentVolume.value;
  track.volume = elements.currentVolume.value / 100;
}

// Change Duration
function changeDuration() {
  const sliderPosition = track.duration * (elements.slider.value / 100);
  track.currentTime = sliderPosition;
}

// Auto Play
function autoPlayToggle() {
  autoplay = autoplay === 0 ? 1 : 0;
  elements.autoPlayBtn.style.background = autoplay === 1 ? "#db6400" : "#ccc";
}

// Reset Slider
function resetSlider() {
  elements.slider.value = 0;
}

// Update Slider
function updateSlider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = (track.currentTime / track.duration) * 100;
    elements.slider.value = position;
  }

  if (track.ended) {
    elements.play.innerHTML = '<i class="fas fa-play"></i>';
    if (autoplay === 1 && indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else if (autoplay === 1 && indexTrack === trackList.length - 1) {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
}

// Update Current song time
function songTimeUpdate() {
  if (track.duration) {
    let curmins = Math.floor(track.currentTime / 60);
    let cursecs = Math.floor(track.currentTime - curmins * 60);
    let durmins = Math.floor(track.duration / 60);
    let dursecs = Math.floor(track.duration - durmins * 60);

    curmins = curmins.toString().padStart(2, "0");
    cursecs = cursecs.toString().padStart(2, "0");
    durmins = durmins.toString().padStart(2, "0");
    dursecs = dursecs.toString().padStart(2, "0");

    elements.trackCurrentTime.innerHTML = `${curmins}:${cursecs}`;
    elements.trackDuration.innerHTML = `${durmins}:${dursecs}`;
  } else {
    elements.trackCurrentTime.innerHTML = "00:00";
    elements.trackDuration.innerHTML = "00:00";
  }
}

// Show PlayList
function showPlayList() {
  elements.musicPlaylist.style.transform = "translateX(0)";
}

// Hide PlayList
function hidePlayList() {
  elements.musicPlaylist.style.transform = "translateX(-100%)";
}

// Display Tracks in playlist
let counter = 1;

function displayTracks() {
  trackList.forEach((trackItem) => {
    const { name } = trackItem;
    const div = document.createElement("div");
    div.classList.add("playlist");
    div.innerHTML = `
        <span class="song-index">${counter++}</span>
        <p class="single-song">${name}</p>
    `;
    elements.pDiv.appendChild(div);
  });
  playFromPlaylist();
}

displayTracks();

// Play song from the playlist
function playFromPlaylist() {
  elements.pDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("single-song")) {
      const indexNum = trackList.findIndex((item) => item.name === e.target.innerHTML);
      loadTrack(indexNum);
      playSong();
      hidePlayList();
    }
  });
}
