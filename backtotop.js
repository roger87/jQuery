$(document).ready(function () {

    $("#btnTop").fadeOut(100);

   $("#btnTop").click(function (e) { 
        // alert("按了喔");
        // 尋找 網頁與身體 動畫效果 ({捲動上方:0}) , 時間
        $("html, body").animate({scrollTop:0},1000);
   }); 

//    $("#a1").click(function (e){
       
//       var top = $("#section1").postion().top;
//       $("html, body").animate({scrollTop:top},500);
//    });
//函式會有小括號

//API
//自訂函式(參數) {內容}
function scrollToPosition(btn, pos, dur) {
    
    $(btn).click(function (e) {
        var top = $(pos).position().top;
        $("html, body").animate({scrollTop: top}, dur);
    });
}

scrollToPosition("#a1","#section1", 200);
scrollToPosition("#a2","#section2", 400);
scrollToPosition("#a3","#section3", 600);
scrollToPosition("#a4","#section4", 800);
scrollToPosition("#a5","#section5", 1000);
// 測距離
//    alert($(window).scrollTop());
    $("#btnTop").fadeOut(0);    //按鈕隱藏 - 也可以設定在css內
// 元素 捲動 (匿名函式() { }); 
    $(window).scroll(function() {

        if ($(window).scrollTop() > 200) {
            $("#btnTop").fadeIn(500);
        }else {
            $("#btnTop").fadeOut(500);
        }
    });
});