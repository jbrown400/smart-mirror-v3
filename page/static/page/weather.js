var weatherAPIURL = "http://api.openweathermap.org/data/2.5/weather?zip=72719,us&units=imperial&APPID=" + WEATHER_KEY

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
	$("#temp").html(Math.round(currentWeather.main.temp) + "&#176;");
	$("#temp_min_max").html(
			Math.round(currentWeather.main.temp_min) + "&#176;/ " +
			Math.round(currentWeather.main.temp_max) + "&#176;"
		);
}