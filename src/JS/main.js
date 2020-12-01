const themeSwitch = document.getElementById('darkmode-btn');
const theme = document.documentElement.setAttribute('data-theme', 'light');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        transition();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        transition();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};