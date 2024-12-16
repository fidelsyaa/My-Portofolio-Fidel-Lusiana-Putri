/// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navMenu = document.getElementById("navMenu");

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Mengecek apakah dark mode sudah diaktifkan sebelumnya di localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️"; // Ganti ikon sesuai mode
} else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.textContent = "🌙"; // Ganti ikon sesuai mode
}

darkModeToggle.addEventListener("click", () => {
    // Toggle dark mode
    document.body.classList.toggle("dark-mode");

    // Simpan status dark mode di localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️"; // Ganti ikon saat aktif dark mode
    } else {
        localStorage.removeItem("darkMode");
        darkModeToggle.textContent = "🌙"; // Ganti ikon saat non-aktif dark mode
    }
});


// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Semua field harus diisi!');
            } else {
                alert('Form berhasil dikirim!');
            }
        });
    }
});

// Weather API (optional)
const weatherElement = document.getElementById('weather');
if (weatherElement) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=metric&appid=ad0fba148e49e2d171efba7b11e2589d')
        .then(response => response.json())
        .then(data => {
            weatherElement.innerHTML = `
                <p>${data.weather[0].description}, ${data.main.temp}°C</p>
            `;
        })
        .catch(err => {
            weatherElement.innerHTML = '<p>Gagal memuat cuaca</p>';
        });
}
