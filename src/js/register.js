require(["./config"],()=>{
    require(["jquery","url","cookie"],($,url)=>{
        $(function(){
            var box = $("#main");
            var aInput = $("input");
            for (var j = 0; j < aInput.length-1; j++) {
                aInput[j].setAttribute("flag", false);
            }
            var user = /^\d+$/;
            var pwd = /^.{6,}$/;
            var tel = /^1\d{10}$/;
            var jsons =[];
            box[0].onclick = function (e) {
                e = e || e.event;
                var target = e.target || e.srcElement;
                var labels = target.parentNode.children[1];
                console.log(target.id)
                switch (target.id) {
                    case "user":
                        target.onblur = function () {//失去焦点判断正则
                            if (target.value!=""){
                                console.log(2)
                                if (!user.test(target.value)) {
                                    labels.innerHTML = "请输入正确的用户名";
                                    target.parentNode.className = "ac";
    
                                } else {
    
                                    target.parentNode.className= "";
                                    if (target.getAttribute("flag")=="false"){
                                        var obj={"user":target.value}
                                        jsons.push(obj);
                                    }
                                    target.setAttribute("flag", true);
                                }
                            }
    
                        }
                        break;
                    case"pwd":
                        target.onblur = function () {
                            if (target.value != "") {
    
                                if (!pwd.test(target.value)) {
                                    labels.innerHTML = "请输入正确的密码";
                                    target.parentNode.className = "ac";
    
                                } else {
                                    console.log("pwd");
                                    target.setAttribute("flag", true);
                                    target.parentNode.className = "";
                                }
                            }
                        }
                        break;
                    case"agpwd":
    
                        target.onblur = function () {
                            if (target.value != "") {
    
                                if (aInput[2].value != aInput[3].value) {
                                    labels.innerHTML = "两次密码不一致";
                                    target.parentNode.className = "ac";
    
                                } else {
                                    target.parentNode.className = "";
    
                                    if (target.getAttribute("flag") == "false") {
                                        var obj = {"pwd": target.value}
                                        jsons.push(obj);
                                    }
                                    target.setAttribute("flag", true);
    
                                }
                            }
                        }
                        break;
                    case "tel":
    
                        target.onblur = function () {
                            if (target.value != "") {
    
                                console.log(!tel.test(target.value));
                                if (!tel.test(target.value)) {
                                    labels.innerHTML = "请输入正确的手机号"
                                    target.parentNode.className = "ac";
    
                                } else {
                                    target.parentNode.className = "";
                                    if (target.getAttribute("flag") == "false") {
                                        var obj = {"tel": target.value}
                                        jsons.push(obj);
                                    }
                                    target.setAttribute("flag", true);
    
                                }
                            }
                        }
                        break;
                      
                    case "sub"://注册
                        //循环判断是否每项都验证成功
                            var n = true;
                        for (var i = 0; i < aInput.length-1; i++) {
                            var flags = aInput[i].getAttribute("flag");
                            console.log(flags);
                            if(flags == "false"){
                                aInput[i].parentNode.className = "ac";
                                n = false;
                            }else {
                                aInput[i].parentNode.className = ""; 
    
                            }
                            }
    
                            if($("#checkbox").attr("checked")){
                                if (n) {//如果每项都验证成功就存入数据库；
                                    // var str = JSON.stringify(jsons);//将json对象转为字符存储cookie
                                    // $.cookie("name",str,{expires:3,path:"/"});
                                    $.ajax({
                                        url: url.login+"/register.php",
                                        type: "post",
                                        data: {
                                            username: $("#user").val(),
                                            tel:$("#tel").val(),
                                            password: $("#pwd").val()
                                        },
                                        success: function(res){
                                            console.log(res);
                                            console.log($("#user").val());
                                            if(res.res_code === 1){
                                                alert("注册成功，马上去登录");
                                                location.href = "/html/login.html";
                                            }else{
                                                alert("用户已存在")
                                            }
                                        },
                                        dataType: "json"
                                    })
            
                                };
                            }
                        break;
                    case "havesub"://有账户
                        window.location.href = "/html/login.html"
                };
                console.log(jsons);
            }

        })
    })
})
