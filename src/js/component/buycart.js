define(["jquery","cookie"], function($,cookie) {
    class Buycart {
        constructor() {
          
        };

        init() {
            var jison =[];
            if($.cookie("cart")){
                var cartcookie= $.cookie("cart");
                jison= JSON.parse(cartcookie);
            }
           
            var asum = jison;//接受点击对象
            var obj = {};
            var str = JSON.stringify(asum)//转换为字符
            $.cookie("buycart", str, {expires: 3,path:"/"})
            window.location.href="/html/ShopCart.html"
            
        }
    }
    return new Buycart();
});