import $ from 'jquery';
import Backbone from 'backbone';
import loginView from './views/loginView';
import session from './models/session';
import TweetPageView from './views/TweetPageView';


const Router = Backbone.Router.extend ({

routes:{
  login:'loginFunction',
  signup:'signupFunction',
  tweetPage:'tweetPageFunction',
  logout: 'logoutFunction'
},

loginFunction: function (){
  let login = new loginView ();
  login.render();
  $('.container').empty().append(login.$el);
},

tweetPageFunction: function (){
let tweetPageView = new TweetPageView();
tweetPageView.render();
$('.container').empty().append(tweetPageView.$el);

},



});


const router = new Router ();

export default router;
