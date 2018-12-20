/* API YOUTUBE */

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var player2;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady,
      /*'onStateChange': onPlayerStateChange*/
        }
    });

    player2 = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'rhqQNEnSpkc',
    events: {
      /*'onReady': onPlayerReady,*/
      /*'onStateChange': onPlayerStateChange*/
        }
    });
}


function onPlayerReady(event) {
    var playButton = document.querySelector("#play"),
        pauseButton = document.querySelector("#pause"),
        previousVideoButton = document.querySelector("#previous"),
        nextVideoButton = document.querySelector("#next");

    
    playButton.addEventListener("click", function() {
        event.target.playVideo();
        //player.playVideo();
    });
  
    pauseButton.addEventListener("click", function() {
        event.target.pauseVideo();
        //player.pauseVideo();
    });

    previousVideoButton.addEventListener("click", function() {
        event.target.previousVideo();
    });

    nextVideoButton.addEventListener("click", function() {
        event.target.nextVideo();
    });

    event.target.loadPlaylist( {
        /*'startSeconds': 10,
        'endSeconds': 60,*/
        'listType': 'playlist',
        'list': 'OLAK5uy_mJm40fpgLXl3PaXGcAolvS0QUsoF6jB_c',
    } );
}


  /*var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }*/












