module.exports = function (appOrPage, path, handler) {
  if (process.browser) {
    return appOrPage(path, handler)
  } else {
    return appOrPage.get(path, handler)
  }
}
