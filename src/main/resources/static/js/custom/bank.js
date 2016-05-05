function editBank(id){
	var mydialog = $.dialog.open("setting/bank/input/"+id,{
		title :	'银行设置',
		width : '350px',
		height:	'200px',
		id	:	"bank_" + id,
		lock  :	false,
		cancelVal: '关闭',
		cancel: true,
		ok	:function () {
			var iframe = this.iframe.contentWindow;
	    	if (!iframe.document.body) {
	        	alert("对不起，数据还在加载中.");
	        	return false;
	        };
	        var frm = iframe.document.getElementById("frm");
	        if(check(frm.pabaName)==false || check(frm.pabaNo)==false || check(frm.pabaUserName)==false || check(frm.pabaAddress)==false){
	        	return false;
	        }
	        var data = $(frm).formToArray();
    		$.post("setting/bank/save?rand="+new Date(), data, function(result){
    			if(result=='success'){
    				$.dialog.alert("恭喜您，操作成功！", function(){
						listpage();
    					mydialog.close();
    				});
    			}else{
    				$.dialog.alert(result);
    			}
    		});
    		return false;
		}
	});
}