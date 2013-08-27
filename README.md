h5-lightbox
===========

A jQuery lightbox built on the [HTML5 `data` attribute](http://html5doctor.com/html5-custom-data-attributes/).


## About the plugin ##
Uses the HTML5 `data` attribute to add a larger version of an image then displays that image in a simple lightbox.

### Author ###
[Morgan Estes](http://morganestes.me)

### Source ###
[https://github.com/morganestes/h5-lightbox](https://github.com/morganestes/h5-lightbox)

## How to use ##
Add a `data-large-src` attribute to the `<img>` element with the url of the larger version of your image.

### Example: ###
    <img src="http://placekitten.com/200/300" alt="kitteh!" width="200" height="300" data-large-src="http://placekitten.com/400/600">

The plugin will go through each `img` element on the page; if it has the `data-large-src` (or your own defined attribute) it will wrap that in a link that opens a modal lightbox when clicked.

## License ##

Copyright (c) 2012 Morgan W. Estes (http://github.com/morganestes)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/morganestes/h5-lightbox/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

