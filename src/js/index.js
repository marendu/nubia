define(["jquery","item","url"],($,item,url)=>{
    $(function(){
       
        item.init(url.rap+"/list","#list-wrap #hot-list","item","list-template");
        item.init(url.rap+"/hot-pone","#list-wrap #hot-pone","item","list-template");
        item.init(url.rap+"/hot-goods","#list-wrap #hot-goods","item","list-template");
    
    });
})
   
