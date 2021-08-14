/*小眼睛变成大眼睛，密码显示*/
var eye = document.getElementById("eye");
var newpasswd = document.getElementsByClassName("newpasswd")[0];
stobigeye = function () {
    if (eye.getAttribute('src') == './img/small eye.png') {
        eye.src = './img/big eye.png';
        console.log("aa")
        newpasswd.type = 'text';
    } else {
        eye.src = './img/small eye.png';
        newpasswd.type = 'password';
    }
}
/*登陆页面当两个input框都符合要求的时候，登录的cursor状态改变*/            /**/
var phone = document.getElementById("phone");
var code = document.getElementById("code");
var btnlogin = document.getElementById("btn-login");
/*当phone里面的值正确并且验证码框里面的东西正确就可以进行更改登录那个按钮的cursor状态 */
// enterlogin = function () { 
//     btnlogin.style.cursor = " pointer"                              /*更改方式如下 */
//  }


/*点击忘记密码进入重置密码页面，登录页面消失*/
var forgetpwd = document.getElementsByClassName("forget-pwd");
var logindown = document.getElementById("login-down");
var newpwd = document.getElementById("newpwd");

tonewpwd = function () {
    logindown.style.display = "none";
    newpwd.style.display = "block";
}


/*登录按钮执行后可以等一两秒，使按钮框里面的内容变成转圈圈登录中*/

/*获取验证码后验证码那里的文字innerhtml改变 */


/*验证码发送成功后变成  x 秒后重新获取（在ajax函数里面写）*/



/*判断验证码位数是否够，如果够的话登录变色，
其次在判断验证码是否正确，如果正确就进入系统，不正确就弹出错误提示框*/



/*回车键以及键盘的上下左右按钮键的便捷使用*/

/*4、按下回车键命令按钮执行函数跳转页面*/                       /*还有键盘上下键的便捷使用，input里面可以使用*/
// var btn1 = document.getElementById('btn1');
// var pass_l = document.getElementById('pass_l');
// pass_l.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("btn1").click();
//     }

// });
// var btnlogin = document.getElementById("btn-login");
// var email= document.getElementById("email");                      /*此时需要判断两个input框架里面是否均输入且正确*/
// var code = document.getElementById("code");
// console.log("aaa")
// function enterfpage() { 
//     console.log("aaa")
//  }

// email.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("btnlogin").click();
//     }
// });
// cemail.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("btnlogin").click();
//     }
// });
/*登录处忘记密码 */
var newpwd = document.getElementById("newpwd");
var loginforgetpwd = document.getElementsByClassName("loginforget-pwd")[0];
loginforgetpwd.onclick=function loginpwd() { 
    newpwd.style.display = "block";
    logindown.style.display = "none ";
 }


/*由重置密码到登录*/
var newpwd = document.getElementById("newpwd");
ptologin = function () {
    newpwd.style.display = "none";
    logindown.style.display = "block";
}


/*鼠标获得焦点，input的border变色*/
var username = document.getElementById('username');
var code = document.getElementById('code');
var words = document.getElementById('words');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById("email-error");
// var btncode = document.getElementById('btn-code');
var pwdemail = document.getElementById("pwdemail");
var getcode = document.getElementsByClassName("get-code");
var getcode = document.getElementsByClassName("get-code")[0];
/*判断邮箱格式的验证 */                                                 /* */
getcode.onclick= function pwdemail() {
    console.log("aaa")
    var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
    // 　var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(pwdemail.value)) {
        emailerror.style.display = "block";
        words.innerHTML = "输入正确";
        emaileerror.style.backgroundColor = "skyblue";
    } else {
        emailerror.style.display = "block";
        words.innerHTML = "输入错误";
        emaileerror.style.backgroundColor = "#d16d62";
    }
}


/*登录处获得焦点 失去焦点*/
username.onfocus = function one() {
    console.log("aaaa")
    username.style.border = "1px solid skyblue "
    // emailerror.style.display = "none";

}

username.onblur = function two() {
    username.style.border = "1px solid #dcdfe6"
    // emailerror.style.display = "none";
}


code.onfocus = function first() {
    code.style.border = "1px solid skyblue "
}
code.onblur = function second() {
    code.style.border = "1px solid #dcdfe6 "
}
/*忘记密码处input框架变色 */
var newpwdinput = document.getElementById("newpwd-input");
var inputs = newpwdinput.getElementsByTagName("input");
console.log(inputs)
for (let i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function inputsfocus() {
        inputs[i].style.border= "1px solid skyblue";
    }
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].onblur = function inputsblur() {
        inputs[i].style.border = "1px solid #dcdfe6 ";
    }
}

/*当点击获取验证码的时候进行判断手机格式是否正确，然后出现隐藏框*/                  /*起初验证码cursor禁用，当phone的input内容符合要求即进行cursor的更改以及button的背景颜色的改变 */
// var btncode = document.getElementById('btn-code');
// btncode.onmouseover = function codeone() {
//     document.getElementById('btn-code').style.cursor = "pointer";
// }


// /*忘记密码处更改密码发送验证码获取验证码*/

// /*点击获取验证码执行ajax */  
var pwdemail = document.getElementById("pwdemail");
var getcode = document.getElementsByClassName("get-code")[0];
getcode.onclick = function getnewpwd() { 
    let contmain = pwdemail.value;
    console.log(contmain);
    $.ajax({
        type: 'post',
        url: 'http://118.195.129.130:3000/user/getMailCode',
        data: {
            mail: contmain
        },
        success: function (data) {
            console.log('成功');
            alert("成功，耶斯莫拉！")
            /*重置密码成功之后页面出现显示框架 */
        },
        error: function () {
            console.log('错误')
        }
    })
 }


/*登录处发送验证码获取验证码 */
// var btncode = document.getElementById("btn-code");
/*点击登录执行ajax */
// console.log(username);
// btncode.onclick = function codeenter() { 
//     let contmain = username.value;
//     $.ajax({
//         type: 'post',
//         url: 'http://118.195.129.130:3000/user/getMailCode',
//         data: {
//             mail: contmain
//         },
//         success: function (data) {
//             console.log(contmain)
//             console.log('成功');
//             alert('成功');
//         },
//         error: function () {
//             console.log('错误')
//         }
//     })
//  }
/*点击登录进入后台管理系统页面 */
var btnlogin = document.getElementById("btn-login");
btnlogin.onclick = function loginenter() { 
    window.location="./firstpage.html"
 }




 /*判断邮箱的iuput框内容是否符合要求！！！！ */


 
 /*一定要判断input内容是否正确以及是否符合要求！ */


 /*给登录按钮增加回车键事件 */
// var btncode = document.getElementById("btn-code");
var code = document.getElementById("code");
username.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementById("btn-login").click();
    }

});
code.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("验证码")
        document.getElementById("btn-login").click();
    }

});
/*和重置密码增加回车事件 */
var pwdemail = document.getElementById("pwdemail");
var oldpwd = document.getElementsByClassName("oldpwd")[0];
var newpasswd = document.getElementsByClassName("newpasswd")[0];
var pwdcode = document.getElementsByClassName("pwdcode")[0];
var tonewpwd = document.getElementsByClassName("to-newpwd")[0];
tonewpwd.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementById("pwdemail").click();
    }

});
tonewpwd.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementsByClassName("oldpwd")[0].click();
    }

});
tonewpwd.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementsByClassName("newpasswd")[0].click();
    }

});
tonewpwd.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementsByClassName("pwdcode")[0].click();
    }

});
tonewpwd.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("邮箱")
        document.getElementsByClassName("to-newpwd")[0].click();
    }

});
/*重置密码成功之后跳转到登陆页面 */
var tonewpwd = document.getElementsByClassName("to-newpwd")[0];
var logindown = document.getElementById("login-down");
tonewpwd.onclick = function newpwdtologin() { 
    alert("重置密码成功，请重新登录！")
    newpwd.style.display="none";
    logindown.style.display="block";
 }

