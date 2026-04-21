document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const body = document.body;

    const updateUI = (isDark) => {
        btn.textContent = isDark ? 'Light theme' : 'Dark theme';
    };

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.replace('light-theme', 'dark-theme');
        updateUI(true);
    }

    btn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
            updateUI(true);
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
            updateUI(false);
        }
    });
});