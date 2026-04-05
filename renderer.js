const trackBtn = document.getElementById('track-btn'); // Get the track button element
const notification = document.getElementById('notification'); // Get the notifications element

trackBtn.addEventListener('click', () => {
    // Increment the water intake count in localStorage
    let currentIntake = localStorage.getItem('waterIntake') || 0; // Get current intake or default to 0

    // Increment the intake count by 250ml
    let newIntake = parseInt(currentIntake) + 250; // Increment by 250ml

    // Save the new intake count back to localStorage
    localStorage.setItem('waterIntake', newIntake); // Save the new intake count
    // Show a notif
    notification.classList.remove('hidden'); // Remove the 'hidden' class to show the notification

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden'); // Add the 'hidden' class to hide the notification
    }, 3000); // 3000 milliseconds = 3 seconds
});