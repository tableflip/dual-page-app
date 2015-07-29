# Dual page app

Main components:

## dualRoute(\<appOrPage>, \<path>, \<handler>)

Create a GET request route in an express or page.js app.

## dualHandler(\<render>, \<init>)

Create a route handler function for GET request. It's assumed in the browser that the handler is for a page.js route and on the server it's for an express route.

The `render` function is passed `ctx/req` (depending on browser/server environment) and a callback. Once rendered it should call the callback with the rendered html. e.g.

```js
function render (ctx, cb) {
  var itemId = ctx.params.itemId // URL params
  // Get data for template...
  cb(null, '<div>' + itemId + '</div>')
}
```

The rendered HTML is either sent back from the server, or it replaces the page `<body>` depending on environment.

The `init` function is called by the handler after rendering.
