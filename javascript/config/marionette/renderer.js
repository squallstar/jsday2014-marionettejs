Backbone.Marionette.Renderer.render = function(template, data){
  tpl = _.template($.trim($( "script." + template ).html()));
  if (!tpl) throw("Template " + template + " not found!");
  return tpl(data);
};