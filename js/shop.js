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
    // firstpagecontain.style.display="block";
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
var persons = document.getElementsByClassName("persons")[0];
var person = document.getElementsByClassName("person")[0];
var goods = document.getElementsByClassName("goods")[0];
var shop = document.getElementsByClassName("shop")[0];
var manager = document.getElementsByClassName("manager")[0];
/* 侧边栏标题隐藏内容缓慢下滑与升起 */

/*点击首页跳转页面 */
var firstpage = document.getElementById("firstpage");
firstpage.onclick = function fpage() {
    window.location = "./firstpage.html";
}
/*         侧边栏第一个标题内容               */
personslist.onclick = function showpersonslist() {
    window.location = "./persons.html";
}
/*侧边栏第二个标题内容 */
personlist.onclick = function showpersonlist() {
    window.location = "./person.html";
}

/*侧边栏第三个标题内容 */
goodslist.onclick = function showgoodslist() {
    window.location = "./goods.html";
}
/*侧边栏第四个标题内容 */
var ss = document.getElementById("shop-list").style.height;
var time07;/*全部变量声明定时器名字*/
var time08;
var sh = parseInt(ss);
var sh = 0;
console.log(typeof sh);
shoplist.onclick = function showshoplist() {
    persons.style.color = "gainsboro";
    manager.style.color = "gainsboro";
    goods.style.color = "gainsboro";
    shop.style.color = "black";
    person.style.color = "gainsboro";
    if (sh == 0) {
        clearInterval(time07);
        time07 = setInterval(function addsh() {/*函数书写格式*/
            if (sh == 120) {
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
            if (sh <= 120 && sh > 0) {
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
managerlist.onclick = function showmanagerlist() {
    window.location = "./manager.html";

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
// console.log(data.getFullYear());   /*年*/
// console.log(data.getMonth() + 1);/*月份*/
// console.log(data.getDate());/*获取当天日期*/
// console.log(data.getDay());/*获取星期几*/


/*上部导航栏里面的搜索框与按钮*/
var btnsearch = document.getElementById("btn-search");
var newsearch = document.getElementById("newsearch");

/*点击搜索执行ajax */

/*点击重置执行ajax */

/*搜索框获得焦点后border变色 */
var search = document.getElementsByClassName("search")[0];
search.onfocus = function () {
    console.log(search);
    search.style.border = "1px solid skyblue "
}

/*判断性别的男和女的复选框 */                                                          /*无法实现 */
var man = document.getElementsByClassName("man")[0];
var woman = document.getElementsByClassName("woman")[0];






/*获取所有的页数*/
// var allpage = document.getElementsByClassName('allpage')[0];
// var allpageb = document.getElementsByClassName('allpageb')[0];
// var allpagebb = document.getElementsByClassName('allpagebb')[0];
// var more = document.getElementsByClassName('more')[0];
//     $.ajax({
//         type: 'get',
//         url: 'http://118.195.129.130:3000/order/allpage_order',
//         data: {
//             Null: '',
//         },
//         success: function (data) {
//             if(data.pages>=5){
//             console.log(data.pages);
//             allpage.innerHTML=data.pages
//             allpageb.innerHTML = data.pages-1;
//              allpagebb.innerHTML = data.pages;
//             }else{
//                 more.style.display="none";
//                 allpage.innerHTML = data.pages
//                 allpageb.innerHTML = data.pages - 1;
//                 allpagebb.innerHTML = data.pages;
//             }
//         },
//         error: function (jqXHR) {
//             console.log('错误');
//         }
//     })