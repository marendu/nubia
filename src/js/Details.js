require(["./config"],()=>{
    require(["jquery","item","url","buycart","header","footer"],($,item,url,buycart)=>{
        $(function(){
            item.init(url.rap+"/details","#fixed-left","details_item","details-template");
            item.init(url.rap+"/details-right","#main-rightinner_1","details_right","detailsright-template");
            item.init(url.rap+"/details-right","#cosservice","details_right1","detailsright1-template");
            item.init(url.rap+"/details-right","#goods-imgs","goods-img","goods-template");
            item.init(url.rap+"/details-right","#goods-img2","goods-img","goods-template");

            $(".buycart").on("click",function(){
                console.log(222)
                buycart.init();
            })
           
            console.log(buycart);
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
            //点击切换样式
            $("#goods-p").on("click","span",function(){
                $(this).addClass("ac").siblings().removeClass("ac");
                if(this.id=="goodsds"){
                    $(".goods-img2").removeClass("ac");
                    $(".goods-img").addClass("ac");
                }else{
                    $(".goods-img").removeClass("ac");
                    $(".goods-img2").addClass("ac");
                }
            })

        })
    })
})