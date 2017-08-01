//将获取到的用户名放在页面上
window.onload = function(){
	var text = document.getElementById("text");
	var username = localStorage.getItem("login");//获取用户名
	if(username != null){
		text.innerHTML = username;
		localStorage.removeItem("login");
	}else{
		text.innerHTML = "登录/注册";
	}
}

// 轮播图
$(function(){
	var swiper = new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:"vertical",

//导航栏渐变
onInit:function(swiper){//Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper);//隐藏动画元素
    swiperAnimate(swiper);//初始化完成开始动画
},
    onSlideChangeEnd: function(swiper){
		swiperAnimate(swiper);//每个slide切换结束时也运行当前slide动画
		switch(swiper.activeIndex){
		case 0:
		$("#nav").css({
			"background":"#d7dade",
			"color":"black",
		});
		$("#nav").hide();
		$("#nav").slideDown(500);
		break;
		case 1:
		$("#nav").hide();
		$("#nav").css({
			"background":"rgba(0,0,0,0.5)",
			"color":"white",
		});
		$("#nav").slideDown(500);
		break;
		case 2:
		$("#nav").hide();
		$("#nav").slideDown(500);
		break;
		case 3:
		$("#nav").hide();
		$("#nav").slideDown(500);
		break;
		case 4:
		$("#nav").hide();
		$("#nav").slideDown(500);
		break;
		}
	}
	});
});


