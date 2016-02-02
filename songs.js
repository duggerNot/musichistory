var songCount = 0;
var songs = [];

var songObject = {
	songTitle: "",
	artistName: "",
	albumName: "",

};


var songBoxDiv = document.getElementById("songContentBox"); 

var musicList = document.getElementById("listMusic");
var musicAdd = document.getElementById("addMusic");

var listTab = document.getElementById("showListMusic");
var addTab = document.getElementById("showAddMusic");

document.getElementById("addSongInfo").onclick = function() {
	getSongInfo();
	addSong();
	console.log("song object", songObject);
}

listTab.onclick = function() {
	showList();
	listTab.classList.toggle("active");
	addTab.classList.toggle("active");
};
addTab.onclick = function() {
	showAdd();
	addTab.classList.toggle("active");
	listTab.classList.toggle("active");
}

function showList() {
	musicList.style.display = "block";
	musicAdd.style.display = "none";
}

function showAdd() {
	musicAdd.style.display = "block";
	musicList.style.display = "none";
}

function getSongInfo() {
	songObject.songTitle = document.getElementById("titleInputBox").value;
	songObject.artistName = document.getElementById("artistInputBox").value;
	songObject.albumName = document.getElementById("albumInputBox").value;
	songs.push(songObject);
	songCount++;
}

function addSong() {
		songBoxDiv.innerHTML += `<h1><p>  ${songs[songCount-1].songTitle} </p></h1>`;
		songBoxDiv.innerHTML += `<p>  ${songs[songCount-1].artistName} </p>`;
		songBoxDiv.innerHTML += `<p>  ${songs[songCount-1].albumName} </p>`;

}








