function modify(){
	var mydialog = $.dialog.open("usermodify",{
		title:	"我的信息",
		width:	'580px',
		height:	'480px',
		ok: function () {
			var iframe = this.iframe.contentWindow;
	    	if (!iframe.document.body) {
	        	$.dialog.alert("对不起，数据还在加载中.");
	        	return false;
	        };
	        var frm = iframe.document.getElementById("frm");
	        if(frm.editPwd.checked){
	        	if(frm.oldpassword.value==''){
					$.dialog.alert("旧密码必须填写");
					frm.oldpassword.focus();
					return false;
	        	}
	        	if(frm.newPassword.value==''){
					$.dialog.alert("新密码必须填写");
					frm.newPassword.focus();
					return false;
	        	}
	        	if(frm.newPassword.value!=frm.newRePassword.value){
					$.dialog.alert("两个新密码不一致");
					frm.newRePassword.focus();
					return false;
	        	}
	        }
	        $.dialog.confirm('你确认资料正确吗？', function(){
	        	var data = $(frm).formToArray();
        		$.post("saveusermodify?rand="+new Date(), data, function(result){
        			if(result=='success'){
        				$.dialog.alert("恭喜您，操作成功！", function(){
        					mydialog.close();
        				});
        			}else{
        				$.dialog.alert(result);
        			}
        		})
			});
			return false;
		},
		cancelVal: '关闭',
		cancel: true
	});
}