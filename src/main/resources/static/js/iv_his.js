$(document).ready(function(){
	
	$("#interviews li").click(function(){
		var this_id = $(this).attr("id");
		var iv_id = $("#"+this_id+" + input").val();
		var cid = $(this).attr("id");
		
		
		var tarDiv = $("#comment"+cid);
		if(tarDiv.css("display")=='none') {
			tarDiv.parent().children().hide(100);
			tarDiv.show(100);
		} else {
			tarDiv.hide(100);
		}
			
	});
	
})