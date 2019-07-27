$(document).ready(function () {

    $("#btnTop").fadeOut(100);

   $("#btnTop").click(function (e) { 
        // alert("按了喔");

        $("html, body").animate({scrollTop:0},1000);
   }); 
// 測距離
//    alert($(window).scrollTop());

// 元素 捲動 (匿名函式() { }); 
    $(window).scroll(function() {

        if ($(window).scrollTop() > 200) {
            $("#btnTop").fadeIn(500);
        }else {
            $("#btnTop").fadeOut(500);
        }
    });
});