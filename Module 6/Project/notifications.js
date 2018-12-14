Notification.requestPermission().then(function (result) {
    console.log(result);
});

var button = document.getElementsByClassName('checkPhotos')[0];

button.addEventListener('click', function () {
            // If the user agreed to get notified
            // Let's try to send ten notifications
            if (window.Notification && Notification.permission === "granted") {
                var n = new Notification("Congrats! They definitely are!");
                setTimeout(n.close.bind(n), 10000);
            }
        });
        