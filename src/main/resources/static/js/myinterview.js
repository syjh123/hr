	$(document).ready(function() {
		$("td button").click(function() {			
			var curType = $(".curType").val();
			var str_id = $(this).attr("id");
			var action = str_id.split(":")[0];
			var iv_id = str_id.split(":")[1];
			if (action == 'comment') {
					var tarId = "#comment" + iv_id;
					if (curType == "all") {
						var ensureBtn = $(".commentEnsure");
							ensureBtn.attr("disabled","true");
									ensureBtn.hide();
									console.log(ensureBtn.attr("id"));
					}
					if ($("#interviewcomment"+ iv_id).val() == "") {
								getComment(iv_id);
								console.log("eq")
								} else {
									console.log("nto eq "+ $("#interviewcomment"+ iv_id).val());
								}
					if ($(tarId).css("display") == "none") {
								hideAll(iv_id);
								$(tarId).show(100);
								return;
					} else {
						$(tarId).hide(100);
					}
			} else if(action == 'final_comment') {
				var tarId = "#final_comment" + iv_id;
				
				if($("#final_comment"+iv_id).val() == '') {
					getFinalComment(iv_id);
				}
				
				
				if ($(tarId).css("display") == "none") {
					hideAll(iv_id);
					$(tarId).show(100);
						return;
				} else {
						$(tarId).hide(100);
				}
			}
		});
		$(".commentEnsure").click(function() {

							var iv_id = $(this).attr("id");
							var content = $("#interviewcomment" + iv_id).val();
							
							var pass = $("#comment"+iv_id+" input:checked").val();
							if(pass==null) {
								alert("请选择是否面试通过");
								return;
							}
							var scoreArray = $("#comment"+iv_id+" div input");
							var scores = new Array();
							$.each(scoreArray,function(key,val){
								var item_id = $(val).attr("id");
								var item_val = $(val).val();
								var item = new Map();
								item['item_id'] = item_id;
								item['score'] = item_val;
								scores[scores.length] = item;
							}) ;
							commitComment(iv_id, content,pass,JSON.stringify(scores));
							
							$("#comment" + iv_id).hide();
		});
		
		$(".finalCmtBtn").click(function(){
			var iv_id = $(this).attr("id");
			var pass = $("input:radio[name='final_pass"+iv_id+"']:checked");
			if(pass==null) {
				alert("请选择是否通过");
				return;
			}
			pass = pass.val();
			var cmt = $("#final_cmt_content"+iv_id).val();
			console.log("pass is "+pass+" cmt is "+cmt);
			commitFinalCmt(pass,cmt,iv_id);
		})
		
		});
	
	function hideAll(iv_id) {
		$(".hiddenitem"+iv_id).hide(100);
	}

	function commitFinalCmt(pass,content,iv_id) {
		var success = function(json){
			warninghide("commit success",0,1000);
		}
		var failed = function(xhr,status,thrown){
			console.log(xhr);
			console.log(status);
			console.log(thrown);
			warninghide("commit failed",1,1000);
		}
		var url = "/commitFinalCmt";
		var data = {
				pass:pass,
				cmt:content,
				interview_id :iv_id
		};
		doAjax(url,data,success,failed);
		$("#final_comment"+iv_id).hide(100);
	}
	
	
	function getFinalComment(iv_id) {
		$.ajax({
			url : "/getFinalComment",
			data : {
				interview_id:iv_id
			},
			type : "POST",
			dataType : "json",
			success : function(json) {
				var tarDiv = "#final_comment"+iv_id;
				if(json.nickname!=null) {
				  $(tarDiv+" p").html("面试最终结果已经由"+json.nickname+"提交上传").slideDown("fast");
				}
				if(json.pass!=null) {
					var passStr = json.pass==0?"false":"true";
					$(tarDiv+" [value='"+passStr+"']").attr("checked","true");
				}
				if(json.comment!=null) {
					$(tarDiv+" textarea").text(json.comment);
				}
			},
			
		})
	}
	
	function commitComment(interview_id, content, pass, scores) {
		$.ajax({			
			url : "/commitComment",
			data : {
				interview_id : interview_id,  
				content : content,
				pass :pass,
				scores : scores
			},
			type : "POST",
			dataType : "json",
			success : function(json) {
				$("#comment" + interview_id).hide(100);
				warninghide("success", 0, 1000);
			},
			error : function() {
				warninghide("commit failed, Sorry", 1, 1000);
			}

		})
	}

	function getComment(interview_id) {
		$.ajax({
			url : "/getComment",
			data : {
				interview_id : interview_id
			},
			type : "POST",
			dataType : "json",
			success : function(json) {
				console.log(json);
				var ips = $("#comment"+interview_id+" div input");
				
				$.each(ips,function(key,val){
					var item_id =  $(val).attr('id');
					$(val).val(json['score'+item_id]);
				});
				console.log(json.pass);
				var passStr = json.pass=='1' ? "true":"false";
				$("#comment"+interview_id+" input:radio[value='"+passStr+"']").attr("checked","checked");
				
				$("#interviewcomment" + interview_id).val(json.comment);
				console.log("json is ");
				console.log(json);

			},
			error : function() {

			}
		});
	}