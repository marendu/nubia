define(["jquery","cookie"], function($,cookie) {
    class Buycart {
        constructor() {
          
        };

        init(res,id) {
            var flag =true;
            var jison =[];
            if($.cookie("cart")){
                var cartcookie= $.cookie("cart");
                jison= JSON.parse(cartcookie);
            }
           
            if(res){
                if($.cookie("cart")){
                    for(var key of jison){
                        if(key.id == id){
                            console.log(key.num)
                            key.num +=1;
                            flag =false;
                            break;
                        }
                    }
                    if(flag){
                       jison.push(res);
                    }
                }else{
                    jison.push(res);
                }

            }
            var str = JSON.stringify(jison)//转换为字符
            $.cookie("buycart", str, {expires: 3,path:"/"})
            $.cookie("cart", str, {expires: 3,path:"/"})

            if(res){
               if(jison!=[]){
            window.location.href="/html/ShopCart.html"
               }
            }else{
            window.location.href="/html/ShopCart.html"
            }
            
        }
    }
    return new Buycart();
});