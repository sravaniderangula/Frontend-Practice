// Get elements
var date = document.getElementById("dateValue");
var month = document.querySelector("#monthValue");
var year = document.querySelector("#yearValue");
var hour = document.getElementById("hourValue");
var minute = document.querySelector("#minuteValue");
var second = document.querySelector("#secondValue");

var am = document.getElementById("boxam");
var pm = document.getElementById("boxpm");

// Function to update time
function updateTime() {
    var today = new Date();
    var daValue = today.getDate();
    var monValue = today.getMonth();
    var yValue = today.getFullYear();
    var hValue = today.getHours();
    var minValue = today.getMinutes();
    var secValue = today.getSeconds();

    // Update date and time elements
    date.innerText = daValue;
    switch (monValue) {
        case 0: month.innerText = "01"; break;
        case 1: month.innerText = "02"; break;
        case 2: month.innerText = "03"; break;
        case 3: month.innerText = "04"; break;
        case 4: month.innerText = "05"; break;
        case 5: month.innerText = "06"; break;
        case 6: month.innerText = "07"; break;
        case 7: month.innerText = "08"; break;
        case 8: month.innerText = "09"; break;
        case 9: month.innerText = "10"; break;
        case 10: month.innerText = "11"; break;
        case 11: month.innerText = "12"; break;
    }

    year.innerText = yValue;
    hour.innerText = hValue > 12 ? hValue - 12 : hValue;
    minute.innerText = minValue < 10 ? "0" + minValue : minValue;  // Adding leading zero for minutes
    second.innerText = secValue < 10 ? "0" + secValue : secValue;  // Adding leading zero for seconds

    // AM/PM adjustment
    if (hValue >= 12) {
        pm.style.background = "red";
        am.style.background = "";
    } else {
        am.style.background = "red";
        pm.style.background = "";
    }
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize on page load
updateTime();
