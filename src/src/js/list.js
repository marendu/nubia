require(["./config"],()=>{
    require(["jquery","item","url","header","footer","cookie"],($,item,url)=>{
        $(function(){
            item.init(url.rap+"/list","#list-wrap ul","item","list-template");
        })
    })
})