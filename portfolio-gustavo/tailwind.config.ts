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
        'app-gradient': 'linear-gradient(135deg, #020617, #0f172a, #1e1b4b, #3b0764)',
      },
      colors:{
        'app-background': '#020617',
        'app-surface': '#0A0A0A',
        'app-surface-soft': '#171717',
        'app-border': '#52525B',
        'app-border-strong': '#DDD6FE',
        'app-text': '#E2E8F0',
        'app-text-strong': '#FFFFFF',
        'app-muted': '#A3A3A3',
        'app-subtle': '#525252',
        'app-accent': '#C084FC',
        'app-accent-soft': '#E9D5FF',
        'app-accent-strong': '#D8B4FE',
        'app-inverted': '#000000',
        'app-overlay': '#000000',
        'tech-frontend': '#E879F9',
        'tech-frontend-surface': '#701A75',
        'tech-backend': '#A78BFA',
        'tech-backend-surface': '#4C1D95',
        'tech-database': '#22D3EE',
        'tech-database-surface': '#164E63',
        'tech-devops': '#FB923C',
        'tech-devops-surface': '#7C2D12',
        'tech-ai': '#34D399',
        'tech-ai-surface': '#064E3B',
      }
    },
  },
  plugins: [],
}
export default config
