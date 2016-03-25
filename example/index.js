var yo = require('yo-yo')
var elementWrapper = require('../index.js')

var htmlString = '<div class="danger">xx dangerously set html</div>'
var app = yo`${elementWrapper(htmlString, {
  allowedAttributes: {
    '*': ['class']
  }
})}`

document.body.appendChild(app)
