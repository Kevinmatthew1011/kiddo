
// Countdown timer
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2024-11-30T00:00:00'); // Example target date

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
        countdownElement.textContent = "The day has arrived! 🎉";
        return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    countdownElement.textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Photo upload functionality
const photoUpload = document.getElementById('photo-upload');
const placeholder = document.getElementById('placeholder');

placeholder.addEventListener('click', () => photoUpload.click());

photoUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            placeholder.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
