import { interopDefault } from './utils'

export async function vue () {
  const [
    pluginVue,
    parserVue,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    // ...pluginVue.configs['flat/recommended'],
    {
      name: 'guave/vue/base',
      plugins: {
        vue: pluginVue as any,
      },
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          parser: parserVue,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
        // This allows Vue plugin to work with auto imports
        // https://github.com/vuejs/eslint-plugin-vue/pull/2422
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
    },
    {
      name: 'guave/vue/rules',
      files: ['**/*.vue'],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: parserTs,
          sourceType: 'module',
        },
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs['flat/recommended'].map(c => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}) as any,
        'vue/multi-word-component-names': 'off',
        'vue/block-lang': 'off',
        'vue/html-indent': ['error'],
        'vue/max-attributes-per-line': ['error'],
        'vue/first-attribute-linebreak': ['error'],
        'vue/html-closing-bracket-newline': ['error'],
        'vue/html-closing-bracket-spacing': ['error'],
        'vue/no-v-html': ['off'],
        'vue/attribute-hyphenation': ['off'],
        'vue/require-default-prop': ['off'],
      }
    },
  ]
}
