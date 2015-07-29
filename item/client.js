var render = require('./render')
var tpl = require('./templates/content.jade')
var dualRoute = require('../lib/dual-route')
var dualHandler = require('../lib/dual-handler')

module.exports = function (page, api) {
  dualRoute(page, '/item/:itemId', dualHandler(render.bind(null, api, tpl)))
}
