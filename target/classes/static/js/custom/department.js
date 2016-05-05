var setting = {
	async: {
		enable: true,
		url:"setting/department/async",
		otherParam:{"rand":new Date()}
	},
	view: {
		expandSpeed: "slow",
		addHoverDom: addHoverDom,
		removeHoverDom: removeHoverDom,
		selectedMulti: false
	},
	edit: {
		enable: true,
		editNameSelectAll: true,
		removeTitle: "删除",
		renameTitle: "编辑",
		drag: {
			isCopy: false,
			isMove: false
		}
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {
		beforeRemove: beforeRemove,
		beforeRename: beforeRename,
		beforeDrop: moveDep
	}
};

function moveDep(treeId, treeNodes, targetNode, moveType) {
	if(!(targetNode == null || (moveType != "inner" && !targetNode.parentTId))){
		//alert(treeNodes[0].name);
		alert(moveType);
		return false;
	}else{
		return false;
	}
}

function beforeRemove(treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("department");
	zTree.selectNode(treeNode);
	if(window.confirm("你确认要删除部门["+ treeNode.name +"]吗？")){
		var allowDel = false;
		$.ajax({
			type:"POST",
			async:false,
			url:"setting/department/delete/"+ treeNode.id +"?rand=" + new Date(),
			success:function(result){
				if(result.length<10){
					allowDel = true;
				}else{
					$.dialog.alert(result);
				}
			}
		});
		return allowDel;
	}else{
		return false;
	}
}		
function beforeRename(treeId, treeNode, newName) {
	if (newName.length == 0) {
		$.dialog.alert("部门名称不能为空.");
		return false;
	}
	$.post("setting/department/save?rand=" + new Date(), {depId:treeNode.id, depName:newName, parentId:0}, function(result){
		if(result.length<10){
			return true;
		}else{
			$.dialog.alert(result);
			return false;
		}
	});
}

function addHoverDom(treeId, treeNode) {
	var sObj = $("#" + treeNode.tId + "_span");
	if ($("#addBtn_"+treeNode.id).length>0 || treeNode.id==2) return;
	var addStr = "<button type='button' class='addbtn' id='addBtn_" + treeNode.id + "' title='新增子部门' onfocus='this.blur();'></button>";
	sObj.append(addStr);
	var btn = $("#addBtn_"+treeNode.id);
	if (btn) btn.bind("click", function(){
		var zTree = $.fn.zTree.getZTreeObj("department");
		$.dialog.prompt('请输入您新增的部门名称', function(data){
			if(data==""){
				$.dialog.alert("请输入您新增的部门名称");
				return false;
			}
			$.post("setting/department/save?rand=" + new Date(), {depId:0, depName:data, parentId:treeNode.id}, function(result){
				if(result.length<10){
					zTree.addNodes(treeNode, {id:result, pId:treeNode.id, name:data});
				}else{
					$.dialog.alert(result);
				}
			});
		});
	});
};
function removeHoverDom(treeId, treeNode) {
	$("#addBtn_"+treeNode.id).unbind().remove();
};

$.fn.zTree.init($("#department"), setting);