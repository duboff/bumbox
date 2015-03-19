import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['play'],
  player: inject.service(),

  actions: {
    play: function() {
      var song = this.get('song');
      if (song) {
        this.get('player').play(song);
      } else {
        this.get('player').resume();
      }
    },
    pause: function() {
      this.get('player').pause();
    },
  }
});