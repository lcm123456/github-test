//页面加载完毕函数；
$(function(){
	//找到每个以及导航的li,为li注册单击事件；
	var navli=$("#list-nav>li");
	navli.click(function(){
	var thismenu=$(this);
	
	//找到当前的li后面的图标；
//	console.log(allicon);
	var thisicon=$(this).find(".icon");
	console.log(thisicon);
	//当前的li移除向下的图标；
	thisicon.removeClass("glyphicon-menu-down");
	//当前的li增加向上的图标；
	thisicon.addClass("glyphicon-menu-up");
	//找到所有的兄弟节点的具有图标的；
	var bicon=$(this).siblings().find(".icon");
	console.log(bicon);
	//增加向下的图标的样式；
	bicon.addClass("glyphicon-menu-down");
	//移除向上的图标；
	bicon.removeClass("glyphicon-menu-up");
	
	//当前li的所有兄弟元素，的样式设置为图标向下；
	//改变当前的li后面的图标朝上；
    //先隐藏所有的一级导航下面的ul,然后在把当前点击的显示出来；
    $("#list-nav>li>ul").hide();
	//拿到了点击的每个li下面的ul;
	var ul=thismenu.children("ul");
//	console.log(ul);
	//拿到了一级导航的li,设置下面的ul显示与隐藏之间切换；
    ul.slideDown();
	});
	//对复选框，当表头的全选复选框选中时：所有的列也选中；否则一样；
	//找到控制全选与否的复选框；
	var selectall=$("#select-all");
	//注册点击事件；
	selectall.click(function(){
		//找到所有tbody里面的复选框；
		var allcheckbox=$("tbody input");
		console.log(allcheckbox);
//      判断如果全选选中,则选择所有;否则全不选;
         if($("#select-all").is(':checked')){
         	console.log("xxx")
         	for (var i = 0; i < allcheckbox.length; i++) {
         		allcheckbox[i].checked = true;
         	}
         }else{
         	console.log("yyy")
         	for (var i = 0; i < allcheckbox.length; i++) {
         		allcheckbox[i].checked = false;
         	}
         }
	})
	console.log(window);
	
})
