var pagesc = $("#pageSC").val();
var intervalProcess;
function checkDownloadMailState(){
	$('#emailListPage').showLoading();
	intervalProcess = window.setInterval("downloadMailState()",1000);
};
function downloadMailState(){
	$.get(pagesc + "/office/email/downloadMailState?rand" + new Date(),function(result){
		if(result.indexOf(":")==-1 || result=="0:0"){
			window.clearInterval(intervalProcess);
			$('#emailListPage').hideLoading();
			if(result.indexOf(":")==-1){
				$.dialog.alert(result);
			}
		}else{
			var totalStr = result.split(":");
			if(totalStr[1]!=totalStr[0]){
				var reg = /^[0-9]*[1-9][0-9]*$/;
				if(!reg.test(totalStr[0])){
					$(".notification").html(totalStr[0]);
				}else{
					$(".notification").html("总计："+ totalStr[0] +"，正收取：" + totalStr[1]);
					emailListPage(false);
				}
			}else{
				clearInterval(intervalProcess);
				$('#emailListPage').hideLoading();
				emailListPage(false);
			}
		};
	});
}
$("#getEmail").click(function(){
	checkmail($(this));
});
function checkmail(obj){
	if(!$(obj).attr("disabled")){
		$.get(pagesc + "/office/email/checkSetting?rand" + new Date(),function(result){
			if(result=="error"){
				$.dialog({
					icon: 'error',
	    			content: '您的邮箱参数设置不完整，请先设置邮箱smtp、pop3地址，帐户名与密码。'
				},function(){
					top.modify();
				});
			}else if(result=="astrict"){
				$.dialog.alert("此功能模块需要解除限制后方可使用。",function(){
					var detailDialog = top.art.dialog.open(pagesc + "/astrict/email",{
						title:	"解除限制",
						id:		"astrict_show_",
						lock:	true,
						width:	'780px',
						height:	'520px',
						cancelVal: '取消',
						cancel: true
					});
				});
			}else if(result=="success"){
				$.get(pagesc + "/office/email/downloadMail?rand" + new Date(),function(result){
					if(result=="error"){
						$.dialog({
							icon: 'error',
			    			content: '您的邮箱参数设置不完整，请先设置邮箱smtp、pop3地址，帐户名与密码。'
						},function(){
							top.modify();
						});
					}else if(result=="success"){
						checkDownloadMailState();
					}else{
						$.dialog.alert(result);
					}
				});
			}else{
				$.dialog.alert(result);
			}
		});
	}
};
$("#rubbishEmail").click(function(){
	if(!$(this).attr("disabled")){
		$.dialog.confirm('你确认此操作？', function(){
			var data = $("#emailListFrom").formToArray();
			$.post(pagesc + "/office/email/rubbish?rand=" + new Date(), data, function(result){
				if(result=="success"){
					$.dialog({
						icon: 'succeed',
		    			content: '恭喜您，操作成功！'
					},function(){
						var funstr = $("#emailListPage a[class='current']").attr("href").replace("javascript:","");
		        		eval(funstr);
					});
				}else{
					$.dialog.alert(result);
				}
			});
		});
	}
});
$("#deleteEmail").click(function(){
	if(!$(this).attr("disabled")){
		$.dialog.confirm('你确认要删除这些邮件吗？', function(){
			var data = $("#emailListFrom").formToArray();
			$.post(pagesc + "/office/email/delete/1?rand=" + new Date(), data, function(result){
				if(result=="success"){
					$.dialog({
						icon: 'succeed',
		    			content: '恭喜您，操作成功！'
					},function(){
						var funstr = $("#emailListPage a[class='current']").attr("href").replace("javascript:","");
		        		eval(funstr);
					});
				}else{
					$.dialog.alert(result);
				}
			});
		});
	}
});
$("#thoroughgoingDeleteEmail").click(function(){
	if(!$(this).attr("disabled")){
		$.dialog.confirm('你确认要彻底删除这些邮件吗？', function(){
			var data = $("#emailListFrom").formToArray();
			$.post(pagesc + "/office/email/delete/2?rand=" + new Date(), data, function(result){
				if(result=="success"){
					$.dialog({
						icon: 'succeed',
		    			content: '恭喜您，操作成功！'
					},function(){
						var funstr = $("#emailListPage a[class='current']").attr("href").replace("javascript:","");
		        		eval(funstr);
					});
				}else{
					$.dialog.alert(result);
				}
			});
		});
	}
});
$("#signEmailNotNew").click(function(){
	if(!$(this).attr("disabled")){
		$.dialog.confirm('你确认要将这些邮件标为已读吗？', function(){
			var data = $("#emailListFrom").formToArray();
			$.post(pagesc + "/office/email/read?rand=" + new Date(), data, function(result){
				if(result=="success"){
					$.dialog({
						icon: 'succeed',
		    			content: '恭喜您，操作成功！'
					},function(){
						var funstr = $("#emailListPage a[class='current']").attr("href").replace("javascript:","");
		        		eval(funstr);
					});
				}else{
					$.dialog.alert(result);
				}
			});
		});
	}
});
$("#keyword").keydown(function(event){
	if(event.keyCode==13){
		emailListPage(true);
		return false;
	}
});
$("#addNewEmailButton").click(function(){
	var btnObj = $(this);
	if(!$(this).attr("disabled")){
		$.get(pagesc + "/office/email/checkSetting?rand" + new Date(),function(result){
			if(result=="error"){
				$.dialog({
					icon: 'error',
	    			content: '您的邮箱参数设置不完整，请先设置邮箱smtp、pop3地址，帐户名与密码。'
				},function(){
					top.modify();
				});
			}else if(result=="astrict"){
				$.dialog.alert("此功能模块需要解除限制后方可使用。",function(){
					var detailDialog = top.art.dialog.open(pagesc + "/astrict/email",{
						title:	"解除限制",
						id:		"astrict_show_",
						lock:	true,
						width:	'780px',
						height:	'520px',
						cancelVal: '取消',
						cancel: true
					});
				});
			}else if(result=="success"){
				var dataType = btnObj.attr("dataType");
				var dataIds = btnObj.attr("dataIds");
				mailInput(dataType, dataIds);
			}else{
				$.dialog.alert(result);
			}
		});
	}
});
$("#searchFromBtn").click(function(){emailListPage(true);});
$(".submenu li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	$("#type").val($(this).attr("dataId"));
	emailListPage(true);
	var dataId = $(this).attr("dataId");
	if(dataId=="0"){
		$("#getEmail").removeAttr("disabled").css("color","#fff");
		$("#rubbishEmail").removeAttr("disabled").css("color","#333");
		$("#signEmailNotNew").removeAttr("disabled").css("color","#333");
		$("#deleteEmail").removeAttr("disabled").css("color","#333");
	}else if(dataId=="1"){
		$("#getEmail").attr("disabled","disabled").css("color","#ccc");
		$("#rubbishEmail").attr("disabled","disabled").css("color","#ccc");
		$("#signEmailNotNew").attr("disabled","disabled").css("color","#ccc");
		$("#deleteEmail").removeAttr("disabled").css("color","#333");
	}else if(dataId=="2"){
		$("#getEmail").attr("disabled","disabled").css("color","#ccc");
		$("#rubbishEmail").attr("disabled","disabled").css("color","#ccc");
		$("#signEmailNotNew").attr("disabled","disabled").css("color","#ccc");
		$("#deleteEmail").removeAttr("disabled").css("color","#333");
	}else if(dataId=="3"){
		$("#getEmail").attr("disabled","disabled").css("color","#ccc");
		$("#rubbishEmail").attr("disabled","disabled").css("color","#ccc");
		$("#signEmailNotNew").removeAttr("disabled").css("color","#333");
		$("#deleteEmail").removeAttr("disabled").css("color","#333");
	}else if(dataId=="4"){
		$("#getEmail").attr("disabled","disabled").css("color","#ccc");
		$("#rubbishEmail").attr("disabled","disabled").css("color","#ccc");
		$("#signEmailNotNew").attr("disabled","disabled").css("color","#ccc");
		$("#deleteEmail").attr("disabled","disabled").css("color","#ccc");
	}
});
function emailListPage(isLoading){
	if(isLoading){
		if($("#dataType")=="" && $("#dataType")==""){
			$('.maincontent').showLoading();
		}else{
			$('#emailListPage').showLoading();
		}
	}
	var data = $("#emailSearchFrom").formToArray();
	$.post(pagesc + "/office/email/listajax?rand=" + new Date(), data, function(result){
		$("#emailListPage").html(result);
		if(isLoading){
			if($("#dataType")=="" && $("#dataType")==""){
				$('.maincontent').hideLoading();
			}else{
				$('#emailListPage').hideLoading();
			}
		}
	});
};
function mailShow(id, title){
	var detailDialog = $.dialog.open(pagesc + "/office/email/show/" + id,{
		title:	title,
		id:		"email_show_" + id,
		lock:	false,
		width:	'780px',
		height:	'450px',
		cancelVal: '关闭',
		cancel: true
	});
	return false;
};
function mailEdit(id){
	var mydialog = $.dialog.open(pagesc + "/office/email/input?id="+ id +"&rand=" + new Date(),{
		title :	'编辑邮件',
		width : '900px',
		height:	'550px',
		id	:	"email_input",
		lock  :	false,
		cancelVal: '关闭',
		cancel: true
	});
}
function mailInput(dataType, dataIds){
	var mydialog = $.dialog.open(pagesc + "/office/email/input?dataType="+ dataType +"&dataIds="+ dataIds +"&rand=" + new Date(),{
		title :	'发送邮件',
		width : '900px',
		height:	'550px',
		id	:	"email_input",
		lock  :	false,
		cancelVal: '关闭',
		cancel: true
	});
}