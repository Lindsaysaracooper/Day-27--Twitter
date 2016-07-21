import Backbone from 'backbone';
import settings from '../settings';

const Tweet = Backbone.Model.extend({
idAttribute: '_id',
urlRoot:`https://baas.kinvey.com/appdata/${settings.appId}/tweets`,
defaults: {
  body: '',
  timestamp: '',
  likes: ''

},
// like: function like() {
//    var newLikes = this.get('likes') + 1;
//    this.set('likes', newLikes);
//    this.save();
//  }
});

export default Tweet;
