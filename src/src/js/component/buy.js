

define(["jquery"], function() {
    class Buy {
        constructor() {
            this.init()
        };

        init() {
                var asum = [];//接受点击对象


                var table = document.getElementById("table");//得到table；
                var arr= document.querySelectorAll("table tr");//获得所有tr的集合

                for(var j=0;j<asum.length;j++ ) {

                    // console.log(asum[j].length);

                    var strs = [];//用一个空数组存储对象
                    table.onclick = function (e) {
                        e = e || event;
                        var target = e.target || e.srcElement;
                        if (target.className === "add") {
                            var s = target.getAttribute("nums");//通过ID找到对象
                            asum[s]["n"] += 1;//点击就加1
                            if (asum[s]["n"] == 1) {//如果第一次点击就加入到数组
                                strs.push(asum[s]);
                            }
                            var str = JSON.stringify(strs);//将json对象转为字符存储cookie
                            console.log(strs);
                            console.log(str);
                            tools.cookie("charrt", str, {expires: 3});//点击一次就获取一次cookie
                        }
//
                    }
                }



        }
    }
    return new Buy();
});