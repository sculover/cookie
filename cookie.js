// 设置cookie方法
function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	var cookie = [c_name, '=', JSON.stringify(value), '; path=/;', ' expires=', exdate.toGMTString()].join('');
	document.cookie = cookie;
};
// 检测cookie是否存在方法
function checkCookie(c_name) {
	if (document.cookie.length>0) {
		var c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
// 获取cookie信息
function getCookie(c_name) {
	if (document.cookie.length>0) {
		var c_start, c_end = '';
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1) {
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) {
				c_end=document.cookie.length;
			}
		}
		return unescape(document.cookie.substring(c_start,c_end));
	}
	return "";
}
