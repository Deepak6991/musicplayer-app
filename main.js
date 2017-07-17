
var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
	var mute = 0;



   // array of objects---(songs details)
  var songs = [{
        'name': ' Badan Pe Sitaare unplugged',
        'artist': 'Karan Nawani',
        'album': 'retro unplugged',
        'duration': '3:32',
       'fileName': 'song1.mp3',
       'image' : 'song1.jpg'
    },
    {
        'name': 'Pyaar Hota Ja Rha Hai',
        'artist': ' Altaaf Saeed',
        'album': ' unknown',
        'duration': '2:38',
        'fileName': 'song2.mp3',
        'image' : 'song2.jpg'
    },
    {
        'name': 'Pehla Pehla Pyaar Hai',
        'artist': 'S P Balasubrahmanyam',
        'album': 'Hum Aapke Hai Kaun',
        'duration': '4:24',
        'fileName': 'song3.mp3',
        'image' : 'song3.jpg'
    },
    {
        'name': ' Mere Rashke Kamar',
        'artist': 'unknown',
        'album': ' unknown',
        'duration': '3:09',
        'fileName': 'song4.mp3',
        'image' : 'song4.jpg'
    },
	{
        'name': 'Musaafir',
        'artist': 'atif aslam, Pala Mucchal',
        'album': ' Sweeti Weds NRI',
        'duration': '5:10',
        'fileName': 'song5.mp3',
        'image' : 'song5.jpg'
    },
	{
        'name': ' Meri Mehbooba',
        'artist': 'Kumar Sanu',
        'album': ' Pardesh',
        'duration': '6:55',
        'fileName': 'song6.mp3',
        'image' : 'song6.jpg'
    },
	{
        'name': ' Toca Toca',
        'artist': 'Fly Project',
        'album': ' UNknown',
        'duration': '2:45',
        'fileName': 'song7.mp3',
        'image' : 'song7.jpg'
    },
	{
        'name': ' Love Me Like You Do',
        'artist': 'Ellie Goulding',
        'album': ' Fifty Shades of Grey',
        'duration': '4:09',
        'fileName': 'song8.mp3',
        'image' : 'song8.jpg'
    },
	{
        'name': ' Despacito',
        'artist': 'Luis Fonsi , Daddy Yankee',
        'album': ' Pardesh',
        'duration': '3:47',
        'fileName': 'song9.mp3',
        'image' : 'song9.jpg'
    }]


//-----------------------------------------------------------toggle song  
function toggleSong() {
  var song = document.querySelector('audio');
  if(song.paused == true) {
  //console.log('Playing');
  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
  song.play();
  }
  else {
  //console.log('Pausing');
  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
  song.pause();
  }
  }


function fancyTimeFormat(time)
{
//variable for hours minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// function for show the time in minute and seconds
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
  //console.log(song.currentTime);
  //console.log(song.duration);
  var currentTime = Math.floor(song.currentTime);
  currentTime = fancyTimeFormat(currentTime);
  var duration = Math.floor(song.duration);
   duration = fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
  }



//fetch the songs name image nd album from array of objects

  function changeCurrentNameDetails(songObj){
    $('.current-song-image').attr('src', 'img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
  }


  function addSongNameClickEvent(songObj,position) {
        var id = '#song' + position;
        var songName = songObj.fileName;
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
                changeCurrentNameDetails(songObj);
            }


        });

    }



function updateTimer(){
var song = document.querySelector('audio');
var ct =song.currentTime;
var td =song.duration;
var percentage = (ct/td)*100;
$("#progress-filled").css('width',percentage+"%");  //function for progress slider

}

// function to make the song end soon, just for checking our loop and shuffle
function timeJump()  {
  var song = document.querySelector('audio');
  song.currentTime = song.duration-5;
}

function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}




//functions for onload window


  window.onload = function() {                      


	//console.log(document.querySelector);
  //  var songName1 = 'Tamma Song';
  //  var songName2 = 'Humma Song';
  // var songName3 = 'Nashe Si Chadh Gayi';
  // var songName4 = 'The Breakup Song';
  //
  // var songList = ['Tamma Song', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
  // var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
  // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
  // var durationList = ['2:56','3:15','2:34','2:29'];


  //  $('#song1 .song-name').text(songList[0]);
  //   $('#song2 .song-name').text(songList[1]);
  //    $('#song3 .song-name').text(songList[2]);
  //     $('#song4 .song-name').text(songList[3]);
  //     $('#song1 .song-artist').text(artistList[0]);
  //   $('#song2 .song-artist').text(artistList[1]);
  //   $('#song3 .song-artist').text(artistList[2]);
  //   $('#song4 .song-artist').text(artistList[3]);

  // for(var i =0; i < songList.length;i++) {
  //      var name = '#song' + (i+1);  
  //      var song = $(name);  //song =  $(#song1)
  //      song.find('.song-name').text(songList[i]);
  //      song.find('.song-artist').text(artistList[i]);
  //      song.find('.song-album').text(albumList[i]);  
  //       song.find('.song-length').text(durationList[i]);  
  //  }
    
    changeCurrentNameDetails(songs[0]);

   for(var i =0; i < songs.length;i++) {
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);
       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1);
     }


     $('audio').on('ended',function() {
          var audio = document.querySelector('audio');

         if (willShuffle == 1) {
                  var nextSongNumber = randomExcluded(1,9,currentSongNumber); // Stackoverflow function (for shuffling the song)
                  var nextSongObj = songs[nextSongNumber-1];
                  audio.src = nextSongObj.fileName;
                  toggleSong();                                       
                  changeCurrentNameDetails(nextSongObj);
                  currentSongNumber = nextSongNumber;
              }
         else if(currentSongNumber < 9) {
                 
                  var nextSongObj = songs[currentSongNumber];
                  audio.src = nextSongObj.fileName; // Change Soure
                  toggleSong(); // 
                  changeCurrentNameDetails(nextSongObj); // 
                  currentSongNumber = currentSongNumber + 1; // Change the song
             }
           else if(willLoop == 1) {
                          // 
                          var nextSongObj = songs[0];
                          audio.src = nextSongObj.fileName;
                          toggleSong();
                          changeCurrentNameDetails(nextSongObj);
                          currentSongNumber =  1;
                        }
            else {
                         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                          audio.currentTime = 0;
                    }
     })
    //var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    // addSongNameClickEvent(fileNames[0],1);
    // addSongNameClickEvent(fileNames[1],2);
    // addSongNameClickEvent(fileNames[2],3);
    // addSongNameClickEvent(fileNames[3],4);
    // for (var i = 0; i < fileNames.length ; i++) {
    //       addSongNameClickEvent(fileNames[i],i+1);
    // }

    // $('#song1').click(function() {
    // var audio = document.querySelector('audio');
    // var  currentSong = audio.src;
    // if(currentSong.search(fileNames[0]) != -1)
    // {
    // toggleSong();
    // }
    // else {
    // audio.src = fileNames[0];
    // toggleSong();
    // }
    // });
    //
    // 	$('#song2').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[1]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[1];
    // 		toggleSong();
    // 		}
    // 	});
    //
    // 	$('#song3').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[2]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[2];
    // 		toggleSong();
    // 		}
    // 	});
    //
    // 	$('#song4').click(function() {
    //     var audio = document.querySelector('audio');
    // 		var  currentSong = audio.src;
    // 		if(currentSong.search(fileNames[3]) != -1)
    // 		{
    // 		toggleSong();
    // 		}
    // 		else {
    // 		audio.src = fileNames[3];
    // 		toggleSong();
    // 		}
    // 	});




  updateCurrentTime();
  setInterval(function() {
  updateCurrentTime();
  },1000);
  
  
//datatable function (for search purpose and also for scroll bar 

  $('#songs').DataTable({
           "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false
       });
	   
	   

    setInterval(function() {
        updateTimer();
    }, 100);


  }


//funtion for first page that is welcome screen

$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name; //show the user name with welcome message
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        Warn();
    }
});




$('.play-icon').on('click', function() {
   toggleSong();
});


$('.fa-repeat').on('click', function() {
    $('.fa-repeat').toggleClass('disabled');
    willLoop = 1 - willLoop;
})

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

/*--------------------------------------------Audio controls----------------------- */

$('.volume').on('mouseover',function(){
    $('#vol-up-down').removeClass('hidden');

})

$('.volume').on('mouseout',function(){
    $('#vol-up-down').addClass('hidden');
})

var audio = document.querySelector('audio');
var volume = document.getElementById("vol-up-down");
var mute = audio.muted;

volume.addEventListener("input", function(){
 audio.volume = this.value / 100;
 if ( audio.volume != 0){
     $('.mute').removeClass('fa-volume-off').addClass('fa-volume-up');
 }
 else {
    $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
 }
});

$('.mute').on('click', function(){
  var audio = document.querySelector('audio');
    if(mute == 0){
    audio.muted = true;
      $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
    mute = 1;
  }
  else {
     audio.muted = false;
      $('.mute').removeClass('fa-volume-off').addClass('fa-volume-up');
     mute = 0;
  }

})


//function for next button

$('.fa-step-forward').on('click', function() {
							$('.fa-step-forward').toggleClass('disabled')			
							console.log('nextsong');
						var audio = document.querySelector('audio');
						var nextSongobj = songs[currentSongNumber];
						audio.src = nextSongobj.fileName;
						toggleSong();
					
						changeCurrentNameDetails(nextSongobj);
						currentSongNumber = currentSongNumber + 1;


						});
						
						//function for previous button
						
						$('.fa-step-backward').on('click', function() {   			
							$('.fa-step-backward').toggleClass('disabled')


						var audio = document.querySelector('audio');
						var nextSongobj = songs[currentSongNumber];
						audio.src = nextSongobj.fileName;
						toggleSong();
						changeCurrentNameDetails(nextSongobj);
						currentSongNumber = currentSongNumber - 1;



						});

						//function for spacebar (when press spacebar song is play and pause)
						
$('body').on('keypress', function(event) {
          //  console.log(event);
          var target = event.target;
          if (event.keyCode == 32 && target.tagName !='INPUT')
          {
          toggleSong();
          }
        });

		
		function Warn() {
               alert ("enter name more than 2 alphabet!");
              // document.write ("This is a warning message!");
            }