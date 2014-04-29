App = new Backbone.Marionette.Application();

App.rootRoute = 'welcome';

App.on("initialize:before", function(options){
  // do something (if needed, ofc)
});

App.on("initialize:after", function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});

App.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region"
  footerRegion: "#footer-region"
});