import DS from 'ember-data';
import Ember from 'ember';

 var attr = DS.attr;
 var hasMany = DS.hasMany;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('songs'),
  totalDuration: function() {
    var durations = this.get('songs').map(function(song){
      return song.get('duration');
    });
    return durations.reduce(function(a, b) {
      return a + b;
    });
  }.property('songs.@each.duration'),
  songCount: Ember.computed.alias('songs.length')
}); 
