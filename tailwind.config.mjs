/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1128',
          900: '#11182F',
          800: '#1B263B',
          700: '#2A3A55',
          600: '#415A77',
          500: '#5B7A9E',
        },
        sand: {
          100: '#E0E1DD',
          200: '#C9CBC5',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
