/*!
 * h5-lightbox jQuery plugin
 *
 * @version 1.2.2
 * @author Morgan Estes (@morganestes) http://github.com/morganestes
 * @link http://plugins.jquery.com/h5-lightbox/
 * @uses Lightbox code: http://bit.ly/MzTDLT
 *
 * Copyright (c) 2013-2014 Morgan Estes
 * @license Licensed under the MIT license.
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
                $( "#lightbox-img" ).html( "<img src='" + lbImageHref + "' />" );
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
            $( this ).hide();
        });
    });
};

// default options
$.fn.h5lightbox.defaults = {
    target: "data-large-src",
    wrapperClass: "lightbox"
};

})(jQuery);
