App.module("BlogApp.Posts", function(Posts, App, Backbone, M, $, _){

  Posts.PostView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "post",
    template: "#post-template",
    events: {
      "click a" : "showSinglePost"
    },

    // here just as an example
    templateHelpers: {
      showMessage: function(){
        return this.name + " is the coolest!"
      }
    },

    // overrides the default behaviour
    serializeData: function(){
      return _.extend(this.model.toJSON(), {
        "foo" : "bar"
      });
    },

    showSinglePost: function(event){
      event.preventDefault();
      Backbone.history.navigate("posts/" + this.model.get('id'));
    }
  });

  Posts.View = Backbone.Marionette.CompositeView.extend({
    tagName: "section",
    className: "posts",
    template: "#posts-template",
    itemView: Posts.PostView,
    itemViewContainer: "ul",

    initialize: function(options){
      options.collection.fetch();
    }
  });

});