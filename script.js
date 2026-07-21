// Dark Mode Toggle
function toggleMode() {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Carregar tema salvo
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || 'light';

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
});

// Detectar preferência do sistema
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
