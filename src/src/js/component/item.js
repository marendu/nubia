define(["jquery", "template"], ($, template) => {
	function Item(){
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

						}
						if(item==="item.1"){
							_this.hover_1();
						}
						if(item==="details_right1"){
							_this.details();
						}

					}
				}
			})
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
               console.log(i);
            })
            $("#allinner").text(txt)
            //点击切换总价
            $(".main-right .prices").each(function(i){
                all+= Number($(".main-right .ac").find(".prices").eq(i).text())
                console.log(all);
             })
             $(".allpay").text("￥"+all+".00")
             console.log($(".main-right .prices"))
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
	Item.prototype.hover_1=function(){
		$(".prev").on("click",function(){
			let ul =$(this).parent().find("ul");
		   var left = $(this).parent().width();
		   console.log(left);
		   console.log(ul);
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
		   console.log(ul);
		   var left =ul.position().left;
		   if(left==-left+widths){
			   console.log(left);
			   ul.stop().animate({left:-left+widths},400)
		   }else{
			   console.log(left);
			   ul.stop().animate({left:-widths},400)
		   }
		   
	   })
	   $("#navs").find("li").hover(function(){
		   
		   $(this).find(".select-wrap").stop().animate({height:240},400);
	   },function(){
		   $(this).find(".select-wrap").stop().animate({height:0},400,function(){
			   $(this).find("ul").css("left",0)
			   console.log($(this).find("ul"))
		   });
		   
	   })
	}

	return new Item();
})