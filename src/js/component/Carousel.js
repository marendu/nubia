define(["jquery"],function() {

    {
        class Carousel {
            constructor() {
                this.init()
            };

            init() {
                new Promise((resolve, reject) => {
                    $("#carousel").load("/html/component/Carousel.html", () => {
                        resolve()
                    })
                }).then(() => {
                    let $ul = $("#div1 ul");
                    let $imgs = $ul.children();
                    let index = 0;
                    let timer = null;
                    let len = $imgs.length;
                    let liWidth = $imgs.eq(0).width();
                    let btns = [];
                
                    //拼接按钮
                    for (var i = 1; i <= len; i++) {
                        btns.push($("<li>").addClass(i===1?"ac":"").appendTo($("#div1 ol")));
                    }
                
                    //在结尾追加一个img，计算ul宽度
                    $ul.append($imgs.eq(0).clone());
                    $ul.width((len+1)*liWidth);
                
                    $.each(btns, (i, $btn) => {
                        $btn.on("click", function(){
                            
                            btns[index].removeClass("ac");
                            $(this).addClass("ac");
                            index = $(this).index();
                            //ul移动到当前位置
                            // -index*liWidth
                            $ul.stop().animate({left : -index*liWidth},"slow");
                        })
                    })
                
                    //上一张
                    $("#goPrev").on("click", function(){
                        btns[index].removeClass("ac");
                        if(--index < 0){
                            $ul.css({left: -len*liWidth});
                            index = len-1;
                        }
                
                        $ul.stop().animate({left: -index*liWidth}, "slow");
                
                        btns[index].addClass("ac");
                    })
                
                    //下一张
                    $("#goNext").on("click", function(){
                        btns[index].removeClass("ac");
                        if(++index >= len){
                            //移动到追加得那一张，但是移动完成之后瞬间回到第0张
                            $ul.stop().animate({left: -len*liWidth}, "slow", function(){
                                $ul.css({left: 0});
                            })
                            index = 0;
                        }else{
                            $ul.stop().animate({left: -index*liWidth});
                        }
                
                        btns[index].addClass("ac");
                    })
                
                    $("#div1").hover(function(){
                        $("#div1").addClass("ac");
                        clearInterval(timer);
                    }, (function autoPlay(){
                        $("#div1")[0].className ="";
                
                        timer = setInterval(() => {
                            $("#goNext").trigger("click");
                        },2000);
                        return autoPlay;
                    })());
                
                });
            }
        }

        return new Carousel()

    }
});