$(".btm").click(function (e) { 
    e.preventDefault(); 
    $(this).hide(10);
    $(this).parent().siblings().find("form").hide(100);

    var ele= this;
    $(ele).parent().animate({
        width: "300px",
        height: "380px", 
    } ,500,function(){  
        $(this).find("form").show(300);
    });
    $(this).parent().siblings().animate({
        width: "90px",
        height: "45px",
    } ,500,function(){
        $(this).find("button").show(10) ;
    });
});