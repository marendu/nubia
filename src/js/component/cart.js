define(["jquery","cookie"], function($,cookie) {
   class Cart {
       constructor(){
        this.jison =[];
       };

       init() {
           var _this = this
           var table = $("table")//找到table
           var str2="";
           this.fn();//开始调用一次；
           
          
        
           for (var value of _this.jison) {
            str2+= ` <tr >
            <td><img src="${value.img}"></td>
             <td class="mleft"><a href="##">${value.describe}</a></td> 
             <td> ￥<span class="unitprice">${value.price}</span></td>
              <td><div class="inputs"><span class="reduce">-</span> <input type="text" class="blurs" value="${value.num}"> <span class="add">+</span></div></td> 
             <td >￥<span class="allprice"></span>.00</td> 
    <td><a title="删除" class="remove">×</a></td>
    </tr>`
          }
           $("table tbody").html(str2);
           this.sums();//页面刷新调用计算总价
           //给table绑定点击事件；

           table[0].onclick = function (e) {
               console.log(_this);
               //获取事件源；
               var target = e.target || e.srcElement;
               let atr = $("tbody tr");
               var atr_i=null;
               var a = target.className;//找到点击元素
               var tr = $(target).parents("tr");//找到当前行
            //    console.log($(target).parents("tr").find(".unitprice"));
                // var unitPrice = Number(tr.find(".unitprice").text()) ;
                // var allPrice = Number(tr.find(".allprice").text()) ;
                var input =tr.find("input");
                var n = Number(input.val());
                // console.log(unitPrice,allPrice)
            // console.log(input);
               switch (a) {
                    case "add"://+按钮
                        n++;
                        input.val(n);
                        if (typeof   _this.jison ==="string") {//判断——this.jison是不是字符
                            _this.fn();//调用解码
                        }
                        atr.each(function(i){//遍历找到点击所对应的json对象,找到就跳出;
                            if(atr[i]===tr[0]){
                                atr_i = i;
                            }
                        })
                        _this.jison[atr_i].num =n;
                        _this.sums();            //计算总价
                            _this.cook();      //转换cookie
                          
                    break;
                    case"blurs"://input框
                    target.onblur =function(){
                        if (typeof _this.jison ==="string") {//判断——this.jison是不是字符
                            _this.fn();//调用解码
                        }
                        atr.each(function(i){//遍历找到点击所对应的json对象,找到就跳出;
                            if(atr[i]===tr[0]){
                                atr_i = i;
                            }
                        })
                            _this.jison[atr_i].num =input.val();
    
                            _this.sums();            //计算总价
                         
                                _this.cook();      //转换cookie
                    }
                    break;
                    case "reduce"://-按钮
                    n===0?n=0:n--;
                    input.val(n);
                    if (typeof _this.jison ==="string") {//判断——this.jison是不是字符
                        _this.fn();//调用解码
                    }
                    atr.each(function(i){//遍历找到点击所对应的json对象,找到就跳出;
                        if(atr[i]===tr[0]){
                            atr_i = i;
                        }
                    })
                        _this.jison[atr_i].num =n;

                        _this.sums();            //计算总价
                     
                            _this.cook();      //转换cookie

                break;
                   case "remove"://删除按钮

                       if (confirm("确定删除吗")) {
                           tr.remove();//删除当前行，this代表table，children[1]代表tbody；
                           if (typeof _this.jison === "string") {//判断——this.jison是不是字符
                            _this.fn();//调用解码
                           }
                           atr.each(function(i){//遍历找到点击所对应的json对象,找到就跳出;
                            if(atr[i]===tr[0]){
                                atr_i = i;
                            }
                        })
                        console.log(atr_i);
                              let cart = $.cookie("cart");
                                cart= JSON.parse(cart);
                                cart.splice(atr_i,1);
                                cart = JSON.stringify(cart);
                                $.cookie("cart", cart,{expires:3,path:"/"});//修改订单的cookie；

                          _this.jison.splice(atr_i, 1);//在数组中删除相应的数组下标；
                           _this.sums();            //计算总价
                           _this.cook();          //转换cookie
                       }
                       break;
               }

           }
           }
       
    
       sums(){ //计算总价
            var atr = $("table tbody tr .unitprice")
            var all = $(".payprice")
            let nums = $("input")
            console.log(nums);
            var allprices = 0;
            //计算没一行的价格
            atr.each(function(i,item){//计算所有价格
            $(".allprice").eq(i).text(Number($(item).text())*Number(nums.eq(i).val()))

                allprices+=Number($(item).text())*Number(nums.eq(i).val());
            })
            all.text(allprices);
       }
       cook(){//存cooike
            var trs = $("table tbody tr");
            this.jison = JSON.stringify(this.jison);
           console.log(1,this.jison)
           if(trs.length){
            $.cookie("buycart",this.jison, {expires: 3,path:"/"}) 
           }else{
            $.cookie("buycart", this.jison,{expires: -1,path:"/"});
            $.cookie("cart", this.jison,{expires: -1,path:"/"});
             $("main").load("/html/component/cartEmpty.html");
           }
       }
       
       fn() {   //将JSON字符转换为json对象；
        var cartcookie= $.cookie("buycart");
           this.jison= JSON.parse(cartcookie);
       }
   }

return new Cart();
});