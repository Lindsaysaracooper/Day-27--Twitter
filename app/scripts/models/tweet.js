import Backbone from 'backbone';
import settings from '../settings';

const Tweet = Backbone.Model.extend({
idAttribute: '_id',
urlRoot:`https://baas.kinvey.com/user/${settings.appId}/tweetPage`,
defaults: {
  user:'',
  timestamp: '',
  likes: ''

},
// like: function like() {
//    var newLikes = this.get('likes') + 1;
//    this.set('likes', newLikes);
//    this.save();
//  }
});

let tweet = new Tweet ();
export default tweet;
