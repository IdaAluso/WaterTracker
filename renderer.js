const trackBtn = document.getElementById('track-btn'); // Get the track button element
const notification = document.getElementById('notification'); // Get the notifications element

trackBtn.addEventListener('click', () => {
    // Show a notif
    notification.classList.remove('hidden'); // Remove the 'hidden' class to show the notification

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden'); // Add the 'hidden' class to hide the notification
    }, 3000); // 3000 milliseconds = 3 seconds
});