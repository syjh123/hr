$("#projectExcavateSearchKeyword").keydown(function(event){
	if(event.keyCode==13){
		listpage();
		return false;
	}
});
$("#projectExcavateSearchFromBtn").click(function(){listpage();});
$(".submenu li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	$("#difficulty").val($(this).attr("dataId"));
	listpage();
});
$("#addNewExcavate").click(function(){
	var projectId = $(this).attr("projectId");
	var prexId = $(this).attr("prexId");
	var mydialog = $.dialog.open("project/excavate/input/"+ prexId +"?projectId=" + projectId,{
		title:	"新增寻猎公司",
		width:	'600px',
		height:	'380px',
		ok: function () {
			var iframe = this.iframe.contentWindow;
	    	if (!iframe.document.body) {
	        	alert("对不起，数据还在加载中.");
	        	return false;
	        };
	        var frm = iframe.document.getElementById("frm");
	        
	        if(check(frm.prexCompanyName) && iselect(frm.prexDifficulty)){
	        	var _confirm = $.dialog.confirm('你确认资料正确吗？', function(){
		        	var data = $(frm).formToArray();
	        		$.post("../excavate/save?rand="+new Date(), data, function(result){
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
	        }
			return false;
		},
		cancelVal: '关闭',
		cancel: true
	});
	
	return false;
});

function projectExcavateDetail(title, prexId){
	var detailDialog = $.dialog.open("project/excavate/show/" + prexId,{
		title:	title,
		id:		"project_excavate_" + prexId,
		lock:	false,
		width:	'850px',
		height:	'500px'
	});
	return false;
}