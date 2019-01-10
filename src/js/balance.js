require(["./config"],()=>{
    require(["jquery","header","footer","cookie"],()=>{
      $(function(){
        class Balance{
            constructor(){
                this.jison =[];
                this.fn();
                this.init();
               

            }
            init(){
                var str2 ="";
                for (var value of this.jison) {
                    str2+=` <tr>
                    <td >
                        <div >
                            <img src="${value.img}">
                        </div>
                         <p>
                         ${value.describe}
                        </p> 
                    </td> 
                    <td>￥<span>${value.price}</span></td> 
                    <td>${value.num}</td> 
                    <td>￥<span>${value.price}</span></td>
                </tr>`
                $(".allprice").text("￥"+value.prices);
                  }
                   $("table tbody").html(str2);
            }
              
       fn() {   //将cookie转换为json对象；
        var cartcookie= $.cookie("buycart");
           this.jison= JSON.parse(cartcookie);
            console.log(cartcookie);
           console.log( this.jison);
       }
        }
        return new Balance();
      })
    })
})