var tpl = require('./home.jade')

module.exports = function (dual) {
  dual('/', render, init)

  function render (ctx, cb) {
    cb(null, tpl())
  }

  function init (ctx) {
    var link = document.querySelector('a[href="#"]')

    link.addEventListener('click', function (e) {
      e.preventDefault()
      dual.page('/item/138')
    })
  }
}
