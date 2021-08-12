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
 
var username = document.getElementById("username");
var code = document.getElementById("code");
var btnlogin = document.getElementById("btn-login");

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

//
var username = document.getElementById("username");                      /*此时需要判断两个input框架里面是否均输入且正确*/
var code= document.getElementById("code");
username.addEventListener("keyup", function (event) {
    event.preventDefault();
     if (event.keyCode === 13) {
       document.getElementById("btnlogin").click();
    }
});
code.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnlogin").click();
    }
});
/*点击登录进入前台页面*/
btnlogin.onclick = function enterpage() { 
    /*跳转至范恩龙写的前台页面 */
 }




/*由登录页面跳转至注册页面*/
var logindown= document.getElementById("login-down");
 var toregister = document.getElementsByClassName("to-register")[0];
var register = document.getElementById("register");
   ltoregister = function () { 
        register.style.display="block";
       logindown.style.display = "none";
    }


/*点击忘记密码进入重置密码页面，登录页面消失*/
var forgetpwd = document.getElementById("forget-pwd");
var newpwd = document.getElementById("newpwd");
var logindown = document.getElementById("login-down");

function tonesss(){ 
    logindown.style.display="none";
    newpwd.style.display="block";
 }



// /*由注册到登录*/
rtologin = function () { 
    register.style.display = "none";
    logindown.style.display = "block";
 } 

/*由重置密码到登录和注册*/
ptologin = function () { 
    newpwd.style.display = "none";
    logindown.style.display = "block";
 }
 ptoregister = function () { 
     newpwd.style.display = "none";
     register.style.display = "block";
  }


/*登录页面鼠标获得焦点，input的border变色*/
var username = document.getElementById('username');
var code = document.getElementById('code');
var words = document.getElementById('words');
var emaileerror = document.getElementById('email-error');
var btncode = document.getElementById('btn-code');
/*获得焦点 失去焦点*/
username.onfocus = function one() {
    username.style.borderBottom = "1px solid skyblue ";
    username.style.borderTop = "none";
    username.style.borderLeft = "none";
    username.style.borderRight = "none";
    emailerror.style.display = "none";

}

username.onblur = function two() {
    username.style.border = "1px solid #dcdfe6"
    username.style.borderTop = "none";
    username.style.borderLeft = "none";
    username.style.borderRight = "none";
}


code.onfocus = function first() {
    code.style.border = "1px solid skyblue "
    code.style.borderTop = "none";
    code.style.borderLeft = "none";
    code.style.borderRight = "none";
}
code.onblur = function second() {
    code.style.border = "1px solid #dcdfe6 "
    code.style.borderTop = "none";
    code.style.borderLeft = "none";
    code.style.borderRight = "none";
}
/*注册页面鼠标获得焦点，input的border变色 */
var registerpwd = document.getElementById("registerpwd");
var nickname = document.getElementById("nickname");
var pwdemail = document.getElementById("pwdemail");
var pwdcode = document.getElementById("pwdcode");
nickname.onfocus = function nicknameonfocus() {
    console.log("aa")
    nickname .style.borderBottom = "1px solid skyblue";
    nickname .style.borderTop = "none";
    nickname .style.borderLeft = "none";
    nickname .style.borderRight = "none";

}

nickname.onblur = function nicknameblur() {
    nickname .style.border = "1px solid #dcdfe6"
    nickname .style.borderTop = "none";
    nickname .style.borderLeft = "none";
    nickname .style.borderRight = "none";
}
registerpwd.onfocus = function pwdonfocus() {
    console.log("aa")
    registerpwd.style.borderBottom = "1px solid skyblue";
    registerpwd.style.borderTop = "none";
    registerpwd.style.borderLeft = "none";
    registerpwd.style.borderRight = "none";

}

registerpwd.onblur = function pwdblur() {
    registerpwd.style.border = "1px solid #dcdfe6"
    registerpwd.style.borderTop = "none";
    registerpwd.style.borderLeft = "none";
    registerpwd.style.borderRight = "none";
}
pwdemail.onfocus = function  pwdemailonfocus() {
    console.log("aa")
    pwdemail.style.borderBottom = "1px solid skyblue";
    pwdemail.style.borderTop = "none";
    pwdemail.style.borderLeft = "none";
    pwdemail.style.borderRight = "none";

}

pwdemail.onblur = function  pwdemailblur() {
    pwdemail.style.border = "1px solid #dcdfe6"
    pwdemail.style.borderTop = "none";
    pwdemail.style.borderLeft = "none";
    pwdemail.style.borderRight = "none";
}
pwdcode.onfocus = function pwdcodeonfocus() {
    console.log("aa")
    pwdcode.style.borderBottom = "1px solid skyblue";
    pwdcode.style.borderTop = "none";
    pwdcode.style.borderLeft = "none";
    pwdcode.style.borderRight = "none";

}

pwdcode.onblur = function pwdcodelblur() {
    pwdcode.style.border = "1px solid #dcdfe6"
    pwdcode.style.borderTop = "none";
    pwdcode.style.borderLeft = "none";
    pwdcode.style.borderRight = "none";
}
/*重置密码里面的input点击变色 */
var newpwdinputs = document.getElementById("newpwd-input").querySelectorAll("input");
console.log(newpwdinputs);
for (let i = 0; i < newpwdinputs.length;i++){
    newpwdinputs[i].onfocus = function inputsfocus() { 
        newpwdinputs[i].style.borderBottom ="1px solid skyblue";
        newpwdinputs[i].style.borderTop="none";
        newpwdinputs[i].style.borderLeft = "none";
        newpwdinputs[i].style.borderRight = "none";
     }
}
for (let i = 0; i < newpwdinputs.length; i++) {
    newpwdinputs[i].onblur = function inputsblur() {
        newpwdinputs[i].style.borderBottom = "1px solid #dcdfe6";
        newpwdinputs[i].style.borderTop = "none";
        newpwdinputs[i].style.borderLeft = "none";
        newpwdinputs[i].style.borderRight = "none";
    }
}










/*判断邮箱格式的验证 */                                                 /* */
var username = document.getElementById("username");
var btncode = document.getElementById("btn-code");
var emailerror = document.getElementById("email-error");
var words = document.getElementById("words");
btncode.onclick = function () {
    var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
    // 　var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(username.value)) {
        emailerror.style.display="block";
        words.innerHTML="输入正确";
        emaileerror.style.backgroundColor = "skyblue";
    } else {
        emailerror.style.display = "block";
        words.innerHTML = "输入错误"
        emaileerror.style.backgroundColor ="#d16d62";
    }
}








// btncode.onclick = function btncode() {


//     /*判断手机号码是否格式错误*/
//     var number = phone.value;
//     //判断input里面的value值格式
//     if (number == '' || number == undefined || number == null) {
//         phone.style.border = "1px solid #d16d62";
//         phoneerror.style.display = "block";
//         words.innerHTML = '手机格式错误';



//     }
//     else if (isNaN(number)) {
//         phoneerror.style.display = "block";
//         words.innerHTML = '手机格式错误';
//         phone.style.border = "1px solid #d16d62";

//     }
//     else if (number.charAt(0) == 0) {
//         phoneerror.style.display = "block";
//         words.innerHTML = '手机格式错误';
//         phone.style.border = "1px solid #d16d62";


//     }
//     else if (parseInt(number) != number) {
//         phoneerror.style.display = "block";
//         words.innerHTML = '手机格式错误';
//         phone.style.border = "1px solid #d16d62";

//     }
//     else if (number < 1000 || number > 99999999999) {
//         phoneerror.style.display = "block";
//         words.innerHTML = '手机格式错误';
//         phone.style.border = "1px solid #d16d62";

//     } else {
//         phoneerror.style.display = "block";
//         words.innerHTML = '发送成功';



//     }

// }
