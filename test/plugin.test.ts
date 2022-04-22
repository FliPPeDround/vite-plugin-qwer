import {test, expect} from 'vitest'
import {qwerParese} from './index'

const code = `🍎__ a ___ 🍎🍏 👉 📝🍎'Hello qwer'🍏🍏🍎🍏`
const codeBook = {
  const: '(?<!_)_(?!_)',
  let: '(?<!_)__(?!_)',
  '=': '(?<!_)___(?!_)',
  '=>': '👉',
  'console.log': '📝',
  '(': '🍎',
  ')': '🍏',
  'function': '(?<!_)____(?!_)',
}
test('should', () => {
  expect(qwerParese(code, codeBook)).toBe(`let a = () => console.log('Hello qwer')`)
})