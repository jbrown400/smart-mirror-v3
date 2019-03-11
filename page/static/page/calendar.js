var calDate = new Date();

var calendarAPIURL = "https://www.googleapis.com/calendar/v3/calendars/justin.brown400@gmail.com/events?" + 
        "orderBy=starttime&singleEvents=true&alt=json&maxResults=10" +
        "&timeMin=" + calDate.getFullYear() + "-" + (calDate.getMonth() + 1) + "-" + calDate.getDate() + "T" + calDate.getHours()  + "%3A00%3A00-07%3A00" + 
        "&key=" + CALENDAR_KEY + "";


function getCalendarData() {
    $.ajax({
        url: calendarAPIURL,
        dataType: 'json',
        timeout: 5000,
        success: function(i, item) {
            console.log("Success")
            console.log(i);
        },
        error: function(error) {
            $("#calendar").html("Error getting calendar events.");
            console.log("Error: " + error);
        }
    });
}