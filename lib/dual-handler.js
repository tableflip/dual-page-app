var firstRoute = true
var noop = function () {}

module.exports = function (render, init) {
  init = init || noop

  if (!process.browser) {
    return function (req, res, next) {
      render(req, function (err, html) {
        if (err) return next(err)
        res.send(html)
        init(req, res)
      })
    }
  } else {
    return function (ctx) {
      if (firstRoute) {
        firstRoute = false
        return init(ctx)
      }

      render(ctx, function (err, html) {
        if (err) return console.error('Render error', err)
        document.body.innerHTML = html
        init(ctx)
      })
    }
  }
}