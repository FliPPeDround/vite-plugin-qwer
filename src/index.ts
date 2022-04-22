import type { Plugin } from 'vite'
import { createFilter, FilterPattern } from '@rollup/pluginutils'

interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
}

function qwerParese(code: string, codeBook: { [x: string]: string | RegExp }) {
  Object.keys(codeBook).forEach((key) => {
    code = code.replace(new RegExp(codeBook[key], 'g'), key)
  })
  
  return code
}

function VitePluginQwer(codeBook = {}): Plugin {
  return {
    name: 'vit-plugin-qwer',
    enforce: 'pre',
    transform(code: string, id: string) {
      const include = /\.(js|tsx|vue|ts|tsx)/
      const exclude = /node_modules/
      const filter = createFilter(include, exclude)
      if (filter(id)) {
        return { code: qwerParese(code, codeBook) }
      }
    }
  }
}

export default VitePluginQwer