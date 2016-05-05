function YY_select(yys_args){
	this.data=yys_args.data;				//数据集合										必填
	this.showLevel=yys_args.showLevel;		//显示多少级分类，即多少个select						可选
	this.divId=yys_args.divId;				//html中用于显示select的容器id						必填
	this.showId=yys_args.showId;			//select中的初始值 								可选
	this.selectNames=yys_args.selectNames;	//select的name值，格式如：["col1","col2","col3"] 	可选
	this.selectLabels=yys_args.selectLabels;	//select的label值，格式如：["选择省","选择市","选择区"] 	可选
	this.levelById=0;
	this.fatherIdsById=new Array();
	this.initData();
	this.createSelect();
}
YY_select.prototype.initData=function(){
	if(typeof(this.showLevel)=='undefined' || this.showLevel>this.data.length){
		this.showLevel=this.data.length;
	}
	if(typeof(this.showId)!='undefined'){
		for(var i=0;i<this.data.length;i++){
			for(var j=0;j<this.data[i].length;j++){
				if(this.showId==this.data[i][j].id){
					this.levelById=i;
					break;
				}
			}
		}
	}
	if(this.levelById!=0){
		var tmpshow=this.showId;
		for(var i=this.levelById;i>=0;i--){
			for(var x=0;x<this.data.length;x++){
				for(var y=0;y<this.data[x].length;y++){
					if(tmpshow==this.data[x][y].id){
						this.fatherIdsById[i]=this.data[x][y].id;
						tmpshow=this.data[x][y].pid;
					}
				}
			}
		}
	}
	if(typeof(this.selectNames)=='undefined' || this.showLevel!=this.selectNames.length){
		var sns=new Array();
		var randomnum=Math.floor(Math.random()*1000+1);
		for(var i=0;i<this.showLevel;i++){
			if(typeof(this.selectNames)=='undefined' || i<this.showLevel-this.selectNames.length){
				sns[i]="yyselect"+randomnum+i;
			}else{
				sns[i]=this.selectNames[this.selectNames.length+i-this.showLevel];
			}
		}
		this.selectNames=sns;
	}
	if(typeof(this.selectLabels)=='undefined' || this.showLevel!=this.selectLabels.length){
		var sns=new Array();
		for(var i=0;i<this.showLevel;i++){
			if(typeof(this.selectLabels)=='undefined' || i<this.showLevel-this.selectLabels.length){
				sns[i]="请选择分类";
			}else{
				sns[i]=this.selectLabels[this.selectLabels.length+i-this.showLevel];
			}
		}
		this.selectLabels=sns;
	}
}
YY_select.prototype.createSelect=function(){
	var result="";
	for(var i=0;i<this.selectNames.length;i++){
		result+="<select name='"+this.selectNames[i]+"' id='"+this.selectNames[i]+"'></select>";
	}
	$("#"+this.divId).html(result);
	this.initSelect();
}
YY_select.prototype.initSelect=function(){
	$("<option value=0>"+this.selectLabels[0]+"</option>").appendTo($("#"+this.selectNames[0]));
	if(this.fatherIdsById.length>0){
		for(var i=0;i<this.fatherIdsById.length;i++){
			var sameFatherid;
			for(var j=0;j<this.data[i].length;j++){
				if(this.fatherIdsById[i]==this.data[i][j].id){
					sameFatherid=this.data[i][j].pid;
				}
			}
			for(var j=0;j<this.data[i].length;j++){
				if(sameFatherid==this.data[i][j].pid){
					var obj=$("#"+this.selectNames[i]);
					var result="<option value='"+this.data[i][j].id+"'";
					if(this.fatherIdsById[i]==this.data[i][j].id){
						result+=" selected";
					}
					$(result+">"+this.data[i][j].name+"</option>").appendTo(obj);
				}
			}
		}
		
		/*var obj=$("#"+this.selectNames[this.fatherIdsById.length-1]);
		obj.empty();
		$("<option value=0>"+this.selectLabels[this.fatherIdsById.length-1]+"</option>").appendTo(obj);
		for(var i=0;i<this.data[this.fatherIdsById.length-1].length;i++){
			if(this.showId==this.data[this.fatherIdsById.length-1][i].pid){
				$("<option value='"+this.data[this.fatherIdsById.length-1][i].id+"'>"+this.data[this.fatherIdsById.length-1][i].name+"</option>").appendTo(obj);
			}
		}*/
		/*for(var i=this.fatherIdsById.length+1;i<this.selectNames.length;i++){
			alert(111);
			var obj=$("#"+this.selectNames[i]);
			obj.empty();
			$("<option value=0>"+this.selectLabels[i]+"</option>").appendTo(obj);
		}*/
	}else{
		for(var i=0;i<this.data[0].length;i++){
			$("<option value='"+this.data[0][i].id+"'>"+this.data[0][i].name+"</option>").appendTo($("#"+this.selectNames[0]));
		}
		for(var i=1;i<this.selectNames.length;i++){
			var obj=$("#"+this.selectNames[i]);
			obj.empty();
			$("<option value=0>"+this.selectLabels[i]+"</option>").appendTo(obj);
		}
	}
	for(var i=0;i<this.selectNames.length;i++){
		$("#"+this.selectNames[i]).change(function(){
			var isStart=false;
			var isChild=false;
			for(var j=0;j<YY_select.selectNames.length;j++){
				if(isStart){
					var obj=$("#"+YY_select.selectNames[j]);
					obj.empty();
					$("<option value=0>"+YY_select.selectLabels[j]+"</option>").appendTo(obj);
					if((isChild && this.value!=0)){
						for(var k=0;k<YY_select.data[j].length;k++){
							if(this.value==YY_select.data[j][k].pid){
								$("<option value='"+YY_select.data[j][k].id+"'>"+YY_select.data[j][k].name+"</option>").appendTo(obj);
							}
						}
						isChild=false;
					}
				}
				if(this.id==YY_select.selectNames[j]){
					isStart=true;
					isChild=true;
				}
			}
		})
	}
}