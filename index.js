var yo = require('yo-yo')
var sanitizeHtml = require('sanitize-html')

module.exports = function elementWrapper (source, opts) {
  opts = opts || {}

  // create an empty container
  var container = document.createElement('span')
  // use innerHTML to set the content
  container.innerHTML = sanitizeHtml(source, opts)

  return yo`${container}`
}
