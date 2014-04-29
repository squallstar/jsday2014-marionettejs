MyCustomHeaderRegion = Marionette.Region.extend({
  el: "#header-region"
});

MyApp.addRegions({
  headerRegion: MyCustomHeaderRegion
});



var myView = new MyView();

// render and display the view
App.mainRegion.show(myView);

// closes the current view
App.mainRegion.close();

// Show the first view.
var myView = new MyView();
MyApp.mainRegion.show(myView);

// Replace the view with another. The
// `close` method is called for you
var anotherView = new AnotherView();
MyApp.mainRegion.show(anotherView);