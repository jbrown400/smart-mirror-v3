var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getTime() {
	var today = new Date();
	var dow = daysOfTheWeek[today.getDay()];
	var month = monthsOfTheYear[today.getMonth()];
	var day = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	$("#clockTime").html(h + ":" + m);
	$("#clockDate").html(dow + " " + month + " " + day);
	setTimeout(getTime, 1000);
}

function getWeather() {
	var city = "";
	getCurrentWeatherConditions(city);
}

/**
 * 
 * @param {*} city The city for which you want weather data.
 */
function getCurrentWeatherConditions(city) {

}

// function getWeatherForecast(city) {

// }