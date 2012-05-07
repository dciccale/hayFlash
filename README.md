# hayFlash

Know if Flash Player is installed on your browser and it's version.

**Browser support:** IE6+, Firefox, Opera, Safari, Chrome
**Lightweight** (minified and gzipped):
  - JavaScript version: 187 bytes
  - jQuery Utility: 193 bytes

[**Live Demo**](http://dciccale.github.com/hayFlash)

## Usage
hayFlash comes in two versions, pure JavaScript and as a jQuery Utility.

### JavaScript version
´´´javascript
if (window.hayFlash) {
  // do something with flash
  console.log('Flash player version:', window.hayFlash);
} else {
  // show an image or whatever
}
´´´

### jQuery Utility
´´´javascript
if ($.hayFlash) {
  // do something with flash
  console.log('Flash player version:', $.hayFlash);
} else {
  // show an image or whatever
}
´´´

## License

(The MIT License)

Copyright (c) 2012 [@tdecs](http://twitter.com/tdecs)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.