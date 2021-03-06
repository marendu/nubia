define(["jquery", "template","buy","cart"], ($, template,buy,cart) => {
	function Item(){
		this.flag=true;
	}

	Item.prototype.init = function(url,classname,item,item_id){
		var _this = this;
		new Promise((resolve, reject) => {
            console.log($("#list-wrap"))
			$(classname).load("/html/component/"+item+".html", () => {
				resolve();
			})
		}).then(() => {
			$.ajax({
				url: url,
				type: "get",
				success: function(res){
				
					console.log(res);
					if(res.res_code === 1){
						let html = template(item_id, {list: res.res_body.data});
						$(classname).html(html);
						if(item==="item"){
							_this.hover();
							clearTimeout(_this.timer);
							_this.timer =setTimeout(()=>{
								buy.init();
							},500)
							}

						if(item==="item.1"){
							_this.hover_1();
						}
						if(item==="Shop-item"){
							_this.hover_2(res);
						}
						if(item==="details_right1"){
							_this.details();
						}
						if(item==="details_right"){
							_this.details();
						}
						if(item==="details_item"){
							_this.detailsimg();
						}
						
					}
				}
			})
		})
		
	}
	Item.prototype.detailsimg = function(){
		console.log($("#smallimg"));
		$("#smallimg").on("click","li",function(e){
			var target = e.target || e.srcElement;
			console.log($("#bigimg"),this)
			$("#bigimg").attr("src",$(target).attr("src"))
			$(this).addClass("ac").siblings().removeClass("ac");
		})
	}
	Item.prototype.details = function(){
        //right点击事件
        $(".main-right ul li").on("click",function(){
            var txt="";
            var all=0;
            $(this).parent().find("li").removeClass("ac");
            $(this).addClass("ac");
           //点击切换文字
            $(".main-right .eq").each(function(i){
               txt += $(".main-right .eq").eq(i).find(".ac").text()
            })
            $("#allinner").text(txt)
            //点击切换总价
            $(".main-right .prices").each(function(i){
                all+= Number($(".main-right .ac").find(".prices").eq(i).text())
             })
             $(".allpay").text("￥"+all+".00")
        });
        $(".main-right ul li").trigger("click");
	}
	Item.prototype.hover =function(){
		var list= $("#list-wrap .hot-list li")
		var top = list.find(".list-top").position().top;
		 list.hover(function(){
			 $(this).find(".list-botm").addClass("ac");
			$(this).find(".list-top").stop().animate({top:-15},300)
		 },function(){
			$(this).find(".list-botm").removeClass("ac");

			 $(this).find(".list-top").stop().animate({top:top},300)
		 })

	}
	Item.prototype.hover_2=function(res){
	var shopli = $("#hotshop ul li")
	shopli.hover(function(){
		$(this).find(".move").stop().animate({width:190},400)
	},function(){
		$(this).find(".move").stop().animate({width:40},400)

	})
	shopli.find(".addcart").on("click",function(){
		var data_id = $(this).parents("li").attr("data_id")
		var cartcookie= $.cookie("buycart");
		var jison= JSON.parse(cartcookie);
		
		// console.log(cartcookie);
		let flag = true;
		for(var value of res.res_body.data){
			if(value.id == data_id){
				console.log(value);
				for(var key of jison){
					if(key.id == data_id){
						console.log(key.num)
						key.num +=1;
					console.log(key);
						flag =false;
						break;
					}
				}
				if(flag){
				jison.push(value);
				}
				jison = JSON.stringify(jison);
				$.cookie("buycart",jison, {expires: 3,path:"/"}) 
				cart.init();
			}
		}
	})
	
}
	Item.prototype.hover_1=function(){
		$(".prev").on("click",function(){
			let ul =$(this).parent().find("ul");
		   var left = $(this).parent().width();
		   var widths = $(this).parent().width();
		   var left =ul.position().left;
		   if(left==0){
			   ul.stop().animate({left:0},400)
		   }else{
			   ul.stop().animate({left:left+widths},400)
		   }
		   
	   })
	   $(".next").on("click",function(){
		   let ul =$(this).parent().find("ul");
		   var widths = $(this).parent().width();
		   var left =ul.position().left;
		   if(left==-left+widths){
			   ul.stop().animate({left:-left+widths},400)
		   }else{
			   ul.stop().animate({left:-widths},400)
		   }
		   
	   })
	   $("#navs").find("li").hover(function(){
		   
		   $(this).find(".select-wrap").stop().animate({height:240},400);
	   },function(){
		   $(this).find(".select-wrap").stop().animate({height:0},400,function(){
			   $(this).find("ul").css("left",0)
		   });
		   
	   })
	}


	return new Item();
})