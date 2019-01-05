define(["jquery"],()=>{
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
           

            })
        }
    }
    return new Header();
})