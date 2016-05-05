function warning(msg, danger) {
	$('#msg ').removeClass("alert-success alert-danger alert-warning");
	if (danger == 1)
		$('#msg').addClass('alert-danger');
	else if (danger == 0)
		$('#msg').addClass('alert-success');
	else if (danger == 2)
		$('#msg').addClass('alert-warning');
	$('#msg ').html(msg);
	$('#msg').slideDown('slow');
}
/*
 * time is ms
 * */
function warninghide(msg, danger, time) {
	$('#msg ').removeClass("alert-success alert-danger alert-warning");
	if (danger == 1)
		$('#msg').addClass('alert-danger');
	else if (danger == 0)
		$('#msg').addClass('alert-success');
	else if (danger == 2)
		$('#msg').addClass('alert-warning');
	$('#msg ').html(msg);
	$('#msg').slideDown('slow');
	setTimeout(function() {
		$('#msg').slideUp('slow');
	}, time);
}
/**
 * Ajax 操作封装函数
 * @param url
 * @param data
 * @param success
 * @param error
 */
function doAjax(url,data,success,error) {
	console.log("doing ajax");
	$.ajax({
		url : url,
		data : data,
		type : "POST",
		dataType : "json",
		success: success,
		error: error
	})
}

/**
 * 冻结传入的  文档上下文中的   含有editing  类的对象，改变它们的可编辑状态
 * @param context
 */
function toggle_edit(context) {
	var tarCom = $(".editing",context);
	if(tarCom.hasClass("disabled")) {
		tarCom.removeClass("disabled");
		tarCom.removeAttr("disabled");
		console.log("remove editing");
	} else {
		tarCom.addClass("disabled");
		tarCom.attr("disabled","disabled");
		console.log("add editing")
	}
}

function bindMenuClick() {
	$(".hide-menu").hide();
	var aa =$("a.active").parent().parent();
	console.log(aa);
	aa.show();
	$(".hide-menu-title").click(function(){
		var menu = $(this).parent().next();
		if(menu.css("display")=="none") {
			menu.show(100);
		} else {
			menu.hide(100);
		}
	});
}

/**
 * ajax  操作  默认回调函数
 */
var callback = function(json){
	if(json.info == 'success') {
		warninghide("success",0,1000);
	} else {
		warninghide("failed",1,1000);
	}
	console.log(json);
	toggle_edit($("body"));
}

/**
 * 精简版本  Ajax 操作封装函数，  使用默认的成功失败回调函数
 * @param url
 * @param data
 * @param success
 * @param error
 */
function doSimpleAjax(url,data) {
	$.ajax({
		url : url,
		data : data,
		type : "POST",
		dataType : "json",
		success: callback,
		error: callback
	})
}