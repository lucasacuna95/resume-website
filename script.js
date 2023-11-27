// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'light');
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
        body.dataset.mode = 'light';
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'dark');
        body.style.backgroundColor = '#111';
        body.style.color = '#fff';
        body.dataset.mode = 'dark';
    }
}

// Check and set the dark mode state when the page loads
window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#fff';
        document.body.dataset.mode = 'dark';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        document.body.dataset.mode = 'light';
    }
});

// Dark mode toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleDarkMode);// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'dark');
    }
}

// Check and set the dark mode state when the page loads
window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});Icons/linkedin-icon2.png

// Dark mode toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleDarkMode);Icons/linkedin-icon2.png