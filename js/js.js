$(document).ready(function() {

  $('.play-action').click(function(){
    $(this).toggleClass('active');
  });

  $('.grid-iso').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 240
  });


  // $('.grid-iso').isotope({
  //   itemSelector: '.grid-item',
  //   masonry: {
  //     columnWidth: 200
  //   }
  // });
  /* This is for Masonry
  var container = document.querySelector('#container');
  var msnry = new Masonry( container, {
    // options
    columnWidth: 300,
    itemSelector: '.item',
    gutter: 10,
    isFitWidth: true
  });
  */


  /* This is for Masonry
  var container = document.querySelector('#container');
  var msnry = new Masonry( container, {
    // options
    columnWidth: 300,
    itemSelector: '.item',
    gutter: 10,
    isFitWidth: true
  });
  */

  // var container = document.querySelector('.isotope-box');
  // // init
  // var iso = new Isotope( container, {
  //   // options
  //   itemSelector: '.isotope-item',
  //   layoutMode: 'masonry',
  //   filter: '*',
  //   masonry: {
  //       columnWidth: 250,
  //       gutter: 10
  //   }
  // });




    $(function() {
        $('.minus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function() {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });



    $('.tab-content article').css({
        height: '290'
    });
    $('.show-all').click(function() {
        if ($(this).hasClass('active-show')) {
            $(this).parent().parent().find('article').css({
                height: '290'
            }, 500);
            $(this).removeClass('active-show');
        } else {

            $(this).parent().parent().find('article').css({
                height: 'auto'
            }, 500);
            $(this).addClass('active-show');

        }
        return false;
    });

    // $('.choose-st-btn').click(function() {
    //     if ($('#music_player').hasClass('active')) {
    //         $('#music_player').removeClass('active');
    //     } else {
    //         $('#music_player').addClass('active');
    //     }
    //     return false;
    // });




    $('.newest-items').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        slidesToScroll: 5
    });



    // hack so that the megamenu doesn't show flash of css animation after the page loads.
    // setTimeout(function () {
        // $('body').removeClass('init');
    // }, 500);




    /*======== TEL MASK FIR INPUT(Plugin required) ========*/
    //$('.tel').mask('+0(000)-000-00-00');


    /*     $('.slick-view.slider').slick({
            slidesToShow:6,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
            //variableWidth: true,
        });*/

    $('#news_maximum a').click(function(e) {
        e.preventDefault();
        $(this).tab('show')
    });


    $(document).on('click', 'a', function(e) {
        if ('#' == $(this).attr('href'))
            e.preventDefault();
    });

    var a = function(self) {
        self.anchor.fancybox();
    };



    /*    $("#pikame").PikaChoose({
            showCaption:false,
            autoPlay: false
        });*/

    // $(":file").filestyle();



    /*  $(".navigator").slick({
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

// <!--    $('.isotope-box').isotope({
//         itemSelector: '.isotope-item',
//         percentPosition: true,
//         layoutMode: 'masonry',
//         filter: '*'

//     });-->



}); // /.document-ready


/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({
        height: autoHeight
    }, parseInt(time)); // Animate to Auto Height
}

function z_tabs() {

    var tabs = document.getElementById('icetab-container').children();
    var tabcontents = document.getElementById('icetab-content').children();

    var myFunction = function() {
        var tabchange = this.mynum;
        for (var int = 0; int < tabcontents.length; int++) {
            tabcontents[int].className = ' tabcontent';
            tabs[int].className = ' icetab';
        }
        tabcontents[tabchange].classList.add('tab-active');
        this.classList.add('current-tab');
    }


    for (var index = 0; index < tabs.length; index++) {
        tabs[index].mynum = index;
        tabs[index].addEventListener('click', myFunction, false);
    }

}

$(window).resize(function() {

});




// function detectmob() {
//     if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var mob = detectmob();

// function initialize() {
//     var styles = [{
//         "stylers": [{
//             saturation: -100
//         }]
//     }];
//     var styledMap = new google.maps.StyledMapType(styles, {
//         name: "Maximum.ru"
//     });

//     var myLatlng = new google.maps.LatLng(55.740406, 37.590044);

//     var mapOptions = {
//         zoom: 15,
//         center: myLatlng,
//         scrollwheel: false,
//         draggable: (mob ? false : true),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     var map = new google.maps.Map(document.getElementById("map-1"),
//         myOptions);
//     map.mapTypes.set('map_style', styledMap);
//     map.setMapTypeId('map_style');

//     var goldStar = {
//         path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
//         scale: 5,
//         strokeColor: "black",
//         strokeWeight: 3
//     };


//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         fillColor: "yellow",
//         map: map,
//         title: "Maximum",
//         icon: "images/pins.png"
//     })
// }*/

//     function initialize() {
//         var latlng = new google.maps.LatLng(-34.397, 150.644);
//         var myOptions = {
//             zoom: 8,
//             center: latlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("map_canvas"),
//                 myOptions);
//     }
//     google.maps.event.addDomListener(window, "load", initialize);
// */

// function loadScript() {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp'; // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
//     document.body.appendChild(script);
// }

// window.onload = loadScript;*/



/*
'use strict';
var DURATIONS = { toggleIcon: 0.5 }, SELECTORS = {
        pauseBarRight: {
            origin: '.shape-element__pause-right',
            destinationGuide: '.guide-element__pause-right'
        },
        pauseBarLeft: {
            origin: '.shape-element__pause-left',
            destinationGuide: '.guide-element__pause-left'
        }
    }, EASINGS = { toggleIcon: Power2.easeOut }, boundUpdateAttr = function boundUpdateAttr(attr, value) {
        this.setAttribute(attr, value.toString());
    }, parsePathPointsAttr = function parsePathPointsAttr(attrString) {
        var pathExpression = /[achlmrqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, path = attrString.match(pathExpression).map(function (n) {
                return isNaN(+n) ? n : +n;
            });
        path.prefix = isNaN(path[0]) ? path.shift() : '';
        path.string = function () {
            return path.prefix + path.join(' ');
        };
        return path;
    }, boundSetStateOnToggle = function boundSetStateOnToggle() {
        this.isAnimating = false;
        this.isShowingPlay = !this.isShowingPlay;
    };
var init = function init(svgElem, opts) {
    var icon = Object.create(null), wireUpPolygonPoints = function wireUpPolygonPoints() {
            icon.POLYGON_POINTS = {
                pauseBarRight: {
                    start: parsePathPointsAttr(icon.DOM_REFS.pauseBarRight.getAttribute('points')),
                    end: parsePathPointsAttr(icon.DOM_REFS.pauseBarRightGuide.getAttribute('points')),
                    correspondingDOMElem: icon.DOM_REFS.pauseBarRight
                },
                pauseBarLeft: {
                    start: parsePathPointsAttr(icon.DOM_REFS.pauseBarLeft.getAttribute('points')),
                    end: parsePathPointsAttr(icon.DOM_REFS.pauseBarLeftGuide.getAttribute('points')),
                    correspondingDOMElem: icon.DOM_REFS.pauseBarLeft
                }
            };
        }, createPlayPauseTL = function createPlayPauseTL() {
            var TL = new TimelineMax({
                paused: true,
                onComplete: boundSetStateOnToggle.bind(icon),
                onReverseComplete: boundSetStateOnToggle.bind(icon)
            });
            var _arr = [
                icon.POLYGON_POINTS.pauseBarLeft,
                icon.POLYGON_POINTS.pauseBarRight
            ];
            for (var _i = 0; _i < _arr.length; _i++) {
                if (window.CP.shouldStopExecution(1)) {
                    break;
                }
                var pointSet = _arr[_i];
                TL.to(pointSet.start, DURATIONS.toggleIcon, {
                    endArray: pointSet.end,
                    ease: EASINGS.toggleIcon,
                    onUpdate: boundUpdateAttr.bind(pointSet.correspondingDOMElem, 'points', pointSet.start)
                }, 0);
            }
            window.CP.exitedLoop(1);
            return TL;
        };
    icon.svgElem = svgElem;
    icon.isAnimating = false;
    icon.isShowingPlay = true;
    icon.DOM_REFS = {
        pauseBarLeft: icon.svgElem.querySelector(SELECTORS.pauseBarLeft.origin),
        pauseBarLeftGuide: icon.svgElem.querySelector(SELECTORS.pauseBarLeft.destinationGuide),
        pauseBarRight: icon.svgElem.querySelector(SELECTORS.pauseBarRight.origin),
        pauseBarRightGuide: icon.svgElem.querySelector(SELECTORS.pauseBarRight.destinationGuide)
    };
    wireUpPolygonPoints();
    icon.mainIconTL = createPlayPauseTL();
    icon.handleClick = function handleClick() {
        if (!this.isAnimating) {
            this.isAnimating = true;
            if (this.isShowingPlay) {
                this.mainIconTL.play(0);
            } else {
                this.mainIconTL.reverse(0);
            }
            this.isPlaying = !this.isPlaying;
        }
    };
    icon.svgElem.addEventListener('click', icon.handleClick.bind(icon), false);
    return icon;
};
var icon = init(document.querySelector('#PlayPauseButton'));
*/


/*jslint browser: true */
/*global jQuery */

$(function() {
    function c() {
        p();
        var e = h();
        var r = 0;
        var u = false;
        l.empty();
        while (!u) {
            if (s[r] == e[0].weekday) {
                u = true
            } else {
                l.append('<div class="blank"></div>');
                r++
            }
        }
        for (var c = 0; c < 40 - r; c++) {
            if (c >= e.length) {
                l.append('<div class="blank"></div>')
            } else {
                var v = e[c].day;
                var m = g(new Date(t, n - 1, v)) ? '<div class="v">' : "<div>";
                l.append(m + "" + v + "</div>")
            }
        }
        var y = o[n - 1];
        a.css("background-color", y).find("h1").text(i[n - 1] + " " + t);
        f.find("div").css("color", y);
        l.find(".today").css("background-color", y);
        d()
    }

    function h() {
        var e = [];
        for (var r = 1; r < v(t, n) + 1; r++) {
            e.push({
                day: r,
                weekday: s[m(t, n, r)]
            })
        }
        return e
    }

    function p() {
        f.empty();
        for (var e = 0; e < 7; e++) {
            f.append("<div>" + s[e].substring(0, 3) + "</div>")
        }
    }

    function d() {
        var t;
        var n = $("#calendar").css("width", e + "px");
        n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({
            width: e / 7 + "px",
            height: e / 7 + "px",
            "line-height": e / 7 + "px"
        });
        n.find("#calendar_header").css({
            height: e * (1 / 7) + "px"
        }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px")
    }

    function v(e, t) {
        return (new Date(e, t, 0)).getDate()
    }

    function m(e, t, n) {
        return (new Date(e, t - 1, n)).getDay()
    }

    function g(e) {
        return y(new Date) == y(e)
    }

    function y(e) {
        return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()
    }

    function b() {
        var e = new Date;
        t = e.getFullYear();
        n = e.getMonth() + 1
    }
    var e = 300;
    var t = 2013;
    var n = 9;
    var r = [];
    var i = ["Январь", "Февраль", "МАрт", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var s = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"];
    var u = $("#calendar");
    var a = u.find("#calendar_header");
    var f = u.find("#calendar_weekdays");
    var l = u.find("#calendar_content");
    b();
    c();
    a.find('i[class^="icon-chevron"]').on("click", function() {
        var e = $(this);
        var r = function(e) {
            n = e == "next" ? n + 1 : n - 1;
            if (n < 1) {
                n = 12;
                t--
            } else if (n > 12) {
                n = 1;
                t++
            }
            c()
        };
        if (e.attr("class").indexOf("left") != -1) {
            r("previous")
        } else {
            r("next")
        }
    })
})