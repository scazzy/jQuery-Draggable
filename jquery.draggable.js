// Draggable (jQuery) Plugin
/*! Copyright (c) 2013 Elton Jain
 *
 * Version: 0.1
 * 
 * Requires: jQuery 1.7.2 or higher
 */


$.fn.draggable = function (opt) {

    opt = $.extend({
        handle: "",
        cursor: "move",
        axis: null,
        containParent: false
    }, opt);

    if (opt.handle === "") {
        var $el = this;
    } else {
        var $el = this.find(opt.handle);
    }

    return $el.css('cursor', opt.cursor).on("mousedown", function (e) {
        if (opt.handle === "") {
            var $drag = $(this).addClass('draggable');
        } else {
            var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
        }
        var z_idx = $drag.css('z-index'),
            drg_h = $drag.outerHeight(),
            drg_w = $drag.outerWidth(),
            pos_y = $drag.offset().top + drg_h - e.pageY,
            pos_x = $drag.offset().left + drg_w - e.pageX;


        var parW = $($el).parents().outerWidth(),
            parH = $($el).parents().outerHeight();

        // console.log($drag.offset().top + ", " + pos_y);

        $drag.css('z-index', 1000).parents().on("mousemove", function (e) {
            var off_top = e.pageY + pos_y - drg_h,
                off_left = e.pageX + pos_x - drg_w,
                offst = null;

            if (opt.containParent === true) {
                if (off_left < 0) off_left = 0;
                if (off_left > parW - drg_w) off_left = parW - drg_w;
                if (off_top < 0) off_top = 0;
                if (off_top > parH - drg_h) off_top = parH - drg_h;
            }

            if (opt.axis == "x") {
                offst = {
                    left: off_left
                };
            } else if (opt.axis == "y") {
                offst = {
                    top: off_top
                };
            } else {
                offst = {
                    left: off_left,
                    top: off_top
                };
            }

            $('.draggable').offset(offst).on("mouseup", function () {
                $drag.parents().off('mousemove');
                $(this).removeClass('draggable').css('z-index', z_idx);
            });

        });
        e.preventDefault(); // disable selection
    }).on("mouseup", function () {
        if (opt.handle === "") {
            $(this).removeClass('draggable');
        } else {
            $(this).removeClass('active-handle').parent().removeClass('draggable');
        }
        $el.off('mousedown', function (e) {
            e.preventDefault()
        });
    });
}
