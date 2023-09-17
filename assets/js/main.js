$(document).ready(function () {
  $(".cls-btn").click(function () {
    $("#iframeYoutube").attr("src", "");
  }),
    $(".video-frame").css({ opacity: "0", "z-index": "-2" }),
    $(document).on("click", ".video-popup", function () {
      $(".video-frame").css({ opacity: "1", "z-index": "9999" });
    }),
    $(".video-popup").click(function (n) {
      $(".cls-btn").css("display", "block");
    }),
    $(".cls-btn").click(function () {
      $(this).css("display", "none"),
        $(".video-frame").css({ opacity: "0", "z-index": "-2" });
    });
  var n,
    o,
    e = $("#home"),
    t = $(".inner_page");
  0 != e.length && $(".side_menu").show(),
    0 != t.length && $("body").addClass("inner_page"),
    setTimeout(function () {
      var n = window.location.hash;
      n && $('ul.nav-pills a[href="' + n + '"]').tab("show");
    }, 300),
    $(".animate-btn")
      .on("mouseenter", function (n) {
        var o = $(this).offset(),
          e = n.pageX - o.left,
          t = n.pageY - o.top;
        $(this).find("span").css({ top: t, left: e });
      })
      .on("mouseout", function (n) {
        var o = $(this).offset(),
          e = n.pageX - o.left,
          t = n.pageY - o.top;
        $(this).find("span").css({ top: t, left: e });
      }),
    $("input, textarea").focus(function () {
      $(this).parents(".form-group").addClass("focused");
    }),
    $("input, textarea").blur(function () {
      "" == $(this).val()
        ? ($(this).removeClass("filled"),
          $(this).parents(".form-group").removeClass("focused"))
        : $(this).addClass("filled");
    }),
    (function () {
      for (
        var n = document.querySelectorAll(".scene"), o = 0;
        o < n.length;
        o++
      )
        new Parallax(n[o]);
    })(),
    $(".menu_click").on("click", function () {
      $(this).closest("body").hasClass("open_menu")
        ? $("body").removeClass("open_menu")
        : $("body").addClass("open_menu");
    }),
    $(
      ".menu_wraper .nav_main_menu>li>a, .menu_wraper .nav_main_menu>li>ul li a"
    ).on("click", function () {
      $("body").removeClass("open_menu");
    }),
    $(window).width() < 1023.98 &&
      ($(window).on("scroll", function () {
        $(window).scrollTop() >= 250
          ? $(".scroll_button").addClass("hide")
          : $(".scroll_button").removeClass("hide");
      }),
      (n = $(window).width() - $(".zerone").width()),
      (o = $(document).height() - $(window).height()),
      console.log(n, o),
      $(function () {
        $(window).on("scroll", function () {
          var e = $(window).scrollTop(),
            t = n * (e / o);
          $(".zerone").css({ right: t + "%" });
        });
      }));
});
