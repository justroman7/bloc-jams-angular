(function() {
  function SongPlayer() {
    var SongPlayer = {};
    var currentSong = null;
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
        currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };
    /**
    * @function playSong
    * @desc plays the current song
    * @param {Object} song
    */
    function playSong(song) {
      currentBuzzObject.play();
      song.playing = true;

    }
    /**
    * @function SongPlayer.play
    * @desc checks to see if a song is currently playing and if not will play the current song
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
        }
      }
    };
    /**
    * @function SongPlayer.pause
    * @desc checks to see if a song is playing and if it is, paused the current song
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    }
    return SongPlayer;
  }

  angular
  .module('blocJams')
  .factory('SongPlayer', SongPlayer);
})();