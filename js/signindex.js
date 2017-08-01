function $(id){
	return document.getElementById(id);
}

function checkInput(){
	if(checkTel()&&checkCode()&&checkPassword()&&checkRepassword()){
		localStorage.setItem($("phonenumber").value,$("password").value);
		alert("注册成功");
	}
	return checkTel()&&checkCode()&&checkPassword()&&checkRepassword();
}

//手机号码，11位，以数字1开头
function checkTel(){
	var regTel = /^[1]\d{10}$/;
		if(!regTel.test($("phonenumber").value)){
			$("telInfo").innerHTML = "请输入正确的手机号码";
			$("telInfo").className = "error";
			return false;
		}else{
			if(localStorage.getItem($("phonenumber").value)){
				$("telInfo").innerHTML = "用户名已经被注册";
				$("telInfo").className = "error";
				return false;
			}else{
				$("telInfo").innerHTML = "√";
				$("telInfo").className = "correct";
				return true;
			}
		}
}

// 密码必须是由数字和字母组成，长度6-14
function checkPassword(){
	var regPassword = /^[\da-z]{6,14}$/i;
		if(!regPassword.test($("password").value)){
			$("pwdInfo").innerHTML = "密码必须是由数字和字母组成，长度6-14";
			$("pwdInfo").className = "error";
			$("password").select();
			return false;
		}else{
			$("pwdInfo").innerHTML = "√";
			$("pwdInfo").className = "correct";
			return true;
		}
}

// 两次输入的密码必须相同
function checkRepassword(){
	if($("confirmPassword").value !== $("password").value){
		$("repwdInfo").innerHTML = "两次输入不一致";
		$("repwdInfo").className = "error";
		return false;
	}else{
		$("repwdInfo").innerHTML = "√";
		$("repwdInfo").className = "correct";
		return true;
	}
}


// 验证码
var code;//定义全局变量
// 产生验证码
function createCode(){
	code = "";
	var codeLength = 4;//长度
	var checkCode = document.getElementById("codes");
	var random = new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");//随机数
	for(var i=0;i<codeLength;i++){
		var index = Math.floor(Math.random()*36)//取得随机数的索引（0-35）
		code += random[index];//根据索引取得的随机数加到code上
	}
	checkCode.value = code;//把code值赋给验证码
	$("codes").innerHTML = code;
}

// 校验验证码
function checkCode(){
	if($("codes").value !== $("pincode").value){
		$("codeInfo").innerHTML = "验证码有误";
		$("codeInfo").className = "error";
		return false;
	}else{
		$("codeInfo").innerHTML = "√";
		$("codeInfo").className = "correct";
		return true;
	}
}




