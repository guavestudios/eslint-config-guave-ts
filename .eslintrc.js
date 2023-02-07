module.exports = {
  root: true,
  extends: [
    'eslint-config-standard-with-typescript',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard-with-typescript',
    '@vue/eslint-config-standard-with-typescript/allow-tsx-in-vue'
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['vue']
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline']
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off'
      }
    }
  ]
}
