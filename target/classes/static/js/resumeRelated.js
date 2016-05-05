function submitfile() {
	if($("#channel_id").val() == -1){
		alert("请选择一个渠道！");
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST','/upload',true);
	var formData = new FormData();
	
	console.log( "----------"+$("#file").get(0).files[0]+"---------------")
	if($("#file").get(0).value == null || $("#file").get(0).value == ""){
		alert("选择要上传的文件");
		return;
	}
	
	
	
	
	
	var filename = GetExtensionFileName($("#file").get(0).value);
	formData.append('channel_id', $("#channel_id").val());
	formData.append('file',$("#file").get(0).files[0]);
	formData.append('name',  filename);
	formData.append('id', document.getElementById("id").value);

	xhr.send(formData);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4)
		{
			var data=xhr.responseText;
			console.log("****"+data+"************");
			var jsonResponse = JSON.parse(data);
			var resumeinfo = jsonResponse["resume"];
			fillinResume(resumeinfo);
			console.log(resumeinfo);
			$("id").val(id);
		}
　　     };	    
}

function submitattachmentfile(){

	if($("#id").val() == "-1"||$("#id").val() == -1){
		alert("先获取简历id");
		return;
	}
	var FileLen = $("#attachmentfile").get(0).files.length;
	if(FileLen == 0){
		alert("选择要上传的附件");
		return;
	}
	for(i = 0; FileLen > i ;i++){
		var xhr = new XMLHttpRequest();
		xhr.open('POST','/uploadattachmentfile',true);
		var formData = new FormData();			
		console.log( $("#attachmentfile").get(0).files[i]);			
		var filename = GetExtensionFileName($("#attachmentfile").get(0).files[i].name);
// alert(filename);
		formData.append('file',$("#attachmentfile").get(0).files[i]);
		formData.append('name',  filename);
// formData.append('id', document.getElementById("id").value);
		formData.append('id', $("#id").val());
		xhr.send(formData);
		var isSuccess=true;
		xhr.onreadystatechange = function(){
 			if (xhr.readyState === 4){
 				var jsondata=xhr.responseText;
				console.log(jsondata);
				var data = JSON.parse(jsondata);
				console.log(data);
				$("#resumeAttBox").empty();
				for(j = 0; data.length > j;j++){
					var id = data[j]["id"];
					var resume_id = data[j]["resume_id"];
					var file_path = data[j]["file_path"];	
					
					if(id=="-1") {
						alert(file_path+"已经存在，如果真的想上传该文件，请重命名该文件");
						isSuccess=false;
						continue;
					}
					
					var tr = $("<tr></tr>");
					tr.attr("id","attatch" + id);
					var name = $("<td></td>");
					name.append(file_path);
					
					tr.append(name);
					
					var resumeLine = $("<td></td>");
					var resumename = $("<a></a>");
					resumename.append("下载 ");
					resumename.attr("href", "/resumeAttdownload?file=" + file_path);
					resumeLine.append(resumename);
					tr.append(resumeLine);
					
					var filedele = $("<td></td>");
					var del = $("<a></a>");
					del.append("删除");
					del.attr("onclick", "deleteAttach(" + id + ")");
					filedele.append(del);
					tr.append(filedele);
					$("#resumeAttBox").append(tr);
					alert("上传附件成功");

				}
    		}
 	　　     };	    
	}
	
}

function fillinResume(resumeinfo){	
	if(resumeinfo.length == 0){
		alert("简历解析错误");
	}
	var id = resumeinfo["id"];
	document.getElementById("id").value = id;
// alert(resumeinfo["work_experience"]);
	$("#sn").val(resumeinfo["sn"]);
	$("#name").val(resumeinfo["name"]);
	$("#phone").val(resumeinfo["phone"]);
	$("#email").val(resumeinfo["email"]);
	$("#resumesn").val(resumeinfo["back_info"]);
	$("#channel_id").val(resumeinfo["channel_id"]);
	$("#selectSchool").val(resumeinfo["school_name"]);
	$("#is_bat").val(resumeinfo["is_bat"]);
	$("#degree").val(resumeinfo["degree"]);
	$("#position").val(resumeinfo["position"]);
	$("#experience").val(resumeinfo["experience"]);
	$("#work_experience").val(resumeinfo["work_experience"]);
	$("#project_experience").val(resumeinfo["project_experience"]);
	$("#professional_skills").val(resumeinfo["professional_skills"]);
	$("#train_experience").val(resumeinfo["train_experience"]);
	$("#edu_experience").val(resumeinfo["edu_experience"]);
	
	$("#selectMajor").val(resumeinfo["major"]);
	$("#age").val(resumeinfo["age"]);
	
	$("#is_bat option[value=" + resumeinfo.is_bat +"]").attr("selected","selected");
	$("#sex option[value=" + resumeinfo.sex +"]").attr("selected","selected");
	console.log(resumeinfo.is_bat);
	$("#department_id option[value=" + resumeinfo.department +"]").attr("selected","selected");
	
	$("#english_level").val(resumeinfo["english_level"]);
	$("#japanese_level").val(resumeinfo["japanese_level"]);
	
	$("#korean_level").val(resumeinfo["korean_level"]);
	
	$("#resume_info").val(resumeinfo["resume_info"]);
	
	$("#recommend_person_id").val(resumeinfo["recommend_person_id"]);

}


// assign a default value to resuem fields
function yell(name){
	if(name==null || name=="") {
		name = ' ';
	}
}

function submitResume(){ 
	

	resumeinfo = {};
	resumeinfo["id"] =$("#id").val();
	resumeinfo["sn"]=$("#sn").val();
	resumeinfo["phone"] = $("#phone").val();
	yell(resumeinfo["phone"]);
	resumeinfo["email"] = $("#email").val();
	yell(resumeinfo["email"]);

	resumeinfo["age"] = $("#age").val();
	
	if(resumeinfo["age"] == null||resumeinfo["age"] == ""){
		resumeinfo["age"] = "0";
	}
	if(resumeinfo['age'].length>4) {
		resumeinfo['age'] = resumeinfo['age'].substr(0,3); 
	}
	
	var wordcheck = false;
	$("textarea").each(function(){
		if($(this).val().length > 1024) {
			alert("抱歉,有部分数据的字数过多，系统无法处理，请删减，需要删减的数据项输入框右下角字数字提示为红色");
			wordcheck=true;
			return;
		}
	})
	if(wordcheck) {
		return;
	}
	
	//alert(resumeinfo["age"]);
	
	
	resumeinfo["back_info"] = $("#back_info").val();
	yell(resumeinfo["back_info"]);
	
	resumeinfo["channel_id"] = $("#channel_id").val();
	
	resumeinfo["school_name"] = $("#selectSchool").val();
	yell(resumeinfo["school_name"]);
	
	resumeinfo["major"] = $("#selectMajor").val();

	yell(resumeinfo["major"]);
	

	resumeinfo["name"] = $("#name").val();
	yell(resumeinfo["name"]);
	
	resumeinfo["degree"] = $("#degree").val();
	yell(resumeinfo["degree"]);
	
	resumeinfo["department"]=$("#department_id").val();
	
	if($("#is_bat").val() == null ||$("#is_bat").val().lenghth == 0){
		alert("选择是否是BAT中一家");
		return;
	}
	
	resumeinfo["is_bat"] = $("#is_bat").val();
			
	if($("#sex").val() == null ||$("#sex").val().lenghth == 0){
		alert("选择下性别");
		return;
	}
	resumeinfo["sex"] = $("#sex").val();		
	
	if($("#position").val() == null ||$("#position").val().lenghth == 0){
		alert("选择下适合的岗位");
		return;
	}
	resumeinfo["position"] = $("#position").val();
	
	if($("#experience").val() == null||$("#experience").val().lenghth == 0){
		resumeinfo["experience"] = -1;
	}else{
		
		resumeinfo["experience"] = $("#experience").val();
	}
	

	
	
	if($("#japanese_level").val() == null){
		alert("请选择日语水平");
		return;
	}
	if($("#korean_level").val() == null){
		alert("请选择韩国水平");
		return;
	}
	if($("#english_level").val() == null){
		alert("请选择中文水平");
		return;
	}
	
	if($("#degree").val() == null){
		alert("请选择学历");
		return;
	}
	
	
	resumeinfo["work_experience"] = $("#work_experience").val();
	resumeinfo["project_experience"] = $("#project_experience").val();
	resumeinfo["professional_skills"] = $("#professional_skills").val();
	resumeinfo["train_experience"] = $("#train_experience").val();
	resumeinfo["edu_experience"] = $("#edu_experience").val();		
	resumeinfo["english_level"] = $("#english_level").val();
	resumeinfo["japanese_level"] = $("#japanese_level").val();		
	resumeinfo["korean_level"] = $("#korean_level").val();		
	resumeinfo["resume_info"] = $("#resume_info").val();		
	resumeinfo["recommend_person_id"] = $("#recommend_person_id").val();
	
	$.ajax({
        cache: true,
        type: "POST",
        url: "/submitResume",// 提交的URL
        data: resumeinfo, // 要提交的表单,必须使用name属性
        success: function (data) {
        	$("#id").val(data);
// $("#common").html(data);//输出提交的表表单
			alert("success!");
			history.back();
        },
        error: function (request) {
        	alert("出错误了，可能是你没有填写缺失的数据项，如果错误仍然存在，请联系cn40594")
            $("input[type=text]").each(checkEmpty);
          
            $("input[type=number]").each(checkEmpty)
          
        }
    });
	function checkEmpty() {
		    var tar=$(this);
			var tarVal = tar.val();
			if(tarVal==null || tarVal=="") {
				tar.css("border","1px red solid");
				console.log("Add to "+tar.attr("id"));
				return;
			}
	}
	
	
	return false;
}

function addPosition() {
	var value = $(submitPosition).val();
	if(value.length >= 10){
		alert("职位名称太长了~");
		return;
	}
	var url = "/submitPosition"
	
	parms = {
			position:value
	}
	$.post(url,parms,submitFun);
}
function submitFun(data){		
	var positionList = $("#positionList");
	if(data == "wrong"){
		alert("输入一个可用的职位");
		return
	}
	if(data == "repeat"){
		alert("您输入的职位已经存在了~");
		return
	}
	$("#positionList").empty();
	for(i = 0; data.length > i; i++){
		var dataJson = data[i];
		$('<option />',{
	        value:dataJson.id,
	        text:dataJson.name
	    }).appendTo(positionList);
	}
	alert("提交成功！");
}

function getFileName(controlID,fileBox) {
	if (fileBox.value){
		var path = fileBox.value;
		var fileName = path.substring(path.lastIndexOf('\\')+1);
		document.getElementById(controlID).value = fileName;
	}
}
function deletefine(){
	alert("删除文件");
}
// by MoreWindows (http://blog.csdn.net/MoreWindows)
function GetExtensionFileName(pathfilename)
{
	var reg = /(\\+)/g;
	var pfn = pathfilename.replace(reg, "#");
	var arrpfn = pfn.split("#");
	var fn = arrpfn[arrpfn.length - 1];
	return fn;
}
function submitAnotherResume(){
	if($("#id").val() == -1){
		alert("先填写简历信息！");
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST','/uploadResume',true);
	var formData = new FormData();
	
	console.log( $("#file2").get(0).files[0])
	if($("#file2").get(0).value == null || $("#file2").get(0).value == ""){
		alert("选择要上传的文件");
		return;
	}
	
	var filename = GetExtensionFileName($("#file2").get(0).value);
	formData.append('file',$("#file2").get(0).files[0]);
	formData.append('name',  filename);
	formData.append('id', document.getElementById("id").value);

	xhr.send(formData);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4)
		{
			var data=xhr.responseText;
			console.log(data);
			var jsonResponse = JSON.parse(data);
			var resumeinfo = jsonResponse["status"];
			if(jsonResponse["status"] == "400"){
				alert("出错了，请重试");
			}else{
				alert(resumeinfo);
			}
			
		}
　　     };	    
}

Date.prototype.format = function (format) {
var o = {
"M+": this.getMonth() + 1,
"d+": this.getDate(),
"h+": this.getHours(),
"m+": this.getMinutes(),
"s+": this.getSeconds(),
"q+": Math.floor((this.getMonth() + 3) / 3),
"S": this.getMilliseconds()
}
if (/(y+)/.test(format)) {
format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
}
for (var k in o) {
if (new RegExp("(" + k + ")").test(format)) {
format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
}
}
return format;
}
/**
 * 转换日期对象为日期字符串
 * 
 * @param date
 *            日期对象
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2013-12-06 01:05:04" 为false时, 格式如
 *            "2013-12-06"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDate(date, isFull) {
var pattern = "";
if (isFull == true || isFull == undefined) {
pattern = "yyyy-MM-dd hh:mm:ss";
} else {
pattern = "yyyy-MM-dd";
}
return getFormatDate(date, pattern);
}
/**
 * 转换当前日期对象为日期字符串
 * 
 * @param date
 *            日期对象
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2013-12-06 01:05:04" 为false时, 格式如
 *            "2013-12-06"
 * @return 符合要求的日期字符串
 */
function getSmpFormatNowDate(isFull) {
return getSmpFormatDate(new Date(), isFull);
}
/**
 * 转换long值为日期字符串
 * 
 * @param l
 *            long值
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2013-12-06 01:05:04" 为false时, 格式如
 *            "2013-12-06"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDateByLong(l, isFull) {
return getSmpFormatDate(new Date(l), isFull);
}
/**
 * 转换long值为日期字符串
 * 
 * @param l
 *            long值
 * @param pattern
 *            格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDateByLong(l, pattern) {
return getFormatDate(new Date(l), pattern);
}
/**
 * 转换日期对象为日期字符串
 * 
 * @param l
 *            long值
 * @param pattern
 *            格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDate(date, pattern) {
if (date == undefined) {
date = new Date();
}
if (pattern == undefined) {
pattern = "yyyy-MM-dd hh:mm:ss";
}
return date.format(pattern);
}



