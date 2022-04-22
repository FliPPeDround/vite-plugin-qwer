# vite-plugin-qwer

### 这个插件可以让你编写出只有你自己才能认识的代码（可能也不行）

为什么叫vite-plugin-qwer？突出一个不可维护性


## 安装

    pnpm i -D vite-plugin-qwer

```
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
```

之后可以在代码中写出

    📝🍎'Hello world'🍏

会被vite-plugin-qwer转换成

    console.log('Hello world')

并正确执行


## 用上这款插件，保护好自己的密码本（codeBook）你就是公司最不可替代的一员