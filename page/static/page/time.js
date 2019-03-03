function getTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	$("#clock").html(h + ":" + m);

	setTimeout(getTime, 1000);
}