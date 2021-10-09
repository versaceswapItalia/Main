(function (document, $) {
    function copyToClipboard(str) {
        var TempText = document.createElement("input");
        TempText.value = str;
        document.getElementById('walletConnect').appendChild(TempText);
        TempText.select();
        document.execCommand("copy");
        document.getElementById('walletConnect').removeChild(TempText);
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.success('Copied to Clipboad!')
    }
    document.addEventListener("DOMContentLoaded", function (event) {
        var timeEnd = new Date("2021-10-01").setHours(0,0,0,0);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        var initDate = new Date(timeEnd);
        var countDownDate = initDate.getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        document.getElementById('timeEnd').innerText = initDate.toString();
    });

})(document, $);