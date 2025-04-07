import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/portfolio_react/',
  assetsInclude: ['**/*.svg'],
  commonjsOptions: {
    esmExternals: true,
 },
})
