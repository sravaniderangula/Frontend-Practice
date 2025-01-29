document.addEventListener("DOMContentLoaded", function () {
    const hours = document.getElementById("hoursHand");
    const minutes = document.getElementById("minutesHand");
    const seconds = document.getElementById("secondsHand");

    function timing() {
        const today = new Date();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const second = today.getSeconds();

        const hoursInDegrees = (hour % 12) * 30 + (minute / 60) * 30; // Hour hand moves with minutes
        const minutesInDegrees = (minute) * 6; // 360/60 = 6 degrees per minute
        const secondsInDegrees = (second) * 6; // 360/60 = 6 degrees per second

        hours.style.transform = "rotate(" + hoursInDegrees + "deg)";
        minutes.style.transform = "rotate(" + minutesInDegrees + "deg)";
        seconds.style.transform = "rotate(" + secondsInDegrees + "deg)";
    }

    timing();
    setInterval(timing, 1000); // Update every second
});
