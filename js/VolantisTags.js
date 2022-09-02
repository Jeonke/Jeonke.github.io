// 去除banner
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}

// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " closed";
}

//分类卡片折叠
var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
}


// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'ヽ(●-`Д´-)ノ你要走嘛我好伤心！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(Ő∀Ő3)ノ哇喔！欢迎！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 添加八毛卡通人物
/*右下角添加卡通人物*/
// https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif
// https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200629182853.gif
// img/avatar.gif
var bamao = '<i  id="upj"  class="fas fa-arrow-up" style ="padding:8px" ></i><img style="max-width: 234%;transform: translate(-65px,-65px);" src="https://raw.githubusercontent.com/Jeonke/PicGoPictureBed/master/img/Sitich/Sitich05.gif" title="回到顶部" data-ll-status="loaded" class="loaded">';
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML = bamao


// 气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}

!function (p) {
    p.fn.circleMagic = function (t) {
        var o, a, n, r, e = !0,
            i = [],
            d = p.extend({color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2}, t),
            l = this[0];

        function c() {
            e = !(document.body.scrollTop > a)
        }

        function s() {
            o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a
        }

        function h() {
            if (e)
                for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
            requestAnimationFrame(h)
        }

        function f() {
            var t = this;

            function e() {
                t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color
            }

            t.pos = {}, e(), this.draw = function () {
                t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath()
            }
        }

        !function () {
            o = l.offsetWidth, a = l.offsetHeight,
                function () {
                    var t = document.createElement("canvas");
                    t.id = "canvas", t.style.top = 0, t.style.zIndex = -3, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
            for (var t = 0; t < o * d.density; t++) {
                var e = new f;
                i.push(e)
            }
            h()
        }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
    }
}(jQuery);

// 调用气泡方法
qipao();
