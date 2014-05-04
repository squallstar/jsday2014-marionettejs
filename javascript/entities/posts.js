App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){

  Entities.Post = Backbone.Model.extend({});

  Entities.Posts = Backbone.Collection.extend({
    model: Entities.Post,
    url: "fixtures/articles.json"
  });

});