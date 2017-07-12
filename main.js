            var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon


$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
}); 

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}


function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}

$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,6,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 6) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
}) 
   
   
   
   
   // this function tell us how to change the icon form play to pause or pause to play
	function toggleSong() {
					var song = document.querySelector('audio');
					if(song.paused == true) {
					console.log('Playing');
					$('.play-icon').removeClass('fa-play').addClass('fa-pause');
					song.play();
					}
					else {
					console.log('Pausing');
					$('.play-icon').removeClass('fa-pause').addClass('fa-play');
					song.pause();
					}
					} 
					
					
					function changeCurrentSongDetails(songObj) {
							// Code goes here
		                  $('.current-song-image').attr('src','img/' + songObj.image)
						  $('.current-song-name').text(songObj.name)
						  $('.current-song-album').text(songObj.album)				
						}
	
	
	
	//this function is use to show the current time of music when its playing ////// in minute form 
	
	function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
	
	
	
	
	function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}


						function addSongNameClickEvent(songObj,position) {
							var songName = songObj.fileName; // New Variable
							var id = '#song' + position;
							    $(id).click(function() {
							var audio = document.querySelector('audio');
							var currentSong = audio.src;
							  if(currentSong.search(songName) != -1)
							{
							toggleSong();
							}
							 else {
							audio.src = songName;
							toggleSong();
							changeCurrentSongDetails(songObj);
							}
						});
						}

var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
	   'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image': 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
		'image': 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
		'image': 'song4.jpg'
    },
    {
        'name': 'Sagar jaisi aankho wali',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song5.mp3',
		'image': 'song4.jpg'
    },
    {
        'name': 'Dil',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song6.mp3',
		'image': 'song4.jpg'
    }]
			
			for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1)
    }

	
	
	


			window.onload = function() {
				
			changeCurrentSongDetails(songs[0]);	
			
			updateCurrentTime();
			setInterval(function() {
			updateCurrentTime();
			},1000);
			//var songName1 = 'Tamma Song';
			//var songName2 = 'Humma Song';
			//var songName3 = 'Nashe Si Chadh Gayi';
			//var songName4 = 'The Breakup Song';
			//var songList = ['Tumma song', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
			//var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
			//var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4'];
			//var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
			//var durationList = ['2:56','3:15','2:34','2:29'];
			
			
			
				//addSongNameClickEvent(fileNames[0],1);
				//addSongNameClickEvent(fileNames[1],2);
				//addSongNameClickEvent(fileNames[2],3);
				//addSongNameClickEvent(fileNames[3],4);
					//for (var i = 0; i < fileNames.length ; i++) {
						//addSongNameClickEvent(fileNames[i],i+1)
					//} 
			$('#songs').DataTable({
        "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false
    });					
			}
			
			
		
	
	
	
	
	
	
	
						
	
	
	//welcome screen 
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
	//play and pause when click on play and pause icon 
	
    $('.play-icon').on('click', function () {
	toggleSong();
    });
	
	
	// play and pause using space bar
	
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32)
				{
                    toggleSong();
                }
            });
			