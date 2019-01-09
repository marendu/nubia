define(["jquery"], function() {
   class Cart {
       constructor() {
           this.init()
       };

       init() {
           var table = $("table")[0];//找到table
           var asums = [];

           function fn() {   //将cookie转换为json对象；
               str1 = $.cookie("cart");
               asums = JSON.parse(str1);
               console.log(asums)
           }

           fn();//开始调用一次；
           var str2 = ""
           ;
           for (var value of asums) {
               // console.log(value.no);
               // str2 +='<tr>' +
               //     '<td >'+value.no+'</td>'+
               //     '<td> <span>'+value.name+'</span><input type="text" disabled> </td>'+
               //     '<td> <span>'+value.price+'</span><input type="text" disabled> </td>'+
               //     '<td> <span>'+value.n+'</span><input type="text"> </td>'+
               //     '<td><input type="checkbox" class="gxbtn">勾选</td>'+
               //     '<td><a href="javascript:;" class="bjbtn">编辑</a>'+" "+
               //     '<a href="javascript:;" class="scbtn">删除</a>'+
               //     '<a href="javascript:;" class="qdbtn">确定</a>'+" "+
               //     '<a href="javascript:;" class="qxbtn">取消</a>'+
               //     '</td>'+
               //     '</tr>';
           }
           table.children[1].innerHTML = str2;
           //给table绑定点击事件；

           table.onclick = function (e) {
               //获取事件源；
               var target = e.target || e.srcElement;
               var a = target.className;//找到点击元素
               var tr = target.parentNode.parentNode;//找到当前行
               var spans = tools.$("span", tr);//找到当前行下的span
               var notd = tools.$("td", tr)[0].innerHTML;
               switch (a) {

                   case "scbtn"://删除按钮

                       if (confirm("确定删除吗")) {
                           this.children[1].removeChild(tr);//删除当前行，this代表table，children[1]代表tbody；
                           if (typeof  asums === "string") {//判断asums是不是字符
                               fn();//调用解码
                           }
                           for (var key in asums) {     //遍历找到点击所对应的json对象在数组中的下标,找到就跳出;
                               if (asums[key].no == notd) {
                                   break;
                               }
                           }
                           asums.splice(key, 1);//在数组中删除相应的数组下标；
                           console.log(asums);
                           sums();            //计算总价
                           cook();          //转换cookie
                       }
                       break;
               }

           }

           function sums() {//计算总价
               var atr = document.querySelectorAll("table tbody tr");//找到tr的集合
               var sum = 0;
               for (i = 0; i < atr.length; i++) {
                   var spans = tools.$("span", atr[i]);//通过当前行tr，找到当前行的span；
                   sum += spans[1].innerHTML * spans[2].innerHTML;
                   b.innerHTML = sum + "元";
               }

               function cook() { //将json对象转换为字符，添加cookie；
                   var trs = document.querySelectorAll("table tbody tr");
                   asums = JSON.stringify(asums);
                   //判断是否删除完，如果没有内容，将cookie删除；
                   trs.length ? tools.cookie("charrt", asums, {expires: 3}) : tools.cookie("charrt", {expires: -1});


               }
           }
       }
   }
return new Cart();
});