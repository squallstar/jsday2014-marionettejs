# To be used only if you're using Rails with the tilt-jade gem

Backbone.Marionette.Renderer.render = (template, data) ->
  path = JST["path/to/tpl/" + template]
  unless path
    throw "Template #{template} not found!"
  path(data)