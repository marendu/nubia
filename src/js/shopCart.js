require(["./config"],()=>{
    require(["jquery","cart","item","url","header","footer","cookie"],($,cart,item,url)=>{
        $(function(){
            if($.cookie("buycart")){
                cart.init();
                item.init(url.rap+"/shop","#hotshops","Shop-item","shop-template");
               
             
            }else {
                $("main").load("/html/component/cartEmpty.html")
            }
            $("#balance").on("click",function(){
                
                if(!$.cookie("set")){
                    if(confirm("您还没有登录，确定去登录吗？")){
                        window.location.href="/html/login.html"
                    }
                }else{
                    window.location.href="/html/balance.html"

                }
            })
      
        })
    })
})