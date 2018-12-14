window.addEventListener('load', function () {
            // At first, let's check if we have permission for notification
            // If not, let's ask for it
            if (window.Notification && Notification.permission !== "granted") {
                Notification.requestPermission(function (status) {
                    if (Notification.permission !== status) {
                        Notification.permission = status;
                    }
                });
            } 
var button = document.getElementsByClassName('checkPhotos')[0];

button.addEventListener('click', function () {
            // If the user agreed to get notified
            // Let's try to send ten notifications
            if (window.Notification && Notification.permission === "granted") {
                var n = new Notification("Congrats! They definitely are!");
                setTimeout(n.close.bind(n), 10000);
            }
        });
    });