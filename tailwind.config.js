module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html'
    ],
    corePlugins: {
        container: false, // Disable default container
    },
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4F46E5',
                    DEFAULT: '#4338CA',
                    dark: '#3730A3',
                },
                data: {
                    positive: '#10B981',
                    negative: '#EF4444',
                    neutral: '#64748B',
                }
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            screens: {
                '3xl': '1792px', // 2k screens
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
        fontFamily: {
            heading: ['Inter', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};