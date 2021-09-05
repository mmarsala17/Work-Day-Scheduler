$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".bookmarkBtn").on("click", function () {

        console.log(this);
        var description = $(this).siblings(".info").val();
        var hours = $(this).parent().attr("id");

        localStorage.setItem(description, hours);
    })

    $("#8am .info").val(localStorage.getItem("8am"));
    $("#9am .info").val(localStorage.getItem("9am"));
    $("#10am .info").val(localStorage.getItem("10am"));
    $("11am .info").val(localStorage.getItem("11am"));
    $("12pm .info").val(localStorage.getItem("12pm"));
    $("1pm .info").val(localStorage.getItem("1pm"));
    $("2pm .info").val(localStorage.getItem("2pm"));
    $("3pm .info").val(localStorage.getItem("3pm"));
    $("4pm .info").val(localStorage.getItem("4pm"));
    $("5pm .info").val(localStorage.getItem("5pm"));

    function timeMemory() {
        var presentTime = moment().hour();

        $(".hour").each(function() {
            var timeDisp = parseInt($(this).attr("id").split("hour")[1]);
            console.log( timeDisp, presentTime)
            
            if (timeDisp < presentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeDisp === presentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }

        })
    }
    timeMemory();
})