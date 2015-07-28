var render = require('./render')
var jade = require('jade')
var tpl = jade.compileFile(__dirname + '/templates/index.jade')

module.exports = function (app, api) {
  app.get('/', function (req, res, next) {
    render(req, api, tpl, function (err, html) {
      if (err) return next(err)
      res.send(html)
    })
  })
}
