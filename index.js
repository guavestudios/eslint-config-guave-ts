module.exports = {
  extends: [
    'eslint-config-standard-with-typescript',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard-with-typescript',
    '@vue/eslint-config-standard-with-typescript/allow-tsx-in-vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/block-lang': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    'n/no-callback-literal': 'off',
    'vue/html-indent': ['error'],
    'vue/max-attributes-per-line': ['error'],
    'vue/first-attribute-linebreak': ['error'],
    'vue/html-closing-bracket-newline': ['error'],
    'vue/html-closing-bracket-spacing': ['error'],
  }
}
