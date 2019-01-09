require(["./config"],()=>{
    require(["jquery","cart","header","footer","cookie"],($,cart)=>{
        $(function(){
        if($.cookie("cart")){
            cart.init();
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