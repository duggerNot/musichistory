//provided song list
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// log the songs array
console.log("songs array", songs);

// create arrays for future song information
var songTitles = [];
var songArtist = [];
var songAlbum = [];
var songGenre = [];

// adding songs to the beginning and the end of the array
songs.unshift("Front song - by Some Band on the album Whatever"); //add song to beginning
songs.push("Back Song - by Some Other Band on the album Who Knows"); //add song to end

// log the songs array after adding to the front and back of the array
console.log("songs array after additions", songs);

// removing and replacing characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace(/!/g, "");
};

// log the array after removing incorrect characters
console.log("corrected array", songs);

// replace yellow box with the song array
var yellowBoxDiv = document.getElementById("yellowBox") //save html element
var yellowBoxSongList = yellowBoxDiv.innerHTML; //save guts of html element

//loop to add array to guts
for (var i = 0; i < songs.length; i++) {
	yellowBoxSongList += "<p>" + songs[i] + "</p>";
};
//log to see the guts
console.log("whatever", yellowBoxSongList);
//return guts to html element
yellowBoxDiv.innerHTML = yellowBoxSongList;







