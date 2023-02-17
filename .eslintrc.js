const index = require('./index.js')

module.exports = {
  root: true,
  extends: [
    ...index.extends
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['vue']
  },
  rules: {
    ...index.override.rules
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
