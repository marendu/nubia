require(["./config"],()=>{
    require(["jquery","cart","item","url","header","footer","cookie"],($,cart,item,url)=>{
        $(function(){
        if($.cookie("buycart")){
            cart.init();
            item.init(url.rap+"/shop","#hotshops","Shop-item","shop-template");
            console.log( location.search)
           

         
        }else {
            $("main").load("/html/component/cartEmpty.html")
        }

        })
    })
})