App.module("BlogApp", function(BlogApp, App, Backbone, Marionette, $, _){

  BlogApp.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      ""          : "index",
      "posts"     : "showArticles",
      "posts/:id" : "showArticle"
    }
  });

  var API = {
    index: function(){
      Backbone.history.navigate(App.rootRoute, true);
    },
    showArticles: function(){
      BlogApp.Posts.Controller.Show();
    },
    showArticle: function(id){
      BlogApp.Posts.Controller.Show(id);
    }
  };

  App.addInitializer(function(){
    new BlogApp.Router({
      controller: API
    });
  });

});