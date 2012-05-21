(function($) {

    /** Uses the HTML5 data- attribute to add a larger version of an image
      * then displays that image in a simple lightbox
      * 
      * How to use: add a data- attribute to the <img> element 
      * with the url of the larger version of your image.
      * 
      * Example: <img src="http://placekitten.com/200/300" alt="aww, a kitten!" width="200" height="300" data-large-src="http://placekitten.com/400/600">
      * The plugin will go through each img element on the page; 
      * if it has the data-large-src (or your own defined attribute) it will 
      * wrap that in an <a href> element that will open a modal lightbox
      * when clicked.
      * 
      * Author: Morgan Estes (@morganestes) http://github.com/morganestes
      * 
      * TODO Implement the modal lightbox code
      */
    $.fn.datalightbox = function(options) {

        if (!this.length) {
            return this;
        }

        var opt = $.extend({}, $.fn.datalightbox.defaults, options);

        return this.each(function() {
            var $this = $(this),
                img_large = $this.attr(opt.target),
                is_lb = function(img_large) {
                    var retval;
                    if (typeof img_large === "undefined") {
                        retval = false;
                    } else {
                        retval = true;
                    }
                    return retval;
                };

            if (is_lb(img_large)) {
                $this.wrap('<a class="' + opt.wrapper_class + '" href="' + img_large + '"></a>');
            }

        });
    };

    // default options
    $.fn.datalightbox.defaults = {
        target: 'data-large-src',
        wrapper_class: 'lightbox'
    };



})(jQuery);

// remove the lines below if you want to call the function yourself
// otherwise, it will automatically run on page load
jQuery(function($) {
    $('img').datalightbox();
});
