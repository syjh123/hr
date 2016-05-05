/**
 * 
 *
 */
function isPositiveInt(num){
	var re=/^\+?[1-9][0-9]*$/;
	return re.test(num);
}

function isQq(str){
	var re=/^\d{5,}$/;
	return re.test(str);
}

function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null)return false; 
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],0); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]);
}

function isEmail(str){
	var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	var r = str.match(reg);
	if(r==null)return false;
	return true;
}