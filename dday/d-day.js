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
        "<br>" +
        [
            padTwoDigits(date.getHours()),
            padTwoDigits(date.getMinutes()),
            padTwoDigits(date.getSeconds()),
        ].join(":")
    );
}

function calculateDDay(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

// Example usage:


document.addEventListener("DOMContentLoaded", function () {
    const today = document.getElementById("today");
    const indayElement = document.getElementById("dday");
    const targetDate = new Date('2025-3-9');

    function updateDDay() {
        const dDay = calculateDDay(targetDate);

        indayElement.innerHTML = `D-${dDay}`;
    }
    function updateCurrentTime() {
        const currentDate = new Date();
        today.innerHTML = dateInYyyyMmDdHhMmSs(currentDate);
    }

    updateDDay();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);


});
