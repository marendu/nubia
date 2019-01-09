require(["./config"],()=>{
    require(["jquery","header","footer","cookie"],()=>{
        $(function(){
        if($.cookie("cart")){
            var shopli = $("#hotshop ul li")
            shopli.hover(function(){

                $(this).find(".move").stop().animate({width:190},400)
            },function(){
                $(this).find(".move").stop().animate({width:40},400)

            })
        }else {
            $("main").load("/html/component/cartEmpty.html")
        }

        })
    })
})