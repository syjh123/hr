function checkAll(obj, toObjName){
	if(obj.checked){
		$("input[name="+ toObjName +"]").attr("checked",true);
	}else{
		$("input[name="+ toObjName +"]").attr("checked",false);
	}
}

$("#customerSearchKeyword").keydown(function(event){
	if(event.keyCode==13){
		listpage();
		return false;
	}
});
$("#searchFromBtn").click(function(){listpage();});
$(".submenu li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	$("#customerState").val($(this).attr("dataId"));
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
$(".addNewButton, #newCustomer").click(function(){
	var mydialog = $.dialog.open("customer/input/0",{
		title:	"新增客户",
		width:	'650px',
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
	        					listpage();
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

$("#province").change(function(){
	if($(this).val()>0){
		$.get("city/asyncSelect/"+ $(this).val() +"?rand=" + new Date(), function(data){
			$("#city option").remove();
			$("#city").append(data);
			$("#city").css("display","");
		})
	}else{
		$("#city option").remove();
		$("#city").append("<option value=\"0\">请选择</option>");
		$("#city").css("display","none");
	}
});

$(".delete").click(function(){
	var _confirm = $.dialog.confirm('你确认要删除吗？', function(){
       	var data = $("#listFrom").formToArray();
      		$.post("customer/delete?rand="+new Date(), data, function(result){
      			if(result=='success'){
      				$.dialog.alert("恭喜您，操作成功！", function(){
      					listpage();
      					_confirm.close();
      				});
      			}else{
      				$.dialog.alert(result);
      				_confirm.close();
      			}
      		});
    	return false;
	});
    return false;
});

$(".recover").click(function(){
	var _confirm = $.dialog.confirm('你确认要恢复吗？', function(){
       	var data = $("#listFrom").formToArray();
      		$.post("customer/recover?rand="+new Date(), data, function(result){
      			if(result=='success'){
      				$.dialog.alert("恭喜您，操作成功！", function(){
      					listpage();
      					_confirm.close();
      				});
      			}else{
      				$.dialog.alert(result);
      				_confirm.close();
      			}
      		});
    	return false;
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