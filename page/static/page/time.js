var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var weatherAPIURL = "http://api.openweathermap.org/data/2.5/weather?zip=72719,us&units=imperial&APPID=" + WEATHER_KEY

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

/**
 * Handles getting and setting the current weather conditions
 */
function getWeather() {
	var city = "";
	var currentWeather = getCurrentWeatherConditions(city);
}

/**
 * Returns a javascript object containing the weather API response.
 * @param {*} city The city for which you want weather data.
 */
function getCurrentWeatherConditions(city) {
	$.ajax({
		url: weatherAPIURL,
		type: "GET",
		dataType: 'json',
		timeout: 5000,
		success: function(result, status) {
			setCurrentWeatherConditions(result);
		},
		error: function(error) {
			console.log("Error: " + error);
			$("#weather").html("Error");
		}
	})
}

/**
 * Sets the weather fields based on the relevant data returned by the weather API.
 * @param {*} currentWeather A javascript object containing the weather API response.
 */
function setCurrentWeatherConditions(currentWeather) {
	console.log(currentWeather.weather);
	$("#temp").html(currentWeather.main.temp);
}

