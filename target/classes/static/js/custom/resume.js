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


function myApplyListPage(){
	$('.maincontent').showLoading();
	var data = $("#searchFrom").formToArray();
	$.post("resume/apply/myapplylistajax?rand=" + new Date(), data, function(result){
		$("#listpage").html(result);
		$('.maincontent').hideLoading();
	});
}

function applyListPage(){
	$('.maincontent').showLoading();
	var data = $("#searchFrom").formToArray();
	$.post("resume/apply/applylistajax?rand=" + new Date(), data, function(result){
		$("#listpage").html(result);
		$('.maincontent').hideLoading();
	});
}

$("#resumeSearchKeyword").keydown(function(event){
	if(event.keyCode==13){
		var searchType = $("#resumeType").val();
		if(searchType=="10000000000000"){
			myApplyListPage();
		}else if(searchType=="10000000000001"){
			applyListPage();
		}else{
			listpage();
		}
		return false;
	}
});
$("#searchFromBtn").click(function(){
	var searchType = $("#resumeType").val();
	if(searchType=="10000000000000"){
		myApplyListPage();
	}else if(searchType=="10000000000001"){
		applyListPage();
	}else{
		listpage();
	}
});
$(".submenu li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	var dataId = $(this).attr("dataId");
	if(document.getElementById("projectResumeSearchFrom")!=null && typeof(document.getElementById("projectResumeSearchFrom"))=="object"){
		$("#projectResumeSearchFrom")[0].reset();
	}else{
		$("#searchFrom")[0].reset();
	}
	if(dataId>1000000000000){
		$("#resumeType").val(dataId);
		if(dataId==10000000000000){
			myApplyListPage();
		}else{
			applyListPage();
		}
	}else{
		$("#prtype").val(dataId);
		$("#resumeType").val(dataId);
		listpage();
		if($(this).attr("dataId")=="-1"){
			$(".recover").css("display","");
			$(".delete").css("display","none");
		}else{
			$(".recover").css("display","none");
			$(".delete").css("display","");
		}
	}
});
$("#uploadButton").click(function(){
	var pjId=$(this).attr("dataId");
	var mydialog = $.dialog.open("resume/upload?pjId="+pjId,{
		title :	"上传简历",
		width : '600px',
		height:	'450px',
		id	  : 'resumeupload',
		lock  :	false
	});
});
$("#addNewButton").click(function(){
	var pjId=$(this).attr("dataId");
	editForm(0,"新增简历",pjId,0,"");
});
$("#projectResumeSearchButton").click(function(){
	var pjId=$(this).attr("dataId");
	$.dialog.open("projectResume/selectlist/"+pjId,{
		title	:	"选择候选人",
		width	:	'960px',
		height	:	'450px',
		lock	:	true
	})
});
function changestate(id,isRealDelete){
	var msg="你确定要执行本操作吗？";
	if(isRealDelete){
		msg="此操作不可恢复，你确定要继续吗？";
	}
	$.dialog.confirm(msg,function(){
		$.get("resume/changestate/"+id+"?rand=" + new Date(),function(result){
			if(result=='success'){
				$.dialog.alert("恭喜您，操作成功！", function(){
					listpage();
					//mydialog.close();
				});
			}else{
				$.dialog.alert(result);
			}
		});
	});
}
function perfect(id,hasErr,swfId){
	editForm(id,"完善简历","0",hasErr,swfId);
}
function edit(id,hasErr,freshWindow){
	editForm(id,"修改简历","",hasErr,"",freshWindow);
}

function pjshow(id,resumeId,title,projectId){
	var mydialog = $.dialog.open("resume/show/"+resumeId,{
		title :	title+'简历详情',
		width : '850px',
		height:	'500px',
		id	:	"resume_show_" + resumeId,
		lock  :	false,
		cancelVal: '关闭',
		cancel: true,
		button:[{
			name: '生成报告',
			callback: function () {
                var mydialog = $.dialog.open("project/report/input/0?projectId="+ projectId +"&prreId=" + id,{
					title:	"生成报告",
					width:	'600px',
					height:	'380px',
					ok: function () {
						var iframe = this.iframe.contentWindow;
				    	if (!iframe.document.body) {
				        	alert("对不起，数据还在加载中.");
				        	return false;
				        };
				        var frm = iframe.document.getElementById("frm");
				        
				        if(frm.rerePrreId.value=="0"){
				        	alert("请选择候选人...");
				        	frm.selectResumeBtn.click();
				        	return false;
				        }
				        
				        if(frm.rereCurrentCity.value==""){
				        	alert("请填写候选人目前所有地");
				        	frm.rereCurrentCity.focus();
				        	return false;
				        }
				        
			        	if(frm.rereAccessory.value==""){
			        		alert("请上传原始报告附件.");
			        		return false;
			        	}
			        	
			        	var _confirm = $.dialog.confirm('你确认资料正确吗？', function(){
				        	var data = $(frm).formToArray();
			        		$.post("../report/save?rand="+new Date(), data, function(result){
			        			if(result=='success'){
			        				$.dialog.alert("恭喜您，操作成功！", function(){
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
					},
					cancelVal: '关闭',
					cancel: true
				});
				return false;
            }
		}
		]
	});
}

function pjshowEdit(id,resumeId,title,projectId){
	var mydialog = $.dialog.open("resume/show/"+resumeId,{
		title :	title+'简历详情',
		width : '850px',
		height:	'500px',
		id	:	"resume_show_" + resumeId,
		lock  :	false,
		cancelVal: '关闭',
		cancel: true,
		button:[{
			name: '生成报告',
			callback: function () {
                var mydialog = $.dialog.open("project/report/input/0?projectId="+ projectId +"&prreId=" + id,{
					title:	"生成报告",
					width:	'600px',
					height:	'380px',
					ok: function () {
						var iframe = this.iframe.contentWindow;
				    	if (!iframe.document.body) {
				        	alert("对不起，数据还在加载中.");
				        	return false;
				        };
				        var frm = iframe.document.getElementById("frm");
				        
				        if(frm.rerePrreId.value=="0"){
				        	alert("请选择候选人...");
				        	frm.selectResumeBtn.click();
				        	return false;
				        }
				        
				        if(frm.rereCurrentCity.value==""){
				        	alert("请填写候选人目前所有地");
				        	frm.rereCurrentCity.focus();
				        	return false;
				        }
				        
			        	if(frm.rereAccessory.value==""){
			        		alert("请上传原始报告附件.");
			        		return false;
			        	}
			        	
			        	var _confirm = $.dialog.confirm('你确认资料正确吗？', function(){
				        	var data = $(frm).formToArray();
			        		$.post("../report/save?rand="+new Date(), data, function(result){
			        			if(result=='success'){
			        				$.dialog.alert("恭喜您，操作成功！", function(){
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
					},
					cancelVal: '关闭',
					cancel: true
				});
				return false;
            }
		},
		{
			name:"编辑简历",
			callback: function () {
				var freshWindow = this.iframe.contentWindow;
				edit(resumeId,0,freshWindow);
				return false;
			}
		}
		]
	});
}

function show(id,title){
	var mydialog = $.dialog.open("resume/show/"+id,{
		title :	title+'简历详情',
		width : '850px',
		height:	'500px',
		id	:	"resume_show_" + id,
		lock  :	false,
		cancelVal: '关闭',
		cancel: true
	});
}

function showEdit(id,title){
	var mydialog = $.dialog.open("resume/show/"+id,{
		title :	title+'简历详情',
		width : '850px',
		height:	'500px',
		id	:	"resume_show_" + id,
		lock  :	false,
		button:[
		{
			name:"编辑简历",
			callback: function () {
				var freshWindow = this.iframe.contentWindow;
				edit(id,0,freshWindow);
				return false;
			},
			focus:true
		}
		],
		cancelVal: '关闭',
		cancel: true
	});
}

function editForm(id,title,pjId,hasErr,swfId,freshWindow){
	var btnName="保存";
	if(hasErr==1){
		btnName="保存到我的简历库";
	}
	var mydialog = $.dialog.open("resume/input/"+id+"?pjId="+pjId,{
		title :	title,
		width : '850px',
		height:	'500px',
		lock  :	true,
		button:[
		{
			name:btnName,
			callback: function () {
				var iframe = this.iframe.contentWindow;
		    	if (!iframe.document.body) {
		        	alert("对不起，数据还在加载中.");
		        	return false;
		        };
		        var frm = iframe.document.getElementById("frm");
		        if(check(frm.resuName) && iselect(frm.resuSex) && iselect(frm.resuEducation)){
		        	if(!iframe.chkContent()){
		        		return false;
		        	}
		        	var data = $(frm).formToArray();
	        		$.post(getContextPath() + "resume/save?rand="+new Date(), data, function(result){
	        			if(result=='success'){
	        				$.dialog.alert("恭喜您，操作成功！", function(){
	        					if(pjId=="0"){
	        						if(swfId!=""){
	        							$('#file_upload_1').uploadify('cancel', swfId);
	        						}
	        						var win = $.dialog.open.origin;
		        					win.listpage();
		        				}else if(pjId>0){
		        					listpage();
		        				}else if(typeof(freshWindow)!='undefined'){
		        					freshWindow.location.reload();
	        					}else{
	        						var funstr = $("#listpage a[class='current']").attr("href").replace("javascript:","");
		        					eval(funstr);
	        					}
	        					mydialog.close();
	        				});
	        			}else{
	        				$.dialog.alert(result);
	        			}
	        		})
		        }
				return false;
			},
			focus:true
		}
		],
		cancelVal: '关闭',
		cancel: true
	});
}
function select(pjId,reId,name){
	$.dialog.confirm("你确定要选择候选人【 "+name+" 】吗？",function(){
		$.get("../select/"+pjId+"/"+reId+"?rand=" + new Date(),function(result){
			if(result=='success'){
				$.dialog.alert("恭喜您，添加成功！");
			}else{
				$.dialog.alert(result);
			}
		});
	});
}
function changetype(prId,objSel){
	$.dialog.confirm("你确定改变该候选人的状态吗？",function(){
		$.get("../../projectResume/changetype/"+prId+"/"+$(objSel).val()+"?rand=" + new Date(),function(result){
			if(result=='success'){
				$.dialog.alert("恭喜您，修改成功！", function(){
					var funstr = $("#projectResumePage a[class='current']").attr("href").replace("javascript:","");
		        	eval(funstr);
				});
			}else{
				$.dialog.alert(result);
			}
		});
	},function(){
		$(objSel).find("option[value='"+$(objSel).attr("origin")+"']").attr("selected",true);
	});
}