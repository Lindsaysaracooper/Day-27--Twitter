import Backbone from 'backbone';
import $ from 'jquery';
import Tweetfeed from './seeTweet';
import MakeTweet from './makeTweet';

// Insert all the other views to this page.

const TweetPageView = Backbone.View.extend({
  render: function (){
    let maketweet = new MakeTweet ();
    maketweet.render();
    this.$el.append(maketweet.$el);
    let tweetfeed = new Tweetfeed ();
    maketweet.render();
    this.$el.append(tweetfeed.$el);
  }

});

export default TweetPageView;
