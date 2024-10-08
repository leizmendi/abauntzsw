import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		padding: {
			'responsive-x': '10%',
		  },
		colors: {
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow: {
		'custom-light': '0 12px 14px rgba(0, 0, 0, 0.5)',
		'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.25)',
		},	
		textShadow: {
			// Define aquí las sombras que necesites
			'default': '2px 2px 4px rgba(0, 0, 0, 0.25)',  // Sombra estándar
			'lg': '4px 4px 6px rgba(0, 0, 0, 0.3)',  // Sombra más grande
		},			
  	},
  },
  plugins: [require("tailwindcss-animate"),
			function (api: PluginAPI) { // Definir el tipo explícito de `api`
				const { addUtilities } = api;
				const newUtilities = {
				'.text-shadow': {
					textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)', // Definir clase de sombra predeterminada
				},
				'.text-shadow-lg': {
					textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)', // Clase de sombra más grande
				},
				};
				addUtilities(newUtilities);
			},
  ],
  
};
export default config;
