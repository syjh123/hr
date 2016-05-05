function getContextPath() {
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0,index+1);
	if(result!=""){
		result = "../../";
	}
	return result;
}
function checkAll(obj, toObjName){
	if(obj.checked){
		$("input[name="+ toObjName +"]").attr("checked",true);
	}else{
		$("input[name="+ toObjName +"]").attr("checked",false);
	}
}

$("#projectSearchKeyword").keydown(function(event){
	if(event.keyCode==13){
		listpage();
		return false;
	}
});
$("#searchFromBtn").click(function(){listpage();});
$(".submenu li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	$("#projectState").val($(this).attr("dataId"));
	$("#searchFrom")[0].reset();
	listpage();
	if($(this).attr("dataId")=="-1"){
		$(".recover").css("display","");
		$(".delete").css("display","none");
	}else{
		$(".recover").css("display","none");
		$(".delete").css("display","");
	}
});
$(".addNewButton").click(function(){
	var custId = $(this).attr("custId");
	var mydialog = $.dialog.open("project/input/0?custId=" + custId,{
		title:	"新增项目",
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
	        					if(custId=="0"){
	        						listpage();
	        					}else{
	        						$(".reloadButton").click();
	        					}
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

function customerDetail(cutaName, cutaId){
	var detailDialog = $.dialog.open("customer/show/" + cutaId,{
		title:	cutaName,
		id:		"customer_" + cutaId,
		lock:	false,
		width:	'960px',
		height:	'540px'
	});
	return false;
}

function projectDetail(prtaName, prtaId){
	var detailDialog = $.dialog.open("project/show/" + prtaId,{
		title:	prtaName,
		id:		"project_" + prtaId,
		lock:	false,
		width:	'920px',
		height:	'510px'
	});
	return false;
}