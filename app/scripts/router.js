import $ from 'jquery';
import Backbone from 'backbone';
import loginView from './views/loginView';


const Router = Backbone.Router.extend ({

routes:{
  login:'loginFunction',
  signup:'signupFunction',
  tweetPage:'tweetPageFunction'
},

loginFunction: function (){
  let login = new loginView ();
  login.render();
  $('.container').append(login.$el);
},

tweetPageFunction: function (){
$('.container').empty().append(`<div> YAS QUEEEN </div>`);
// append every componant of the tweet page including making, seeing, profile for tweet

}


});


const router = new Router ();

export default router;
