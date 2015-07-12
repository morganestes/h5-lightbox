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
        console.warn("h5 Lightbox: No objects were selected");
        return this;
    }

    var opt = $.extend( $.fn.h5lightbox.defaults, options );

    return this.each(function() {

        var $this = $( this ),
            imgLarge = $this.attr( opt.target ),
            imgCaption = $this.attr( opt.targetCaption );
            /**
             * check if the image has the proper data attribute
             * @param {String} img_large Attribute set in options.
             * @returns {Boolean}
             */
            isLightbox = function( imgLarge ) {
                return ( typeof imgLarge !== "undefined" );
            };

        if ( isLightbox( imgLarge ) ) {
            $this.wrap( "<a class='" + opt.wrapperClass + "' href='" + imgLarge + "' title='" + imgCaption + "'></a>" );
        }

        // lightbox implementation
        $( "a." + opt.wrapperClass ).click(function( e ) {
            e.preventDefault();
            var lightbox,
            lbImageHref = $( this ).attr( "href" );
            lbImageCaption = $( this ).attr( "title" );

            if ( $( "#lightbox" ).length == 0 ) {
                lightbox =
                    "<div id='lightbox'>" +
                        ( opt.showClose ? "<p>Click to close</p>" : "" ) +
                        "<figure class='loading'>" +
                            "<img />" +
                            ( opt.showCaptions ? "<figcaption>" + lbImageCaption + "</figcaption>" : "" ) +
                        "</figure>" +
                    "</div>";

                $( "body" ).append( lightbox );
            }

            $( "#lightbox figure img" )
                .load(function() { $(this).parent().removeClass("loading") })
                .attr( "src", lbImageHref );
            $( "#lightbox figure figcaption" ).text( lbImageCaption );
            $( "#lightbox" ).show();
        });

        $( document ).on( "click", "#lightbox", function() {
            $( this ).hide();
        });
    });
};

// default options
$.fn.h5lightbox.defaults = {
    target: "data-large-src",
    targetCaption: "alt",
    showCaptions: true,
    showClose: true,
    wrapperClass: "lightbox"
};

})(jQuery);
