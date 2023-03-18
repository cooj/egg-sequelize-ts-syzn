var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
/*杩欓噷鏄仛鍏叡澶撮儴涓庡簳閮ㄧ殑*/

//appendPublic();
function appendPublic() {
    var head = '<div id="header"></div>';
    var foot = null;
    if ($("#footer").length < 1) {
        foot = '<div id="footer"></div>';
    }

    $("body")
        .prepend(head)
        .append(foot);
    $("#header").load("header.html", readyDo);
    $("#footer").load("footer.html");
}

/*
 *椤甸潰婊氬姩鍑芥暟;
 */

var changenav2 = false;

var TOP = false;

document.addEventListener("scroll", scrollFunc2);
let navTop = 100 + $("#banner-box").height();
function scrollFunc2(event) {
    var scrollDistance =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    if (scrollDistance >= navTop) {
        $(".k-box").addClass("act-nav-box");
    } else {
        $(".k-box").removeClass("act-nav-box");
    }

    if (scrollDistance > window.innerHeight) {
        if (TOP == false) {
            TOP = true;
            $(".backTop").addClass("actbacTop");
        }
    } else {
        TOP = false;
        $(".backTop").removeClass("actbacTop");
    }
}

/*鍒ゆ柇鏄笉鏄疘E*/

function isIE() {
    //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
    else return false;
}

/*缁勬鍐掓场*/
function stopBubble(e) {
    //濡傛灉鎻愪緵浜嗕簨浠跺璞★紝鍒欒繖鏄竴涓潪IE娴忚鍣�
    if (e && e.stopPropagation)
        //鍥犳瀹冩敮鎸乄3C鐨剆topPropagation()鏂规硶
        e.stopPropagation();
    //鍚﹀垯锛屾垜浠渶瑕佷娇鐢↖E鐨勬柟寮忔潵鍙栨秷浜嬩欢鍐掓场
    else window.event.cancelBubble = true;
}

/*闃绘娴忚鍣ㄧ殑榛樿琛屼负*/
function stopDefault(e) {
    //闃绘榛樿娴忚鍣ㄥ姩浣�(W3C)
    if (e && e.preventDefault) e.preventDefault();
    //IE涓樆姝㈠嚱鏁板櫒榛樿鍔ㄤ綔鐨勬柟寮�
    else window.event.returnValue = false;
    return false;
}

var ms = 0;

new WOW({
    callback: function(e) {
        var tps = $(e).attr("ms");
        switch (tps) {
            case "ms":
                ms += 0.1;
                $(e).css("animation-delay", ms + "s");
                break;
        }
        $(e).addClass("wow2");
    }
}).init();

var timeOuts = null;
function setTimes() {
    timeOuts = setTimeout(function() {
        ms = 0;
    }, 150);
}
$(window).scroll(function() {
    /*婊氬姩鏃跺厛娓呴櫎涓婁竴涓畾鏃跺櫒,鐒跺悗鍐嶈缃柊鐨勫畾鏃跺櫒,浠ュ厤鍑虹幇澶氫釜瀹氭椂鍣ㄩ€犳垚娣蜂贡*/
    clearTimeout(timeOuts);
    setTimes();
});

var swiper = {
    speed: 700,
    slideToClickedSlide: true,
    autoplayDisableOnInteraction: false,
    paginationClickable: true
};

function assignOBJ(e) {
    var b = {};
    for (var a in swiper) {
        if (!e[a]) {
            e[a] = swiper[a];
        }
    }
    return e;
}

var creatSwiper = function creatSwiper(ele, val) {
    var elestr = ele.slice(1);
    val = assignOBJ(val);
    val.prevButton = ".prev_" + elestr;
    val.nextButton = ".next_" + elestr;
    val.pagination = ele + "SP";
    return new Swiper(ele, val);
};
// function extend (destination, source) {
//     for (var property in source) {
//         if (source.hasOwnProperty(property)) {
//             destination[property] = source[property];
//         }
//     }
//     return destination;
// };
$("header .navbox .navli").hover(
    function() {
        var t = $(this);
        t.find(".subox")
            .stop(true, false)
            .slideDown(400);
        t.siblings(".act-li")
            .removeClass("act-li")
            .addClass("on");
    },
    function() {
        var t = $(this);
        t.find(".subox")
            .stop(true, false)
            .slideUp(400);
        t.siblings(".on")
            .addClass("act-li")
            .removeClass("on");
    }
);

$(function() {
    readyDo();
    hidden();
    $(".backTop").click(function() {
        $("html,body").animate(
            {
                scrollTop: 0
            },
            1000
        );
    });
    
    $(".bfbtn").on("click",function() {
        $(".video_mask").addClass("act_video_mask");
        $(".video_mask video")[0].play();
    })

    $(".video_mask .close_btn").on("click",function() {
        $(".video_mask").removeClass("act_video_mask");
        $(".video_mask video")[0].pause();
    })
});

function readyDo() {
    //鑿滃崟鐐瑰嚮浜嬩欢
    $(".menu").on("click", function() {
        $(".maskout").fadeIn(300);
        $(".menu_sub").css("right", "0");
        $("video").css("display", "none");
    });
    $(".maskout").click(function() {
        $(".maskout").fadeOut(300);
        $(".menu_sub").css("right", "-70%");
    });
    $(".subTitle").click(function() {
        var _this = $(this);
        _this.toggleClass("menuact");
        _this
            .siblings(".subbox")
            .stop(true, false)
            .slideToggle();
        _this
            .parent("li")
            .siblings("li")
            .find(".subbox")
            .stop(true, false)
            .slideUp(300);
        _this
            .parent("li")
            .siblings("li")
            .find(".subTitle")
            .removeClass("menuact");
    });
    $("header .navbox .navli").hover(
        function() {
            var t = $(this);
            t.find(".subox")
                .stop(true, false)
                .slideDown(400);
        },
        function() {
            var t = $(this);
            t.find(".subox")
                .stop(true, false)
                .slideUp(400);
        }
    );
    $(".l").hover(
        function() {
            $(this)
                .siblings(".current")
                .removeClass("current")
                .addClass("on");
        },
        function() {
            $(this)
                .siblings(".on")
                .removeClass("on")
                .addClass("current");
        }
    );

    setActNav();
}

function setActNav() {
    var ind = parseInt($("body").attr("data-ind"));
    $("header .navli")
        .eq(ind)
        .addClass("current");
}

function winW() {
    return window.innerWidth;
}

function hidden() {
    var overs = document.getElementsByClassName("over");
    for (var i = 0; i < overs.length; i++) {
        var el = overs[i];
        var s = el.innerHTML;
        var n = el.offsetHeight;
        for (var k = 0; k < s.length; k++) {
            el.innerHTML = s.substr(0, k);
            if (n < el.scrollHeight) {
                el.style.overflow = "hidden";
                el.innerHTML = s.substr(0, k - 3) + "...";
                break;
            }
        }
    }
}

/*--------------------棣栭〉-----------------------*/

function creatFullPage() {
    $("#fullpage").fullpage({
        navigation: true,
        anchors: [],
        afterLoad: function(e, ind) {},
        onLeave: function (ind, nind, dir) {
            if(nind == 1){
                // $("video")[0].play();
            }
        }
    });
}

/*--------------浜у搧---------------------*/
$(".pro-class-nav-box .section").hover(
    function() {
        $(this)
            .find(".option-box")
            .stop(true, false)
            .slideDown(400);
    },
    function() {
        $(this)
            .find(".option-box")
            .stop(true, false)
            .slideUp(400);
    }
);

if(location.href != '/') {
    $('.header-code-text').css('color', '#000')
    $('.navli.lang').find('a').css({
        background: '#999',
        color: '#fff'
    })
}