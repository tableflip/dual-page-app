var render = require('./render')
var tpl = require('./templates/content.jade')
var dualRoute = require('../lib/dual-route')
var dualHandler = require('../lib/dual-handler')

module.exports = function (page, api) {
  dualRoute(page, '/', dualHandler(render.bind(null, api, tpl), init))

  function init (ctx) {
    var link = document.querySelector('a[href="#"]')

    link.addEventListener('click', function (e) {
      e.preventDefault()
      page('/item/138')
    })
  }
}
