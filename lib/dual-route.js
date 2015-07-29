module.exports = function (appOrPage, path, handler) {
  if (!process.browser) {
    return appOrPage.get(path, handler)
  } else {
    return appOrPage(path, handler)
  }
}