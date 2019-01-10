define(["jquery","item","url","list"],($,item,url,list)=>{
    $(function(){
       
        item.init(url.rap+"/list","#list-wrap #hot-list","item","list-template");
        item.init(url.rap+"/hot-pone","#list-wrap #hot-pone","item","list-template");
        item.init(url.rap+"/hot-goods","#list-wrap #hot-goods","item","list-template");

        $(".more").on("click",function(){
            list.title($(this).parents("h2").find("span").text())
            
           
        })
    });
})
   
