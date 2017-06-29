(function() {
  function SongPlayer($rootScope, Fixtures) {
    var SongPlayer = {};
    var currentAlbum = Fixtures.getAlbum();
    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });

      SongPlayer.currentSong = song;

      /**
      *@desc Current playback time of currently playing song
      *@type {number}
      */
      SongPlayer.currentTime = null;
    };

    function stopSong(song) {
      currentBuzzObject.stop();
      song.playing = null;
    };
    /**
    * @function getSongIndex
    * @desc Finds the current index of the song thats playing
    * @param {Object} song
    */

    var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
    };

    SongPlayer.currentSong = null;
    /**
    * @function playSong
    * @desc plays the current song
    * @param {Object} song
    */
    function playSong(song) {
      currentBuzzObject.play();
      song.playing = true;

    };
    /**
    * @function SongPlayer.play
    * @desc checks to see if a song is currently playing and if not will play the current song
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
    /**
    * @function SongPlayer.pause
    * @desc checks to see if a song is playing and if it is, paused the current song
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    }

  /**
  * @function SongPlayer.previous
  * @desc goes to the previous song in the array
  * @param {Object} song
  */
  SongPlayer.previous = function() {
    var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    currentSongIndex--;

    if (currentSongIndex < 0) {
      stopSong();
  } else {
      var song = currentAlbum.songs[currentSongIndex];
      setSong(song);
      playSong(song);
    }
  };
  return SongPlayer;
};

  SongPlayer.next = function() {
    var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    currentSongIndex++;

    if (currentSongIndex > 4) {
        stopSong(song);
  } else {
      var song = currentAlbum.songs[currentSongIndex];
      setSong(song);
      playSong(song);
    }
  };

  /**
* @function setCurrentTime
* @desc Set current time (in seconds) of currently playing song
* @param {Number} time
*/
SongPlayer.setCurrentTime = function(time) {
  if (currentBuzzObject) {
    currentBuzzObject.setTime(time);
  }
};
  return SongPlayer;
};




  angular
  .module('blocJams')
  .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
