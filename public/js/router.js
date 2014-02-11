// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsxtransformer',
  'vm'
], function ($, _, Backbone, React, JSXTransformer,Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'modules': 'modules',
      'optimize': 'optimize',
      'backbone/:section': 'backbone',
      'backbone': 'backbone',
      'manager': 'manager',
      
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){

    var app_router = new AppRouter;
    //COMMENT : route boilerplate    
    // app_router.on('route:showProjects', function(){
   
    //     // Call render on the module we loaded in via the dependency array
    //     var projectsView = new ProjectsView();
    //     projectsView.render();

    // });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
