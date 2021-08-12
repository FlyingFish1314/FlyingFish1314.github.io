/*页面有个缓慢动态效果 */
/*个人信息与登录 */
var person = document.getElementById("person");
var personhidden = document.getElementById("person-hidden");
var goout = document.getElementById("goout");
var goouthidden = document.getElementById("goout-hidden");
var firstPage = document.getElementById("firstPage");
btnperson = function () {
    personhidden.style.display = "block";
    // firstPage.style.display="none";
}
/*显示退出系统且退出系统*/
var gooutcontain = document.getElementById("goout-contain");
var yes = document.getElementsByClassName("yes")[0];
var no = document.getElementsByClassName("no")[0];
btngoout = function () {
    gooutcontain.style.display = "block";
}
closehind = function () {
    gooutcontain.style.display = "none";
}
goouthind = function () {                                /*此处应该执行退出体统的ajax函数*/
    gooutcontain.style.display = "none";
}


/*基本资料与修改密码的显示与隐藏*/
var basictextmessage = document.getElementById("basictext-message");
var textmessage = document.getElementById("textmessage");
var textpwd = document.getElementById("textpwd");
var goouthidden = document.getElementById("goout-hidden");
var textmessagedown = document.getElementsByClassName("textmessagedown")[0];
var textpwddown = document.getElementsByClassName("textpwddown")[0];
showmessage = function () {
    textmessagedown.style.backgroundColor = "black";
    textpwddown.style.backgroundColor = "gainsboro"
    if (basictextmessage.style.display = "none") {
        basictextmessage.style.display = "block";
        goouthidden.style.display = "none";
    }
}

showpwd = function () {
    textmessagedown.style.backgroundColor = "gainsboro";
    textpwddown.style.backgroundColor = "black"
    if (goouthidden.style.display == "none") {
        goouthidden.style.display = "block";
        basictextmessage.style.display = "none"
    }
}
/*点击关闭返回至用户管理 */
var firstpagecontain = document.getElementById("firstpage-contain");
var tofirstpage = document.getElementsByClassName("tofirstpage"[0]);
var contain = document.getElementById("contain");
tofirstp = function () {
    console.log("aa");
    personhidden.style.display = "none";
    firstpagecontain.style.display="block";
    contain.style.display = "block";
}
/*点击侧边栏四个标题跳转到相应位置且标题变色且出现滑块*/
var personslist = document.getElementsByClassName("personslist")[0];
var personlist = document.getElementsByClassName("personlist")[0];
var goodslist = document.getElementsByClassName("goodslist")[0];
var managerlist = document.getElementsByClassName("managerlist")[0];
var shoplist = document.getElementsByClassName("shoplist")[0];

var personshiddenlist = document.getElementById("persons-list");
var personhiddenlist = document.getElementById("person-list");
var goodshiddenlist = document.getElementById("goods-list");
var shophiddenlist = document.getElementById("shop-list");
var managerhiddenlist = document.getElementById("manager-list");
/*上面导航栏的几个块的内容 */
var firstpage = document.getElementsByClassName("firstpage")[0];
var persons = document.getElementsByClassName("persons")[0];
var person = document.getElementsByClassName("person")[0];
var goods = document.getElementsByClassName("goods")[0];
var shop = document.getElementsByClassName("shop")[0];
var manager = document.getElementsByClassName("manager")[0];
/* 侧边栏标题隐藏内容缓慢下滑与升起 */


/*         侧边栏第一个标题内容               */
var ps = document.getElementById("persons-list").style.height;
var time01;/*全部变量声明定时器名字*/
var time02;
var ph = parseInt(ps);
var ph = 0;
console.log(typeof ph);
personslist.onclick = function showpersonslist() {
    window.location="./persons.html";
    console.log("aaa");
    manager.style.color = "gainsboro";
    person.style.color = "gainsboro";
    goods.style.color = "gainsborok";
    shop.style.color = "gainsboro";
    persons.style.color = "black";
    if (personslist.style.backgroundColor == "#272a38") {                   /*为啥这部分不起作用 */
        console.log("aa")
        personslist.style.backgroundColor = "#47484c";
    } else {
        personslist.style.backgroundColor = "#272a38";
    }
    if (ph == 0) {
        clearInterval(time02);
        time01 = setInterval(function addph() {/*函数书写格式*/
            if (ph == 100) {
                clearInterval(time01);
                return;
            } else {
                ph += 2;

                console.log(ph);
            }
            personshiddenlist.style.height = ph + 'px';
            personshiddenlist.style.display = "block";
            /*最后把改变的值赋进去*/
        }, 1)
    } else {
        clearInterval(time01);
        time02 = setInterval(function downph() {

            if (ph <= 100 && ph > 0) {
                ph -= 2;
                console.log(ph);
            } else {
                personshiddenlist.style.display = "none";
                clearInterval(time02);
                return;
            }
            personshiddenlist.style.height = ph + 'px';
        }, 1)
    }

}
/*侧边栏第二个标题内容 */
var pss = document.getElementById("person-list").style.height;
var time03;/*全部变量声明定时器名字*/
var time04;
var psh = parseInt(pss);
var psh = 0;
console.log(typeof psh);
personlist.onclick = function showpersonlist() {
    window.location = "./person.html";
    window.location="./person.html";
    persons.style.color = "gainsboro";
    manager.style.color = "gainsboro";
    goods.style.color = "gainsborok";
    shop.style.color = "gainsboro";
    person.style.color = "black";
    if (personlist.style.backgroundColor == "#272a38") {
        personlist.style.backgroundColor = "#47484c";
    } else {
        personlist.style.backgroundColor = "#272a38";
    }
    if (psh == 0) {
        clearInterval(time04);
        time03 = setInterval(function addpsh() {/*函数书写格式*/
            if (psh == 100) {
                clearInterval(time03);
                return;
            } else {
                // h = h*1+2;
                psh += 2;
                console.log(psh);
            }
            personhiddenlist.style.height = psh + 'px';
            personhiddenlist.style.display = "block";
            /*最后把改变的值赋进去*/
        }, 10)
    } else {
        clearInterval(time03);
        time04 = setInterval(function downpsh() {
            if (psh <= 100 && psh > 0) {
                // h = h * 1 - 2;
                psh -= 2;
                console.log(psh);
            } else {
                clearInterval(time04);
                personhiddenlist.style.display = "none";
                return;

            }
            personhiddenlist.style.height = psh + 'px';

        }, 10)
    }

}

/*侧边栏第三个标题内容 */
var gs = document.getElementById("goods-list").style.height;
var time05;/*全部变量声明定时器名字*/
var time06;
var gh = parseInt(gs);
var gh = 0;
console.log(typeof gh);
goodslist.onclick = function showgoodslist() {
    window.location = "./goods.html";
    persons.style.color = "gainsboro";
    manager.style.color = "gainsboro";
    goods.style.color = "black";
    shop.style.color = "gainsboro";
    person.style.color = "gainsboro";

    if (goodslist.style.backgroundColor == "#272a38") {
        goodslist.style.backgroundColor = "#47484c";
    } else {
        goodslist.style.backgroundColor = "#272a38";
    }
    if (gh == 0) {
        clearInterval(time06);
        time05 = setInterval(function addgh() {/*函数书写格式*/
            if (gh == 100) {
                clearInterval(time03);
                return;
            } else {
                // h = h*1+2;
                gh += 2;
                console.log(gh);
            }
            goodshiddenlist.style.height = gh + 'px';
            goodshiddenlist.style.display = "block";
            /*最后把改变的值赋进去*/
        }, 10)
    } else {
        clearInterval(time05);
        time06 = setInterval(function downgh() {
            if (gh <= 100 && gh > 0) {
                // h = h * 1 - 2;
                gh -= 2;
                console.log(gh);
            } else {
                clearInterval(time06);
                goodshiddenlist.style.display = "none";
                return;
            }
            goodshiddenlist.style.height = gh + 'px';
        }, 10)
    }

}
/*侧边栏第四个标题内容 */
var ss = document.getElementById("shop-list").style.height;
var time07;/*全部变量声明定时器名字*/
var time08;
var sh = parseInt(ss);
var sh = 0;
console.log(typeof sh);
shoplist.onclick = function showshoplist() {
    window.location = "./shop.html";
    persons.style.color = "gainsboro";
    manager.style.color = "gainsboro";
    goods.style.color = "gainsboro";
    shop.style.color = "black";
    person.style.color = "gainsboro";
    if (shoplist.style.backgroundColor == "#272a38") {
        shoplist.style.backgroundColor = "#47484c";
    } else {
        shoplist.style.backgroundColor = "#272a38";
    }
    if (sh == 0) {
        clearInterval(time07);
        time07 = setInterval(function addsh() {/*函数书写格式*/
            if (sh == 100) {
                clearInterval(time07);
                return;
            } else {
                // h = h*1+2;
                sh += 2;
                console.log(sh);
            }
            shophiddenlist.style.height = sh + 'px';
            shophiddenlist.style.display = "block";
            /*最后把改变的值赋进去*/
        }, 10)
    } else {
        clearInterval(time07);
        time08 = setInterval(function downsh() {
            if (sh <= 100 && sh > 0) {
                // h = h * 1 - 2;
                sh -= 2;
                console.log(sh);
            } else {
                clearInterval(time08);
                shophiddenlist.style.display = "none";
                return;
            }
            shophiddenlist.style.height = sh + 'px';
        }, 10)
    }

}

/*侧边栏第五个标题内容 */
var ms = document.getElementById("manager-list").style.height;
var time09;/*全部变量声明定时器名字*/
var time10;
var mh = parseInt(ms);
var mh = 0;
console.log(typeof mh);
managerlist.onclick = function showmanagerlist() {
    window.location = "./manager.html";
    persons.style.color = "gainsboro";
    manager.style.color = "black";
    goods.style.color = "gainsboro";
    shop.style.color = "gainsboro";
    person.style.color = "gainsboro";
    if (managerlist.style.backgroundColor == "#272a38") {
        managerlist.style.backgroundColor = "#47484c";
    } else {
        managerlist.style.backgroundColor = "#272a38";
    }
    if (mh == 0) {
        clearInterval(time10);
        time09 = setInterval(function addmh() {/*函数书写格式*/
            if (mh == 100) {
                clearInterval(time09);
                return;
            } else {
                // h = h*1+2;
                mh += 2;
                console.log(mh);
            }
            managerhiddenlist.style.height = mh + 'px';
            managerhiddenlist.style.display = "block";
            /*最后把改变的值赋进去*/
        }, 10)
    } else {
        clearInterval(time09);
        time10 = setInterval(function downmh() {
            if (mh <= 100 && mh > 0) {
                // h = h * 1 - 2;
                mh -= 2;
                console.log(mh);
            } else {
                clearInterval(time10);
                managerhiddenlist.style.display = "none";
                return;
            }
            managerhiddenlist.style.height = mh + 'px';
        }, 10)
    }

}


/*日期的制作 */
var year = document.getElementsByClassName("year")[0];
var month = document.getElementsByClassName("month")[0];
var day = document.getElementsByClassName("day")[0];
var which = document.getElementsByClassName("which")[0];
var data = new Date();
var here = data.getDay();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
year.innerHTML = data.getFullYear();
month.innerHTML = data.getMonth() + 1;
day.innerHTML = data.getDate();
which.innerHTML = arr[here];







