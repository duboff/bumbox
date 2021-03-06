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
  songDurations: Ember.computed.mapBy('songs', 'duration'),
  totalDuration: Ember.computed.sum('songDurations'),
  songCount: Ember.computed.alias('songs.length')
});
