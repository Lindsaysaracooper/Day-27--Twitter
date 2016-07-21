import $ from 'jquery';
import Backbone from 'backbone';
import tweetCollection from '../collections/tweetCollection';
import session from '../models/session';
// import moment from 'moment';

// This is where a tweet will be made


const MakeTweet = Backbone.View.extend({
    tagName: 'div',
    className: 'tweetbox',
    template: function() {
        let newTweet = `
                  <input class = "tweetBody" type="text" placeholder="What's Happening?" value=""> <i class="fa fa-camera camera" aria-hidden="true"></i>
                  <input class="tweetSubmitButton" type="submit" name="name" value="Submit Tweet">
                  `;
        return newTweet;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },

    events: {
        'click .tweetSubmitButton': 'save'

    },

    save: function() {
        tweetCollection.create({
          author: session.get('username'),
          body: this.$('.tweetBody').val()

        }, {
            success: function (model){
            console.log('You have tweeted');
          },
          error: function (body){
          }
        });

    }

});

export default MakeTweet;
