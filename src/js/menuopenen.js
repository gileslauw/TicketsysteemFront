/**
 * Created by giles on 20/11/2015.
 */
var main = function() {
    /* Push the body and the nav over by 285px over */
    $('.hamburger').click(function() {

        $('body').animate({
            left: "285px"
        }, 200);
    });


};


$(document).ready(main);