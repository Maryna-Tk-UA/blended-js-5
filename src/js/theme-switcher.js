//  логіка для перемикання теми
// const THEME_KEY = 'theme';
// const DARK_CLASS = 'theme-dark';
// const LIGHT_CLASS = 'theme-light';

// export const loadTheme = () => {
//     const savedTheme = localStorage.getItem(THEME_KEY);
//     if(savedTheme === 'dark') {
//         document.body.classList.add(DARK_CLASS);
//         document.body.classList.remove(LIGHT_CLASS);
//     } else {
//         document.body.classList.add(LIGHT_CLASS);
//         document.body.classList.remove(DARK_CLASS);
//     }
// }

// export const toggleTheme = () => {
//     if(document.body.classList.contains(DARK_CLASS)) {
//         document.body.classList.remove(DARK_CLASS);
//         document.body.classList.add(LIGHT_CLASS);
//         localStorage.setItem(THEME_KEY, 'light');
//     } else {
//         document.body.classList.remove(LIGHT_CLASS);
//         document.body.classList.add(DARK_CLASS);
//         localStorage.setItem(THEME_KEY, 'dark');
//     }
// }