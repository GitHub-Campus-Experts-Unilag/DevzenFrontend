import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				'10': '#d7d7d7',
  				'20': '#bdbdbd',
  				'30': '#9c9c9c',
  				'40': '#7b7b7b',
  				'50': '#5a5a5a',
  				'60': '#303030',
  				'70': '#262626',
  				'80': '#1d1d1d',
  				'90': '#131313',
  				'100': '#0b0b0b',
  				base: '#393939',
  				DEFAULT: '#393939'
  			},
  			gray: {
  				'10': '#f7f7f7',
  				'20': '#f1f1f1',
  				'30': '#ebebeb',
  				'40': '#e4e4e4',
  				'50': '#dddddd',
  				'60': '#b2b2b2',
  				'70': '#8f8f8f',
  				'80': '#6b6b6b',
  				'90': '#474747',
  				'100': '#2b2b2b',
  				base: '#d6d6d6',
  				DEFAULT: '#d6d6d6'
  			},
  			green: {
  				'10': '#cee7ea',
  				'20': '#add6dc',
  				'30': '#84c2cb',
  				'40': '#5baeba',
  				'50': '#3299a8',
  				'60': '#086f7e',
  				'70': '#065965',
  				'80': '#05434c',
  				'90': '#032c32',
  				'100': '#021b1e',
  				base: '#098597',
  				DEFAULT: '#098597'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		backgroundColor: {
  			'black-90': 'hsl(0deg, 0%, 7%)'
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(to right, #032C32, #098597)'
  		},
  		fontFamily: {
  			primary: ['SF Pro Display"', ...defaultTheme.fontFamily.sans]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
