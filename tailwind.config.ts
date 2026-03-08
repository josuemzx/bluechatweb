import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}", // Also scan utility files just in case
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Tokens for Antigravity Theme
        'google-text-primary': '#202124',    // Main headings
        'google-text-secondary': '#5f6368',  // Subtitles / Meta
        'google-surface': '#f1f3f4',         // Cards / Pills background
        'google-surface-hover': '#e8eaed',
        'google-blue': '#1a73e8',            // Links / Accents
        'bluechat-primary': '#0166FF',      // Brand Primary
        'bluechat-surface': '#FCFCFC',      // Light Card Background
        'bluechat-surface-alt': '#F9FAFB',  // Subtle Gray Background

        // Help Center card tokens
        'hc-card': '#f8f9fc',               // Card base background
        'hc-card-hover': '#f8f9fa',         // Card hover state
        'hc-icon-box': '#eff2f7',           // Light icon container (top cards)
        'hc-icon-dark': '#1a1a1a',          // Dark icon container (channel cards)

        // Retain existing palette for backward compatibility if needed
        primary: {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#aEcBfa',
          300: '#8ab4f8',
          400: '#669df6',
          500: '#4285f4', // Google Blue
          600: '#1a73e8', // Darker Link Blue
          700: '#1967d2',
          800: '#185abc',
          900: '#174ea6',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0', // Borders
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368', // Secondary Text
          800: '#3c4043',
          900: '#202124', // Primary Text
        }
      },
      fontSize: {
        // Custom sizes for the blog hero to match Antigravity exactly without arbitrary values
        'hero-mobile': ['36px', '1.1'],
        'hero-tablet': ['44px', '1.1'],
        'hero-desktop': ['52px', '1.1'],
        'blog-title': ['20px', '1.3'],
        'blog-title-md': ['24px', '1.3'],
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(1, 102, 255, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
