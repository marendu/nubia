define(["jquery","item","url","cookie"],($,item,url)=>{
    class Header{
        constructor(){
            this.init();
        }
        init(){
           
            new Promise((resolve,reject)=>{
                $("header").load("/html/component/header.html",()=>{
                    resolve();
                })
               
            }).then(()=>{
                if($.cookie("set")){
                $("#loginuser").css("background-image","url(/images/loginuser.png)");
                }
                item.init(url.rap+"/header-list","#select-phone ul","item.1","list-templates")
                item.init(url.rap+"/header-list","#header-red ul","item.1","list-templates")
                item.init(url.rap+"/header-list","#header-goods ul","item.1","list-templates")
                item.init(url.rap+"/header-list","#header-photo ul","item.1","list-templates")

            })
        }
    }
    return new Header();
})