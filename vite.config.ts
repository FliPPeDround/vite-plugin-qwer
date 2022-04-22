/// <reference types="vitest" />
import { defineConfig } from 'vite'
import qwer from './src'

export default defineConfig({
  test: {
    dir: 'test'
  },
  plugins: [
    qwer()
  ],
})