require(["./config"],()=>{
    require(["jquery","url","cookie"],($,url)=>{
        $(function(){
            var ress =null;
              
            
            var sets =$.cookie("set")
            if (sets){
                sets =JSON.parse(sets);
                console.log(sets);
            }
       
            var box = $("#main");
            var aInput = $("input");
            var users=null;
            var tel = null;
            var pwds=null;
            var set =[];//存储登录信息
    
            for (var j = 0; j < aInput.length; j++) {
                aInput[j].setAttribute("flag", false);
            }
                if(sets){//如果已经登录就填入登录的内容；
                    for (var value of sets) {
                        if (value.user) {
                            aInput[0].value = value.user;
                        }
                        if (value.pwd) {
                            aInput[1].value = value.pwd;
                        }
    
                    }
                }
    
            box[0].onclick = function (e) {
                e = e || e.event;
                var target = e.target || e.srcElement;
                target.onblur = function(){
                    for (var i = 0; i < aInput.length; i++) {
                        if (aInput[i].value=="") {
                            aInput[i].parentNode.className = "ac";
                        }else{
                            aInput[i].parentNode.className = "";
                        }
                    }
                }
                switch(target.id){
                    case "sub"://登录
                    $.ajax({
                        url: url.login+"/login.php",
                        type: "post",
                        data: {
                            username: $("#user").val(),
                            password: $("#pwd").val()
                        },
                        success: function(res){
                            console.log(res);
                            console.log($("#user").val());
                            if(res.res_code === 1){
                               ress = res.res_body;
                                 console.log(ress);
                                 
                                 users = ress.username;
                                 tel = ress.tel;
                                 pwds = ress.password;

                                 console.log(users,tel,pwds);
                                 console.log(aInput);
                               if (aInput[0].getAttribute("flag")=="false"){//判断是否是已经登录自动填入的信息
           
                                   if (tel == aInput[0].value) {
                                       aInput[0].setAttribute("flag", true);
                                       set.push({user: aInput[0].value})
                                   } else if (users == aInput[0].value) {
                                       aInput[0].setAttribute("flag", true);
                                       set.push({user: aInput[0].value})
               
                                   }
                               }
                                   if (aInput[1].getAttribute("flag")=="false") {
               
                                       if (pwds == aInput[1].value) {
                                           aInput[1].setAttribute("flag", true);
                                           set.push({pwd:aInput[1].value})
               
                                       }
                                   }
                                   var n = true;
                                   console.log(aInput.length)
                                   for (var i = 0; i < aInput.length; i++) {
                                       var flags = aInput[i].getAttribute("flag");
                                       if (flags === "false") {
                                           aInput[i].parentNode.className = "ac";
                                           n = false;
                                       }
                                   }
                                   if (n) {
                                       console.log(set);
                                       var strs = JSON.stringify(set);
                                       $.cookie("set",strs,{expires:3,path:"/"})
                                       window.location.href ="/index.html"
                                   };
                                 
                            }
                        },
                        dataType: "json"
                    })
                        for (var i = 0; i < aInput.length; i++) {
                            if (aInput[i].value=="") {
                                aInput[i].parentNode.className = "ac";
                            }else{
                                aInput[i].parentNode.className = "";
                            }
                        }
                
                            break;
                }
                // console.log(set)
            }
        })
    })
})