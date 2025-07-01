// import { interopDefault } from './utils'
import { interopDefault } from './utils'

export async function typescript () {
  const [
    pluginTs,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      name: 'typescript/setup',
      plugins: {
        '@typescript-eslint': pluginTs as any,
      },
    },
    // ...tseslint.configs.recommended,
    {
      name: 'guave/typescript',
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        ...pluginTs.configs['recommended'].rules,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-object-type': ['off'],
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        '@typescript-eslint/explicit-function-return-type': ['off'], // in certain situations, composables, vue templates
      }
    }
  ]
}
