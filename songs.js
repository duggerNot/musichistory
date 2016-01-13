var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// log the songs array
console.log("songs array", songs);

// create arrays for song information
var songTitles = [];
var songArtist = [];
var songAlbum = [];
var songGenre = [];

// adding songs to the beginning and the end of the array
songs.unshift("Front song - by Some Band on the album Whatever");
songs.push("Back Song - by Some Other Band on the album Who Knows");

// log the songs array after adding to the front and back of the array
console.log("songs array after additions", songs);

// removing incorrect characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace(/!/g, "");
};

// log the array after removing incorrect characters
console.log("new array", songs);

// replace yellow box with the song array
var yellowBoxDiv = document.getElementById("yellowBox")
var yellowBoxSongList = yellowBoxDiv.innerHTML;

for (var i = 0; i < songs.length; i++) {
	yellowBoxSongList += "<p>" + songs[i] + "</p>";
};
console.log("whatever", yellowBoxSongList);

yellowBoxDiv.innerHTML = yellowBoxSongList;







