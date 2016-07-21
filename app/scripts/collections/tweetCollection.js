import Backbone from 'backbone';
import Tweet from '../models/tweet';
import settings from '../settings';

const Tweets = Backbone.Collection.extend({
  model: Tweet,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/tweets`,
});

let tweetCollection = new Tweets ();

export default tweetCollection;
