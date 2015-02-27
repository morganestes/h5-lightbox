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
                altText = $this.attr("alt"),
                page = location.href,
            /**
             * check if the image has the proper data attribute
             * @param {String} img_large Attribute set in options.
             * @returns {Boolean}
             */
            isLightbox = function( imgLarge ) {
                return ( typeof imgLarge !== "undefined" );
            };

        if ( isLightbox( imgLarge ) ) {
                $this.wrap("<a class='" + opt.wrapperClass + "' href='" + imgLarge + "'" + "' title='" + altText + "' data-page='" + page + "'></a>");
        }

        // lightbox implementation
        $( "a." + opt.wrapperClass ).click(function( e ) {
            e.preventDefault();
                    var lbImageHref = $(this).attr("href"),
                    lbImageAlt = $(this).attr("title"),
                    lbPage = $(this).attr("data-page");

            if ( $( "#lightbox" ).length ) {
                    $("#lightbox-img").html("<img class='large' src='" + lbImageHref + "'' alt='" + lbImageAlt + "' />");
                $( "#lightbox" ).show();
            } else {
                    var lightbox =
                    "<div id='lightbox'>" +
                        "<p>Click anywhere to close</p>" +
                        "<div id='lightbox-img'>" +
                        "<img class='large' src='" + lbImageHref + "'' alt='" + lbImageAlt + "' />" +
                        "</div>" +
                        "<a href='https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(lbPage) + "&media=" + encodeURIComponent(location.protocol + "//" + location.hostname + "/" + lbImageHref) + "&description=" + encodeURIComponent(lbImageAlt) + "'" +
                        "data-pin-do='buttonPin'" +
                        "data-pin-config='above'" +
                        " target='_blank'" +
                        "'>" +
                        "<img class='social' src='//assets.pinterest.com/images/pidgets/pin_it_button.png' />" +
                        "</a>" +
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
