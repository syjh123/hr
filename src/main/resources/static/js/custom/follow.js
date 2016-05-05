function getRootPath(){
    var curWwwPath=window.document.location.href;
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    var localhostPaht=curWwwPath.substring(0,pos);
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}
function initFollow(type,dataId,page){
	if(document.getElementById("followPageView")!=null && typeof(document.getElementById("followPageView"))=="object"){
		if(document.getElementById("followPageView").innerHTML==''){
			followPage(type,dataId,page);
		}
	}
}
function followPage(type,dataId,pages){
	if(document.getElementById("followPageView").innerHTML==''){
		document.getElementById("followPageView").innerHTML='<img src="/images/loading.gif" /> 正在获取数据，请稍候……';
	}
	$("#followPageView").load("/follow/list",{"type":type, "dataId":dataId, page:pages}); 
}

function initFollowInput(type, dataId){
	if(document.getElementById("followInputView")!=null && typeof(document.getElementById("followInputView"))=="object"){
		if(document.getElementById("followInputView").innerHTML==''){
			$.get("/follow/input/"+ type +"/"+ dataId +"?rand=" + new Date(), function(data){
				$("#followInputView").html(data);
				$("#followBtn").click(function(){
					if(document.getElementById("cmfoContent").value==''){
					  	alert('跟进内容不能为空。');
					  	document.getElementById("cmfoContent").focus();
					  	return false;
					}
					if($("#cmfoIsRemind").is(":checked")){
					  	if(document.getElementById("remindDate").value==''){
					  		alert('提醒时间必须选择。');
					  		document.getElementById("remindDate").click();
					  		return false;
					  	}
					}
					this.disabled = true;
					var queryString = $('#followFrm').formSerialize();
					var btn = this;
					$.post('/follow/save', queryString, function(data){
						followPage(document.getElementById("cmfoType").value,document.getElementById("cmfoDataId").value,0);
						$("#followFrm").resetForm();
						document.getElementById("followBtn").disabled = false;
					});
		            return false;
				});
			});
		}
	}
}