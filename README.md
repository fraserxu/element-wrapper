element-wrapper
==================

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

A simple and safe way to set innerHTML for [yo-yo](https://github.com/maxogden/yo-yo) or [bel](https://github.com/shama/bel) component.

### Intall

```sh
$ npm i element-wrapper
```

### Code

```JavaScript
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

```

### API

```JavaScript
var element = elementWrapper(htmlString, opts)
```

Please check [sanitize-html](https://www.npmjs.com/package/sanitize-html) for available options.

### Usage

```JavaScript
var yo = require('yo-yo')
var elementWrapper = require('../index.js')

var htmlString = '<div class="danger">xx dangerously set html</div>'
var app = yo`${elementWrapper(htmlString, {
  allowedAttributes: {
    '*': ['class']
  }
})}`

document.body.appendChild(app)
```

### License

MIT

[npm-image]: https://img.shields.io/npm/v/element-wrapper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/element-wrapper
[travis-image]: https://img.shields.io/travis/fraserxu/element-wrapper/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/fraserxu/element-wrapper
[downloads-image]: http://img.shields.io/npm/dm/element-wrapper.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/element-wrapper
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
