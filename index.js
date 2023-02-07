module.exports = {
  extends: [
    '@antfu/eslint-config-vue'
  ],
  override: {
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      '@typescript-eslint/comma-dangle': ['error', 'only-multiline']
    }
  }
}
