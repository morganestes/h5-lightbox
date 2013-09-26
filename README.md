h5-lightbox
===========

A jQuery lightbox plugin built on HTML5. It uses the [HTML5 `data` attribute](http://html5doctor.com/html5-custom-data-attributes/) to add a larger version of an image then displays that image in a simple modal lightbox.


## How to use ##
* Add jQuery (at least 1.7) and the plugin to your page.
* Add a `data-large-src` attribute to the `<img>` element with the url of the larger version of your image.
* Add the jQuery call to run the plugin on your images.
* Click and enjoy.

### Example: ###

	<img src="http://placekitten.com/200/300" alt="kitteh!" 
	width="200" height="300" 
	data-large-src="http://placekitten.com/400/600" />
	
	<script>
 	jQuery(function ($) {
    	$("img").h5lightbox();
	});
	</script>


The plugin will go through each `img` element on the page; if it has the `data-large-src` (or your own defined attribute) it will wrap that in a link that opens a modal lightbox when clicked.

## License ##

This plugin is licensed under MIT. Have at it.

### Author ###
[Morgan Estes](http://morganestes.me)

### Grab the source and fork it ###
[https://github.com/morganestes/h5-lightbox](https://github.com/morganestes/h5-lightbox)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/morganestes/h5-lightbox/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

