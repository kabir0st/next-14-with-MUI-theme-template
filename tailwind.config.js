const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        light: {
          text: '#4c3b34',
          background: '#f2e9d9',
          primary: '#277c7c',
          secondary: '#f28f78',
          accent: '#ffb84d',
          card: 'rgba(255, 255, 255, 0.7)', // For card glassmorphism effect
        },
        // Dark Theme Colors
        dark: {
          text: '#cbbab3',
          background: '#261d0d',
          primary: '#83d8d8',
          secondary: '#87240d',
          accent: '#b36b00',
          card: 'rgba(38, 29, 13, 0.8)', // For dark theme card glassmorphism
        },
      },
      borderRadius: {
        lg: '12px', // Rounded corners for UI elements
        xl: '15px', // Slightly larger rounding for glassmorphism elements
      },
      boxShadow: {
        glass: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for glassmorphism
      },
      backdropFilter: {
        blur: 'blur(10px)', // For the blur effect in glassmorphism
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.1)', // Light glassmorphism background
        'glass-dark': 'rgba(38, 29, 13, 0.8)', // Dark glassmorphism background
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['hover', 'focus'], // Enable glassmorphism effect on hover/focus
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

      addBase({
        ":root": newVars,
      });
    }
  ],
};
