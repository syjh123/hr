function showMessageNum(num){
	if(num=="0"){
		$("#msgNum").text(0);
		$("#msgNum").css("display","none");
	}else{
		$("#msgNum").text(num);
		$("#msgNum").css("display","block");
	}
}

function clearMessageNum(){
	var msgNum = $("#msgNum").text();
	if(Number(msgNum)-1==0){
		$("#msgNum").css("display","none");
	}
	$("#msgNum").text(Number(msgNum)-1);
}

function showUserNum(num){
	if(num=="0"){
		$("#userNum").text(0);
		$("#userNum").css("display","none");
	}else{
		$("#userNum").text(num);
		$("#userNum").css("display","block");
		var t = $(".friendnotify .wrap").parent();
		var url = t.attr('href');
		if(t.hasClass('showmsg')) {
			$.get(url+"?rand="+new Date(),function(data){
				$('.dropbox').html("<div style='height:320px;OVERFLOW-Y:auto;'>"+ data +"</div>");
			});
		}
	}
}