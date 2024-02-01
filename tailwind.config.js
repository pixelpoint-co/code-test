/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    'class',
  ],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './@/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // min 380
      tablet:
        '700px',
      laptop:
        '1024px',
      desktop:
        '1440px',
      // max 1920
    },
    fontSize: {
      xs: [
        '12px',
        {
          lineHeight:
            '16px',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight:
            '20px',
        },
      ],
      base: [
        '16px',
        {
          lineHeight:
            '24px',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight:
            '28px',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight:
            '28px',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight:
            '32px',
        },
      ],
      '3xl': [
        '32px',
        {
          lineHeight:
            '36px',
        },
      ],
      '3.5xl': [
        '40px',
        {
          lineHeight:
            '1',
        },
      ],
      '4xl': [
        '44px',
        {
          lineHeight:
            '1',
        },
      ],
      '5xl': [
        '52px',
        {
          lineHeight:
            '1',
        },
      ],
      '5.5xl': [
        '56px',
        {
          lineHeight:
            '1',
        },
      ],
      '6xl': [
        '60px',
        {
          lineHeight:
            '1',
        },
      ],
      '7xl': [
        '72px',
        {
          lineHeight:
            '1',
        },
      ],
      '8xl': [
        '96px',
        {
          lineHeight:
            '1',
        },
      ],
      '9xl': [
        '120px',
        {
          lineHeight:
            '1',
        },
      ],
      '10xl': [
        '144px',
        {
          lineHeight:
            '1',
        },
      ],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      15: '60px',
      16: '64px',
      18: '72px',
      20: '80px',
      22: '88px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
      '1/2': '50%',
      '1/3':
        '33.333333%',
      '2/3':
        '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '1/8':
        '12.5%',
    },
    extend: {
      colors: {
        border:
          'hsl(var(--border))',
        input:
          'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background:
          'hsl(var(--background))',
        foreground:
          'hsl(var(--foreground))',
        primary: {
          DEFAULT:
            'hsl(var(--primary))',
          foreground:
            'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:
            'hsl(var(--secondary))',
          foreground:
            'hsl(var(--secondary-foreground))',
        },
        destructive:
          {
            DEFAULT:
              'hsl(var(--destructive))',
            foreground:
              'hsl(var(--destructive-foreground))',
          },
        muted: {
          DEFAULT:
            'hsl(var(--muted))',
          foreground:
            'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:
            'hsl(var(--accent))',
          foreground:
            'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:
            'hsl(var(--popover))',
          foreground:
            'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:
            'hsl(var(--card))',
          foreground:
            'hsl(var(--card-foreground))',
        },
        gray: {
          50: 'rgb(246, 245, 245)',
          100: 'rgb(231, 230, 230)',
          200: 'rgb(209, 208, 208)',
          300: 'rgb(164, 163, 164)',
          400: 'rgb(137, 135, 136)',
          500: 'rgb(110, 108, 109)',
          600: 'rgb(94, 92, 93)',
          700: 'rgb(80, 78, 78)',
          800: 'rgb(70, 68, 68)',
          900: 'rgb(59, 58, 58)',
          950: 'rgb(38, 38, 38)',
        },
      },
      borderRadius:
        {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      keyframes: {
        'accordion-down':
          {
            from: {
              height:
                '0',
            },
            to: {
              height:
                'var(--radix-accordion-content-height)',
            },
          },
        'accordion-up':
          {
            from: {
              height:
                'var(--radix-accordion-content-height)',
            },
            to: {
              height:
                '0',
            },
          },
      },
      animation: {
        'accordion-down':
          'accordion-down 0.2s ease-out',
        'accordion-up':
          'accordion-up 0.2s ease-out',
      },
      translate: {},
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
