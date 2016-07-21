// this will show all the tweets made

import Backbone from 'backbone';
import makeTweet from './makeTweet';
import tweetCollection from '../collections/tweetCollection';
import Tweetview from './tweetView';

const Tweetfeed = Backbone.View.extend({
    initialize: function() {
        var self = this;
        tweetCollection.on('add', () => {
            this.render();

        });
        tweetCollection.fetch();
    },

    tagName: 'div',
    className: 'tweetfeed',
    template: function() {
        return `
        <h2> Twitter Feed </h2>
        <ul></ul>

        `;

    },
    render: function() {
        this.$el.html(this.template());


        tweetCollection.forEach((tweet) => {
                let tweetview = new Tweetview({
                    model: tweet
                });
                tweetview.render();
                this.$('ul').append(tweetview.$el);
            });

    return this;
}

});

export default Tweetfeed;
