function padTwoDigits(num) {
    return num.toString().padStart(2, "0");
}

function dateInYyyyMmDdHhMmSs(date, dateDiveder = " ") {
    return (
        [
            date.getFullYear() + "년",
            padTwoDigits(date.getMonth() + 1) + "월",
            padTwoDigits(date.getDate()) + "일",
        ].join(dateDiveder) +
        " " +
        [
            padTwoDigits(date.getHours()),
            padTwoDigits(date.getMinutes()),
            padTwoDigits(date.getSeconds()),
        ].join(":")
    );
}

function calculateDDay(meetingDay) {
    const currentDate = new Date();
    const timeDifference = currentDate - meetingDay;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

// Example usage:


document.addEventListener("DOMContentLoaded", function () {
    const today = document.getElementById("today");
    const days = document.getElementById("days");
    const meetingDay = new Date('2024-9-3');

    function updateDDay() {
        const dDay = calculateDDay(meetingDay);

        days.innerHTML = `만난지 ${dDay} 일`;
    }
    function updateCurrentTime() {
        const currentDate = new Date();
        today.innerHTML = dateInYyyyMmDdHhMmSs(currentDate);
    }

    updateDDay();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);


});
