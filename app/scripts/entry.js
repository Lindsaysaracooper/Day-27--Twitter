import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import session from './models/session';
import settings from './settings';

$(document).ajaxSend(function(evt, xhrAjax, jquerAjax){
  if (session.get('authtoken')){
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
});

$('.logoutButton').click(function(evt){
  router.navigate('login', {trigger:true});
});

Backbone.history.start();


if (!session.username){
  router.navigate('login', {trigger: true});

}
