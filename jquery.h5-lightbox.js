/*!
 * jQuery h5-lightbox plugin 1.1.1
 * http://plugins.jquery.com/h5-lightbox/
 */
 /* @author Morgan Estes (@morganestes) http://github.com/morganestes
 * @source Lightbox code: http://bit.ly/MzTDLT
 *
 * Uses the HTML5 data- attribute to add a larger version of an image
 * then displays that image in a simple lightbox
 *
 * How to use: add a data- attribute to the <img> element
 * with the url of the larger version of your image.
 *
 * Example: <img src="http://placekitten.com/200/300" alt="kitteh!"
 *  width="200" height="300" data-large-src="http://placekitten.com/400/600">
 * The plugin will go through each img element on the page;
 * if it has the data-large-src (or your own defined attribute) it will
 * wrap that in an <a href> element that will open a modal lightbox
 * when clicked.
 */
(function( $ ) {
$.fn.h5lightbox = function( options ) {

    if( !this.length ) {
        return this;
    }

    var opt = $.extend( $.fn.h5lightbox.defaults, options );

    return this.each(function() {

        var $this = $( this ),
            imgLarge = $this.attr( opt.target ),
            /**
             * check if the image has the proper data attribute
             * @param {String} img_large Attribute set in options.
             * @returns {Boolean}
             */
            isLightbox = function( imgLarge ) {
                return ( typeof imgLarge !== "undefined" );
            };

        if ( isLightbox( imgLarge ) ) {
            $this.wrap( "<a class='" + opt.wrapperClass + "' href='" + imgLarge + "'></a>" );
        }

        // lightbox implementation
        $( "a." + opt.wrapperClass ).click(function( e ) {
            e.preventDefault();
            var lightbox,
            lbImageHref = $( this ).attr( "href" );

            if ( $( "#lightbox" ).length ) {
                $( "#lb_img" ).html( "<img src='" + lbImageHref + "' />" );
                $( "#lightbox" ).show();
            } else {
                lightbox =
                    "<div id='lightbox'>" +
                        "<p>Click to close</p>" +
                        "<div id='lightbox-img'>" +
                            "<img src='" + lbImageHref + "' />" +
                        "</div>" +
                    "</div>";

                $( "body" ).append( lightbox );
            }
        });

        $( document ).on( "click", "#lightbox", function() {
            $( "#lightbox" ).hide();
        });
    });
};

// default options
$.fn.h5lightbox.defaults = {
    target: "data-large-src",
    wrapperClass: "lightbox"
};

})(jQuery);

// remove the lines below if you want to call the function yourself
// otherwise, it will automatically run on page load
jQuery(function ($) {
    $("img").h5lightbox();
});
