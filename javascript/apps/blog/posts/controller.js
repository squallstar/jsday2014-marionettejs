App.module("BlogApp.Posts", function(Posts, App, Backbone, Marionette, $, _){

  Posts.Controller = {
    Show: function(){
      var layout = new Posts.View(new App.Entities.Posts);
      App.mainRegion.show(layout)
    }
  };

});