App.module("BlogApp", function(BlogApp, App, Backbone, Marionette, $, _){

  BlogApp.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      "posts"     : "showArticles",
      "posts/:id" : "showArticle"
    }
  });

  var API = {
    showArticles: function() {
      BlogApp.Posts.Controller.Show();
    },
    showArticle: function(id) {
      BlogApp.Posts.Controller.Show(id);
    }
  };

  App.addInitializer(function() {
    new BlogApp.Router({
      controller: API
    });
  });

});