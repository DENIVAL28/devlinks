// Dark Mode Toggle
function toggleMode() {
    const body = document.body;

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Carregar tema salvo
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || 'light';

    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
});

// Detectar preferência do sistema
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
