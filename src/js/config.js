require.config({
    baseUrl:"/",
    paths:{
    "jquery":"libs/jquery-1.11.3",
    "header":"js/component/header",
    "carousel":"js/component/Carousel",
    "footer":"js/component/footer",
    "index":"js/index",
    "cookie":"libs/jquery.cookie",
    "url":"js/component/url",
    "template": "libs/template-web",
    "item" : "js/component/item",
    "cart":"js/Component/cart",
    "buy" : "js/Component/buy"
},
//不符合AMD规范的模块，垫片
shim: {
    "cookie" : {
        deps: ["jquery"]
    }
}
});