var test = require('tape')
var yo = require('yo-yo')
var elementWrapper = require('../index.js')

test('test should set innerHTML', function (t) {
  t.plan(2)
  var htmlString = '<div class="danger">dangerously set html</div>'
  var app = yo`${elementWrapper(htmlString, {
    allowedAttributes: {
      '*': ['class']
    }
  })}`
  document.body.appendChild(app)

  var element = document.querySelector('.danger')

  t.equal(element.textContent, 'dangerously set html')
  t.equal(element.className, 'danger')
  t.end()
})
