import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['"Kalam"', 'cursive'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'th-purple': '#AB90B6',
        'th-green': '#DDE3E2',
        'th-gray': '#D9D9D9',
        'th-dk-green': '#263D42',
      },
    },
  },
  plugins: [],
} satisfies Config;
