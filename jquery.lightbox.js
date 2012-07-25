/**
 * jQuery h5-lightbox plugin 1.0
 *
 * @author Morgan Estes (@morganestes) http://github.com/morganestes
 * @source Lightbox code: http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/super-simple-lightbox-with-css-and-jquery/
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
(function ($) {
    $.fn.h5lightbox = function (options) {

        if (!this.length) {
            return this;
        }

        var opt = $.extend($.fn.h5lightbox.defaults, options);

        return this.each(function () {

            var $this = $(this),
                img_large = $this.attr(opt.target),
                /**
                 * check if the image has the proper data attribute
                 * @param {String} img_large Attribute set in options.
                 * @returns {Boolean}
                 */
                is_lb = function (img_large) {
                    return (typeof img_large !== "undefined");
                };

            if (is_lb(img_large)) {
                $this.wrap('<a class="' + opt.wrapper_class + '" href="' + img_large + '"></a>');
            }

            // lightbox implementation
            $('a.' + opt.wrapper_class).click(function (e) {
                e.preventDefault();
                var lb_image_href = $(this).attr('href');

                if ($('#lightbox').length) {
                    $('#lb_img').html('<img src="' + lb_image_href + '" />');
                    $('#lightbox').show();
                }
                else {
                    var lightbox =
                        '<div id="lightbox">' +
                            '<p>Click to close</p>' +
                            '<div id="lb_img">' +
                                '<img src="' + lb_image_href + '" />' +
                            '</div>' +
                        '</div>';

                    $('body').append(lightbox);
                }
            });
            $('#lightbox').live('click', function () {
                $('#lightbox').hide();
            });
        });
    };

    // default options
    $.fn.h5lightbox.defaults = {
        target:'data-large-src',
        wrapper_class:'lightbox'
    };

})(jQuery);

// remove the lines below if you want to call the function yourself
// otherwise, it will automatically run on page load
jQuery(function ($) {
    $('img').h5lightbox();
});
