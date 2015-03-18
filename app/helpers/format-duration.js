import Ember from 'ember';

export function formatDuration(input) {

  var minutes = (Math.floor(input / 60)).toString();
  
  var seconds = (input % 60).toString();

  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

export default Ember.Handlebars.makeBoundHelper(formatDuration);
