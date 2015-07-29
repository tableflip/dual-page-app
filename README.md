# Dual page app

## Getting started

**server.js**
```js
var express = require('express')
var dual = require('./lib/dual')(express())
var home = require('./home')

// Setup homepage route for the server
home(dual)

app.listen(3000) // Start app
```

**client.js**
```js
var page = require('page')
var dual = require('./lib/dual')(page)
var home = require('./home')

// Setup homepage route for the client
home(dual)

page() // Start app
```

**home.js**
```js
var tpl = require('./home.jade')

module.exports = function (dual) {
  // Attach to /
  dual('/', render, init)

  // Render the page
  function render (ctx, cb) {
    // Do async IO, eventually call cb with rendered HTML
    cb(null, tpl())
  }

  // Initialisation for the client
  function init (ctx) {
    var link = document.querySelector('a[href="#"]')

    link.addEventListener('click', function (e) {
      e.preventDefault()
      dual.page('/item/138')
    })
  }
}
```

## dual components

### dualRoute(\<appOrPage>, \<path>, \<handler>)

Create a GET request route in an express or page.js app.

### dualHandler(\<render>, \<init>)

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

The `init` function is called by the handler after rendering (client side only).

Please see https://github.com/tableflip/dual-page-app/blob/master/item.js for an example.
