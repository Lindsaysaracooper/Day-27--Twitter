import Backbone from 'backbone';
import settings from '../settings';
import session from '../models/session';
import Tweet from '../models/tweet';
import $ from 'jquery';


const Tweetview = Backbone.View.extend({

    render: function() {
        this.$el.html(this.template());
        return this;
    },
    tagName: 'li',
    className: 'eachTweet',
    template: function() {
        if (this.model.get('author') !== session.get('username')) {
            return `
          <div class = 'author'> ${this.model.get('author')}</div>
          <p class = 'body'> ${this.model.get('body')}<p>
          `;
        } else {
            return `
            <div class = 'author'> ${this.model.get('author')}</div>
            <p class = 'body'> ${this.model.get('body')}<p>
            <input class ="deleteButton" type="button" name="delete" value="Delete">
            `;
        }
    },
    events: {
        'click .deleteButton': 'delete'
    },
    delete: function(model) {
        this.model.destroy({});
    }
});

// let tweetview = new Tweetview();

export default Tweetview;
