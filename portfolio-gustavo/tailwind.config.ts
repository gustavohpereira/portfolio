import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/heroImage.jpg')",
        
      },
      colors:{
        'background-general': '#0A0A0A',
      }
    },
  },
  plugins: [],
}
export default config
