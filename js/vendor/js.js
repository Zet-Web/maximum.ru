$(window).load(function() {
    var current_width = $(window).width();
    //do something with the width value here!
    if(current_width < 481)
        $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("m480");

    else if(current_width < 739)
        $('html').addClass("m768").removeClass("desktop").removeClass("m320").removeClass("tablet");

    else if (current_width < 970)
        $('html').addClass("tablet").removeClass("desktop").removeClass("m320").removeClass("m768");

    else if (current_width > 971)
        $('html').addClass("desktop").removeClass("m320").removeClass("m768").removeClass("tablet");

    if(current_width < 650)
        $('html').addClass("mobile-menu").removeClass("desktop-menu");

    if(current_width > 651)
        $('html').addClass("desktop-menu").removeClass("mobile-menu");

});

//update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
$(window).resize(function(){
    var current_width = $(window).width();
    //do something with the width value here!
    if(current_width < 481)
        $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("tablet");

    else if(current_width < 669)
        $('html').addClass("m768").removeClass("desktop").removeClass("m320").removeClass("tablet");

    else if (current_width < 970)
        $('html').addClass("tablet").removeClass("desktop").removeClass("m320").removeClass("m768");

    else if (current_width > 971)
        $('html').addClass("desktop").removeClass("m320").removeClass("m768").removeClass("tablet");

    if(current_width < 650)
        $('html').addClass("mobile-menu").removeClass("desktop-menu");

    if(current_width > 651)
        $('html').addClass("desktop-menu").removeClass("mobile-menu");


});

$(document).ready(function() {



    $(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    $('.tab-content article').css({height: '290'});
    $('.show-all').click(function(){
        if ($(this).hasClass('active-show')) {
                $(this).parent().parent().find('article').css({height: '290'}, 500);
                $(this).removeClass('active-show');
                        }
        else {
                $(this).parent().parent().find('article').css({height: 'auto'}, 500);
                $(this).addClass('active-show');

        }
        return false;
    });

    /*========= EDITABLE TABLE INIT ======*/

    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'inline';

    $('#users .editable').editable({
        type: 'text',
        name: 'username',
        url: '/post',
        title: 'Enter username'
    });


    /*====== REMOVE ROW FROM TABLE ======*/
    $('.remover-icon').click(function(){
        $(this).parent().parent().remove();
    });

    /*ADD HTMLTableRowElement*/
    $("#add_tableRow").click(function(){
        $("#users").append('<tr >' +
        '<td><a class="editable editable-click editable-open" data-original-title="" data-placement="right" data-title="Enter username" data-type="text" href="#" title=""> Введите ваше наименование </a> <span class="edit-icon"></span>' +
        '</td>' +
        '<td>20</td>' +
        '<td><a class="remover-icon" href="#"></a>'  +
        '</td> ' +
        '</tr>')
        });

    //make username editable
    $('#username').editable();
    $('#user_mail').editable();
    $('#user_tel').editable();
    $('#user_adress').editable();




    //make status editable
    $('#status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
        /*
         //uncomment these lines to send data on server
         ,pk: 1
         ,url: '/post'
         */
    });


    /*================= CHANGE PHOTO PROFILE ===============*/
    $(function(){
        $('#profile_image').change( function(e) {
            var img = URL.createObjectURL(e.target.files[0]);
            $('.profile-images').attr('src', img);
        });
    });


    /*======== TEL MASK FIR INPUT(Plugin required) ========*/
    $('.tel').mask('+0(000)-000-00-00');



    $('.slick-view.slider').slick({
        slidesToShow:6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
        //variableWidth: true,
    });

    $('#profile-tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    var a = function(self){
        self.anchor.fancybox();
    };
    $("#pikame").PikaChoose({
        showCaption:false,
        autoPlay: false
    });

    $(":file").filestyle();



/*    $(".navigator").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".slider",
        focusOnSelect: true,
        infinite: false,
    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        console.log(currentSlide, nextSlide);
        $(this).find(".item").removeClass("active");
        $(this).find("[data-slick-index=\"" + nextSlide + "\"]").addClass("active");

    }).on("afterChange", function (event, slick, currentSlide) {
        console.log(currentSlide);
        $(this).find(".item").removeClass("active2");
        $(this).find("[data-slick-index=\"" + currentSlide + "\"]").addClass("active2");

    });*/



}); // /.document-ready


/* Function to animate height: auto */
function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
}



$(window).resize(function(){

});


/*

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
    return true;
    }
    else {
    return false;
    }
    }
var mob = detectmob();
function initialize() {
    var styles = [ { "stylers": [ { saturation: -100 } ] } ];
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Stirka.ru"});

    var myLatlng = new google.maps.LatLng( 55.773230, 37.590044);

    var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel : false,
    draggable: (mob?false:true),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var goldStar = {
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    scale: 5,
    strokeColor: "black",
    strokeWeight: 3
    };


    var marker = new google.maps.Marker({
    position: myLatlng,
    fillColor: "yellow",
    map: map,
    title:"Stirka.ru",
    icon: "images/svg/pins.svg"
    })
    }
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
    'callback=initialize';
    document.body.appendChild(script);
    }

window.onload = loadScript;
*/



/*


 /**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.1.3
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
;(function ($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function (options) {
        // don't do anything if touch is supported
        // (plugin causes some issues on mobile)
        if('ontouchstart' in document) return this; // don't want to affect chaining

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function () {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 500,
                    hoverDelay: 0,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    hoverDelay: $(this).data('hover-delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                showEvent   = 'show.bs.dropdown',
                hideEvent   = 'hide.bs.dropdown',
            // shownEvent  = 'shown.bs.dropdown',
            // hiddenEvent = 'hidden.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                timeout, timeoutHover;

            $parent.hover(function (event) {
                // so a neighbor can't open the dropdown
                if(!$parent.hasClass('open') && !$this.is(event.target)) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            }, function () {
                // clear timer for hover event
                window.clearTimeout(timeoutHover)
                timeout = window.setTimeout(function () {
                    $this.attr('aria-expanded', 'false');
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                }, settings.delay);
            });

            // this helps with button groups!
            $this.hover(function (event) {
                // this helps prevent a double event from firing.
                // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
                if(!$parent.hasClass('open') && !$parent.is(event.target)) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function (){
                var $this = $(this);
                var subTimeout;
                $this.hover(function () {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function () {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function () {
                        $submenu.hide();
                    }, settings.delay);
                });
            });

            function openDropdown(event) {
                // clear dropdown timeout here so it doesnt close before it should
                window.clearTimeout(timeout);
                // restart hover timer
                window.clearTimeout(timeoutHover);

                // delay for hover event.
                timeoutHover = window.setTimeout(function () {
                    $allDropdowns.find(':focus').blur();

                    if(settings.instantlyCloseOthers === true)
                        $allDropdowns.removeClass('open');

                    // clear timer for hover event
                    window.clearTimeout(timeoutHover);
                    $this.attr('aria-expanded', 'true');
                    $parent.addClass('open');
                    $this.trigger(showEvent);
                }, settings.hoverDelay);
            }
        });
    };

    $(document).ready(function () {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
        $('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, window);


