import { defineConfig } from 'vite'
import qwer from 'vite-plugin-qwer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qwer(
      {
        'const': '(?<!_)_(?!_)',
        'let': '(?<!_)__(?!_)',
        '=': '(?<!_)___(?!_)',
        '=>': '👉',
        'console.log': '📝',
        '(': '🍎',
        ')': '🍏',
        'function': '(?<!_)____(?!_)',
      }
    )
  ],
})