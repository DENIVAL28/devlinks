// Dark Mode Toggle
const html = document.documentElement;
const switchBtn = document.getElementById('switch');

function isDark() {
    return html.classList.contains('dark');
}

function syncButtonState() {
    switchBtn.setAttribute('aria-pressed', String(isDark()));
}

function toggleTheme() {
    html.classList.toggle('dark');
    localStorage.setItem('theme', isDark() ? 'dark' : 'light');
    syncButtonState();
}

switchBtn.addEventListener('click', toggleTheme);
syncButtonState();
