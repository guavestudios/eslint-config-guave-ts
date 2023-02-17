module.exports = {
  extends: [
    'eslint-config-standard-with-typescript',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard-with-typescript',
    '@vue/eslint-config-standard-with-typescript/allow-tsx-in-vue'
  ],
  override: {
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
      'n/no-callback-literal': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/block-lang': 'off',
    }
  }
}
