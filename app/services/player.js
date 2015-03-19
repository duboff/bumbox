import Ember from 'ember';
var run = Ember.run;

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,
  song: null,

  setupAudioElement: function() {
    var el = document.createElement('audio');
    el.addEventListener('play', run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', run.bind(this, 'didPause'));
    this.set('audioElement', el);
  }.on('init'),

  play: function(song) {
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause: function() {
    this.get('audioElement').pause();
  },

  didStartPlaying: function () {
   this.set('isPlaying', true);
  },

  didPause: function () {
   this.set('isPlaying', false);
  },

  willDestroy: function () {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
  }
});
