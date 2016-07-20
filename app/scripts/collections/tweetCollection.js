import Backbone from 'backbone';
import Tweet from '../models/tweet';
import settings from '../settings';

const Tweets = Backbone.Collection.exten({
  model:Tweet,
  url: `https://baas.kinvey.com/user/${settings.appId}/tweetPage`,
});

let tweetCollection = new Tweets ();
export default tweetCollection;
