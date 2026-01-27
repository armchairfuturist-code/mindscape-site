import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0D2B45',
                    50: '#E8EDF2',
                    100: '#C4D1DE',
                    200: '#9FB5C9',
                    300: '#7A99B5',
                    400: '#557DA0',
                    500: '#30618C',
                    600: '#1E4A6E',
                    700: '#0D2B45',
                    800: '#081D2E',
                    900: '#040E17',
                },
                teal: {
                    DEFAULT: '#4B778D',
                    50: '#EDF3F5',
                    100: '#D3E2E8',
                    200: '#B8D0DA',
                    300: '#9DBECD',
                    400: '#82ACBF',
                    500: '#679AB2',
                    600: '#4B778D',
                    700: '#3A5C6D',
                    800: '#29414E',
                    900: '#18262E',
                },
                gold: {
                    DEFAULT: '#D4A84B',
                    light: '#E8C97A',
                    dark: '#B08A3A',
                },
            },
            fontFamily: {
                heading: ['var(--font-outfit)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(75, 119, 141, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(75, 119, 141, 0.6)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0D2B45 0%, #1E4A6E 50%, #4B778D 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(13, 43, 69, 0.02) 0%, rgba(75, 119, 141, 0.08) 100%)',
            },
        },
    },
    plugins: [],
} satisfies Config;
