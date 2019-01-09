
define(["jquery","cookie"], function($,cookie) {
    class Buy {
        constructor() {
          
        };

        init() {
            var cartcookie= $.cookie("cart");
             var jison= JSON.parse(cartcookie);
            console.log(cartcookie);
           console.log( this.jison);
            var asum = jison;//接受点击对象
            var obj = {};
            var buybtn = $(".buybtn");
            $("li").attr("data_num","0");
            buybtn.on("click",function(e){
                var target = e.target || e.srcElement;
               var ali=$(target).parents("li");//找到当前li
               
               var data_num = Number(ali.attr("data_num"));
                  data_num++;
                  ali.attr("data_num",data_num);
               var lis = $(target).parents("ul").find("li")
               var lis_i=null;
               lis.each(function(i){//遍历找到点击所对应的json对象,找到就跳出;
                if(lis[i]===ali[0]){
                    lis_i = i;
                }
            })
               console.log(ali);
               obj.img = ali.find(".buyimg").attr("src");
               obj.price =ali.find(".buyprice").text();
               obj.describe =ali.find(".buytitle").text()+ali.find(".buydescribe").text()
               obj.num = data_num;
               if(data_num===1){
                   asum.push(obj);
               }
               var str = JSON.stringify(asum)//转换为字符
               console.log(obj);
            console.log(asum);
            console.log(str);
            $.cookie("cart", str, {expires: 3,path:"/"})
            })
        }
    }
    return new Buy();
});