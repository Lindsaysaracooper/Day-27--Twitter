import Backbone from 'backbone';
import router from '../router';
import $ from 'jquery';
import session from '../models/session';

const loginView = Backbone.View.extend({

    tagName: 'section',
    className: 'login',
    events: {
        'click .loginButton': 'loginButtonFunction',
        'click .signUpButton': 'loginButtonFunction'
    },
    loginButtonFunction: function(e) {
      let url;
        if ($(e.target).attr('class') === '.loginButton') {
            url = `https://baas.kinvey.com/user/${settings.appId}/login`;
        } else {
            url = session.urlRoot;
        }
        let username = this.$('#username').val();
        let password = this.$('#password').val();
        // e.preventdefault();
        session.save({
            username: username,
            password: password
        }, {
            url: url,
            success: function(model, response) {
                model.unset('password');
                router.navigate('tweetPage', {
                    trigger: true
                });
            },
            error: function() {
                alert('Error, You are not logged in');
            }
        });
    },
    template: function() {
        return `
        <h2>Log in to your account</h2>
      	<input id ="username" type="text" placeholder="username" value="">
      	<input id ="password" type="password" placeholder="password" value="">
      	<input class ="loginButton" type="button" name="Login" value="LOG IN">
        <h3> Don't have an account? Sign up:</h3>
        <h2>Join Twitter today</h2>
        <input type="text" placeholder="username" value="">
        <input type="password" placeholder="username" value="">
        <input class ="signUpButton" type="button" name="Sign Up" value="SIGN UP">
        `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default loginView;
