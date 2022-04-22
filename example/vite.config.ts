import { defineConfig } from 'vite'
import qwer from 'vite-plugin-qwer'

const codeBook = {
  'const': '(?<!_)_(?!_)',
  'let': '(?<!_)__(?!_)',
  '=': '(?<!_)___(?!_)',
  '=>': '👉',
  'console.log': '📝',
  '(': '🍎',
  ')': '🍏',
  'function': '(?<!_)____(?!_)',
}

export default defineConfig({
  plugins: [
    qwer(codeBook)
  ],
})