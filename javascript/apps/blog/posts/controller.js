App.module("BlogApp.Posts", function(Posts, App, B, M, $, _){

  Posts.Controller = {
    Show: function(){
      var layout = new Posts.View({collection: new App.Entities.Posts});
      App.mainRegion.show(layout);
    }
  };

});