function $(id){
	return document.getElementById(id);
}

function checkInput(){
	if(checkUsername()&&checkPassword()&&createCode()){
		localStorage.getItem($("username").value,$("password").value);
		localStorage.setItem("login",$("username").value);//login是键，后面是值，获取到用户名，将其放到页面上
	}
	return checkUsername()&&checkPassword()&&createCode();
}

//用户名
function checkUsername(){
	var regTel = /^[1]\d{10}$/;
		if(!regTel.test($("username").value)){
			$("uesrnameInfo").innerHTML = "用户名有误";
			$("uesrnameInfo").className = "error";
			return false;
		}else{
			if(localStorage.getItem($("username").value) == null){
				$("uesrnameInfo").innerHTML = "该号码没有被注册";
				$("uesrnameInfo").className = "error";
			}else{
				$("uesrnameInfo").innerHTML = "√";
				$("uesrnameInfo").className = "correct";
				return true;
			}
		}
}
//密码必须是由数字和字母组成，长度6-14
function checkPassword(){
	var regPassword = /^[\da-z]{6,14}$/i;
		if(!regPassword.test($("password").value)){
			$("pwdInfo").innerHTML = "密码有误";
			$("pwdInfo").className = "error";
			return false;
		}else{
			if(localStorage.getItem($("username").value) !== $("password").value){
				$("pwdInfo").innerHTML = "密码不正确";
				$("pwdInfo").className = "error";
			}else{
				$("pwdInfo").innerHTML = "√";
				$("pwdInfo").className = "correct";
				return true;
			}
		}
}
//验证码图片
var img;
var number;
function clickText(){
	var checkImg = document.getElementById("pic");
	var imgArray = ["erweima/1.png","erweima/2.png","erweima/3.png","erweima/4.png","erweima/5.png","erweima/6.png","erweima/7.png","erweima/8.png","erweima/9.png","erweima/10.png"];
	var numberArray = ["DZr2","kWdk","t73Y","PQIU","UcMU","VNXr","3UJX","2nVC","3fHY","fMrw"];
	img = Math.floor(Math.random()*10);
	number = numberArray[img];
	checkImg = imgArray[img];
	$("pic").src = imgArray[img];
}

//验证码校验
function createCode(){
	if(number != $("getcode").value){
		$("codeInfo").innerHTML = "验证码有误";
		$("codeInfo").className = "error";
		return false;
	}else{
		$("codeInfo").innerHTML = "";
		return true;
	}
}
