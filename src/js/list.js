    
    define(["jquery","item","url","cookie"],($,item,url)=>{
        
            class List{
                constructor(){
                    this.init()
                }
                init(){
                    item.init(url.rap+"/list","#list-wrap ul","item","list-template");
                }
                title(res){
                    $.cookie("h2", res, {expires: 3,path:"/"}) 
                   
                    window.location.href="/html/list.html"
                }
            }
            
        return new List();
    })
