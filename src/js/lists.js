require(["./config"],()=>{
    require(["jquery","header","footer","list","cookie"],()=>{
        console.log($.cookie("h2"))
        $("h2 span").text($.cookie("h2"));
    })
})