// $()搜尋物件
// document 網頁文字
// . 執行某件事
// ready() 準備完成
// function () {} 匿名函式


$(document).ready(function () {  
    alert("我是大帥哥")

    $("h1").hide();
    $("h2").hide();

    $("#box1").addClass("gold");

    $("#box2").slideUp(2000).slideDown(3000);

    $("#box3").mouseenter(function () { 
        
        $(this).animate({width: "200px", height: "200px"}, 2000);
    });

    $("#box3").mouseout(function () { 
        
        $(this).animate({width: "100px", height: "100px"}, 2000);
    });

    

});

function A () {

}