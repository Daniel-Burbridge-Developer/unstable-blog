import type { Config } from 'tailwindcss';
import { withUt } from 'uploadthing/tw';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

const coreConfig = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{tsx,jsx,mdx}',
  ],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => ({
        dark: {
          css: {
            // General text color for dark mode
            color: theme('colors.gray.300'),
            // Lead paragraphs
            '[class~="lead"]': { color: theme('colors.gray.400') },
            // Anchor tags (links)
            a: {
              color: theme('colors.blue.400'),
              '&:hover': { color: theme('colors.blue.500') },
            },
            // Headings
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            // Blockquotes with a distinct purple accent on the border
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.purple.500'),
            },
            // Inline code styling
            code: {
              color: theme('colors.blue.300'),
              backgroundColor: theme('colors.gray.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            // Preformatted text (code blocks)
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [typography, animate],
} satisfies Config;

export default withUt(coreConfig);
