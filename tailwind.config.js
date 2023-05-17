/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#5057FE',
                secondary: '#0F1729',
                'primary-text': '#1E293B',
                'secondary-text': '#64748B',
            },
        },
    },
    plugins: [],
};
