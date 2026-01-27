// "The Clinical Sanctuary" Design System
// Bridging Clinical Professionals & Holistic Seekers

export const theme = {
    colors: {
        // Primary palette
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
        // Accent colors
        gold: {
            DEFAULT: '#D4A84B',
            light: '#E8C97A',
            dark: '#B08A3A',
        },
        // Neutral palette
        slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
    },
    fonts: {
        heading: '"Outfit", sans-serif',
        body: '"Inter", sans-serif',
    },
    spacing: {
        section: '6rem',
        sectionMobile: '3rem',
    },
    borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
    },
    shadows: {
        soft: '0 4px 6px -1px rgba(13, 43, 69, 0.1), 0 2px 4px -1px rgba(13, 43, 69, 0.06)',
        medium: '0 10px 15px -3px rgba(13, 43, 69, 0.1), 0 4px 6px -2px rgba(13, 43, 69, 0.05)',
        large: '0 25px 50px -12px rgba(13, 43, 69, 0.25)',
        glow: '0 0 40px rgba(75, 119, 141, 0.3)',
    },
    transitions: {
        fast: '150ms ease',
        base: '250ms ease',
        slow: '400ms ease',
        smooth: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
} as const;

export type Theme = typeof theme;
