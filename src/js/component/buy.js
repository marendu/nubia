
define(["jquery","cookie"], function($,cookie) {
    class Buy {
        constructor() {
          
        };

        init() {
            var asum=[];

            var jison =[];
            var n =0;
            console.log("buy");
            if( $.cookie("cart")){
                var cartcookie= $.cookie("cart");

                 jison= JSON.parse(cartcookie);
               console.log(1,cartcookie);
            }
            var asum = jison;//接受点击对象
            var buybtn = $(".buybtn");
            $("li").attr("data_num",0);

            buybtn.on("click",function(e){
            var obj = {};
                n++ 
                var target = e.target || e.srcElement;
               var ali=$(target).parents("li");//找到当前li
               console.log(ali)
               var data_num = Number(ali.attr("data_num"));
               var data_id = ali.attr("data-id");
               for( var value of asum){
                if(data_id==value.id){
                    data_num = value.num++;
                  ali.attr("data_num",data_num);

                }
               }
                  data_num++;
              
               obj.id = ali.attr("data-id");
               obj.img = ali.find(".buyimg").attr("src");
               obj.price =ali.find(".buyprice").text();
               obj.describe =ali.find(".buytitle").text()+ali.find(".buydescribe").text()
               obj.num = data_num;
                console.log(data_num);
               if(data_num===1){
                   asum.push(obj);
               }
            console.log(obj);
            console.log(asum);
               var str = JSON.stringify(asum)//转换为字符
            console.log(n,str);
            $.cookie("cart", str, {expires: 3,path:"/"})
            window.location.href="/html/Details.html"
            })
        }
    }
    return new Buy();
});