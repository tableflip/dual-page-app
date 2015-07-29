var render = require('./render')
var jade = require('jade')
var tpl = jade.compileFile(__dirname + '/templates/index.jade')
var dualRoute = require('../lib/dual-route')
var dualHandler = require('../lib/dual-handler')

module.exports = function (app, api) {
  dualRoute(app, '/item/:itemId', dualHandler(render.bind(null, api, tpl)))
}
