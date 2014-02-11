// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'handlebars',
  'router', // Request router.js
], function($, _, Backbone,HandleBars, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});