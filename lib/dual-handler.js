var firstRoute = true
var noop = function () {}

module.exports = function (render, init) {
  init = init || noop

  if (process.browser) {
    return function (ctx) {
      if (firstRoute) {
        firstRoute = false
        return init(ctx)
      }

      render(ctx, function (err, html) {
        if (err) return console.error('Render error', err)

        var ct = document.createElement('div')
        ct.innerHTML = html

        var childNodes = ct.querySelector('#content').childNodes

        document.body.innerHTML = ''

        while (childNodes[0]) {
          document.body.appendChild(childNodes[0])
        }

        init(ctx)
      })
    }
  } else {
    return function (req, res, next) {
      render(req, function (err, html) {
        if (err) return next(err)
        res.send(html)
      })
    }
  }
}