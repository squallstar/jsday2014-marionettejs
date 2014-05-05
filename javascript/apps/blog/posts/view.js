App.module("BlogApp.Posts", function(Posts, App, Backbone, M, $, _){

  Posts.View = Backbone.Marionette.View.extend({
    tagName: "section",
    className: "posts"
  });

});