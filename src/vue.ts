import { interopDefault } from './utils'

export async function vue () {
  const [
    pluginVue,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
  ] as const)

  return [
    ...pluginVue.configs['flat/recommended'],
    {
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/block-lang': 'off',
        'vue/html-indent': ['error'],
        'vue/max-attributes-per-line': ['error'],
        'vue/first-attribute-linebreak': ['error'],
        'vue/html-closing-bracket-newline': ['error'],
        'vue/html-closing-bracket-spacing': ['error'],
      }
    }
  ]
}
