import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],
  player: inject.service(),
  song: computed.readOnly('player.song'),
  duration: computed.alias('player.currentTime'),
  remainingDuration: computed.alias('player.remainingTime'),
  isPlaying: computed.alias('player.isPlaying'),
  showElapsedTime: true,

  actions: {
    toggleDuration: function() {
      this.toggleProperty('showElapsedTime');
    }
  }
});
