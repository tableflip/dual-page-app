var render = require('./render')
var tpl = require('./templates/content.jade')

module.exports = function (page, api) {
  page('/item/:itemId', function (ctx) {
    render(ctx, api, tpl, function (err, html) {
      document.body.innerHTML = html
      console.log('Item detail page setup')
    })
  })
}
