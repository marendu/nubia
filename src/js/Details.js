require(["./config"],()=>{
    require(["jquery","item","url","header","footer"],($,item,url)=>{
        $(function(){
            item.init(url.rap+"/details","#fixed-left","details_item","details-template");
            item.init(url.rap+"/details-right","#main-rightinner_1","details_right","detailsright-template");
            item.init(url.rap+"/details-right","#cosservice","details_right1","detailsright1-template");

            //导航
            var li_this=null;
            $("nav li").hover(function(){
                li_this = $("nav .ac")
                $("nav li").removeClass("ac")
               
            },function(){
                li_this.addClass("ac");
            })
            $("nav li").on("click",function(){
                $("nav li").removeClass("ac")
                $(this).addClass("ac");
                li_this=$(this);
            })
            //吸顶效果
            $(window).scroll(function(){
                    if($(window).scrollTop()>70){
                        $("#title-wrap").stop().show(1).animate({height:60},200,()=>{
                        })
                     } else{
                        $("#title-wrap").stop().hide(1).animate({height:0},200,()=>{
                        })
                    }
            });

            //图片楼层效果
            $(window).scroll(function(){
                if($(window).scrollTop()>80){
                    
                    $(".main-wrap #fixed-left").css({position:"fixed",top:0});
                }else{
                    $(".main-wrap #fixed-left").css({position:"relative",top:50});
                }
                if($(window).scrollTop()>$(".main-right").height()-$(".main-left img").height()){
                    $(".main-wrap #fixed-left").css({position:"relative",top:580})
                }

                if($(window).scrollTop()<$(".main-right").height()-$(".main-left img").height()&&$(window).scrollTop()>80){
                    $(".main-wrap #fixed-left").css({position:"fixed",top:0});
                }
            });

        })
    })
})