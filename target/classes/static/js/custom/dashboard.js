function customerDetail(cutaName, cutaId){
	var detailDialog = parent.$.dialog.open("customer/show/" + cutaId,{
		title:	cutaName,
		id:		"customer_" + cutaId,
		lock:	false,
		fixed: true,
		width:	'960px',
		height:	'540px'
	});
	return false;
}

function projectDetail(prtaName, prtaId){
	var detailDialog = parent.$.dialog.open("project/show/" + prtaId,{
		title:	prtaName,
		id:		"project_" + prtaId,
		lock:	false,
		fixed: true,
		width:	'920px',
		height:	'510px'
	});
	return false;
}

function offerDetail(t, id){
	var detailDialog = parent.$.dialog.open("offer/show/" + id,{
		title:	t,
		id:		"offer_" + id,
		lock:	false,
		fixed: true,
		width:	'860px',
		height:	'500px'
	});
	return false;
}

function projectReportDetail(t, id){
	var detailDialog = $.dialog.open("project/report/show/" + id,{
		title:	t,
		id:		"project_report_" + id,
		lock:	false,
		fixed: true,
		width:	'860px',
		height:	'500px'
	});
	return false;
}

function noticeManager(){
	$.dialog.open("office/notice/main",{
		title:	"公告&通知管理",
		id:		"notice_manager",
		lock:	false,
		fixed: true,
		width:	'860px',
		height:	'500px'
	});
}

function noticeDetail(t, id){
	var detailDialog = $.dialog.open("office/notice/show/" + id,{
		title:	t,
		id:		"notice_show_" + id,
		lock:	false,
		width:	'560px',
		height:	'380px',
		cancelVal: '关闭',
		cancel: true
	});
	return false;
}

$(function(){
	$("#newCustomer").click(function(){
		var mydialog = $.dialog.open("customer/input/0",{
			title:	"新增客户",
			width:	'650px',
			fixed: true,
			height:	'500px',
			ok: function () {
				var iframe = this.iframe.contentWindow;
		    	if (!iframe.document.body) {
		        	$.dialog.alert("对不起，数据还在加载中.");
		        	return false;
		        };
		        var frm = iframe.document.getElementById("frm");
		        if(check(frm.cutaShortName)){
		        	if(frm.cutaId.value==0 && frm.isSearch.value==0){
		        		iframe.document.getElementById("searchCompany").click();
		        		return false;
		        	}
		        	if(frm.cutaId.value==0 && frm.isSearch.value==-1){
		        		$.dialog.alert("对不起，存在关键字重复的企业，请更换关键字.");
		        		return false;
		        	}
		        }
		        if(check(frm.cutaShortName) && check(frm.cutaName) && iselect(frm.cutaProvince) && iselect(frm.cutaCity) && iselect(frm.cutaFunnel) && iselect(frm.cutaType) && iselect(frm.cutaIndustry) && iselect(frm.cutaImportant) && check(frm.cucoName) && iselect(frm.cucoSex) && check(frm.cucoOfficeTel) ){
		        	var _confirm = $.dialog.confirm('你确认资料正确吗？', function(){
			        	var data = $(frm).formToArray();
		        		$.post("customer/create?rand="+new Date(), data, function(result){
		        			if(result=='success'){
		        				$.dialog.alert("恭喜您，操作成功！", function(){
		        					$('#customerLink').click();
		        					mydialog.close();
		        					_confirm.close();
		        				});
		        			}else{
		        				$.dialog.alert(result);
		        				_confirm.close();
		        			}
		        		})
				    	return false;
					});
		        	return false;
		        }
				return false;
			},
			cancelVal: '关闭',
			cancel: true
		});
		
		return false;
	});
	$("#newProject").click(function(){
		var mydialog = $.dialog.open("project/input/0",{
			title:	"新增项目",
			fixed: true,
			width:	'700px',
			height:	'480px',
			ok: function () {
				var iframe = this.iframe.contentWindow;
		    	if (!iframe.document.body) {
		        	alert("对不起，数据还在加载中.");
		        	return false;
		        };
		        var frm = iframe.document.getElementById("frm");
		        
		        if(check(frm.prtaName) && iselect(frm.prtaFunnel) && iselect(frm.prtaState)){
		        
		        	if(frm.prtaCustId.value=='0'){
		        		alert("请选择客户。");
		        		return false;
		        	}
		        	
		        	if(!iselect(frm.prtaLevel) || !iselect(frm.prtaType)){
		        		return false;
		        	}
		        	
		        	if(frm.prtaPositionNum.value=='0' || frm.prtaPositionNum.value==''){
		        		alert("招聘人数必须大于0");
		        		frm.prtaPositionNum.value=''
		        		frm.prtaPositionNum.focus();
		        		return false;
		        	}
		        	
		        	if(!iframe.chkDescription()){
		        		return false;
		        	}
		        	
		        	var _confirm = $.dialog.confirm('你确认资料正确吗？', function(){
			        	var data = $(frm).formToArray();
		        		$.post(getContextPath() + "project/save?rand="+new Date(), data, function(result){
		        			if(result=='success'){
		        				$.dialog.alert("恭喜您，操作成功！", function(){
		        					$('#projectLink').click();
		        					mydialog.close();
		        					_confirm.close();
		        				});
		        			}else{
		        				$.dialog.alert(result);
		        				_confirm.close();
		        			}
		        		})
				    	return false;
					});
		        }
				return false;
			},
			cancelVal: '关闭',
			cancel: true
		});
		
		return false;
	});
	$("#uploadResume").click(function(){
		var mydialog = $.dialog.open("resume/upload?pjId=0",{
			title :	"上传简历",
			width : '400px',
			fixed: true,
			height:	'450px',
			id	  : 'resumeupload',
			lock  :	false
		});
	});
	$("#userSuggest").click(function(){
		var mydialog = $.dialog.open("club/suggest/list",{
			title :	"意见建议",
			width : '850px',
			fixed: true,
			height:	'450px',
			id	  : 'userSuggestDiv',
			lock  :	false
		});
	});
});