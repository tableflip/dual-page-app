var dualRoute = require('../lib/dual-route')
var dualHandler = require('../lib/dual-handler')

module.exports = function (appOrPage) {
  var dual = function (path, render, init) {
    dualRoute(appOrPage, path, dualHandler(render, init))
  }

  if (process.browser) {
    dual.page = appOrPage
  } else {
    dual.app = appOrPage
  }

  return dual
}
