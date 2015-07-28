var render = require('./render')
var tpl = require('./templates/content.jade')

module.exports = function (page, api) {
  page('/', function (ctx) {
    render(ctx, api, tpl, function (err, html) {
      document.body.innerHTML = html

      var link = document.querySelector('a[href="#"]')

      link.addEventListener('click', function (e) {
        e.preventDefault()
        page('/item/138')
      })
    })
  })
}
