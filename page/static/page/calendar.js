var calDate = new Date();
var maxResults = 4;

var calendarAPIURL = "https://www.googleapis.com/calendar/v3/calendars/justin.brown400@gmail.com/events?" + 
        "orderBy=starttime&singleEvents=true&alt=json&maxResults=" + maxResults +
        "&timeMin=" + calDate.getFullYear() + "-" + (calDate.getMonth() + 1) + "-" + calDate.getDate() + "T" + calDate.getHours()  + "%3A00%3A00-07%3A00" + 
        "&key=" + CALENDAR_KEY + "";


function getCalendarData() {
    $.ajax({
        url: calendarAPIURL,
        dataType: 'json',
        timeout: 5000,
        success: function(data, status) {
            console.log("Success")
            $.each(data.items, function(eventNumber, event) {
                setCalendarEvents(eventNumber, event);
            });
        },
        error: function(error) {
            $("#calendar").html("Error getting calendar events.");
            console.log("Error: " + error);
        }
    });
}

function setCalendarEvents(eventNumber, event) {
    var tmp = "#event" + eventNumber;
    // Have to check if "dateTime" or "date" is the varaible. dateTime is for events with specific times while
    //  date is for all day events.
    if(event.start.dateTime) {
        var simpleDate = new Date(Date.parse(event.start.dateTime));
        var startTime = event.start.dateTime.slice(11, 16);
    } else {
        var simpleDate = new Date(Date.parse(event.start.date));
        var startTime = "All Day"
    }
    
    $(tmp).html(startTime + " " + monthsOfTheYear[simpleDate.getMonth()] + "  " + simpleDate.getDate() + " : " + event.summary);
}