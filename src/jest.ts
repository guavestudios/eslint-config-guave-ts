import { interopDefault } from './utils'

export async function jest ({ dir = 'tests' }: { dir?: string }) {
  const [
    pluginJest,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-jest')),
  ] as const)

  return [
    {
      name: 'guave/tests/jest',
      files: ['**/*.spec.{ts,js}', '**/*.e2e-spec.{ts,js}', '**/*.test.{ts,js}', dir + '/**/*.{ts,js}'],
      plugins: { jest: pluginJest },
      languageOptions: {
        globals: pluginJest.environments.globals.globals,
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    }
  ]
}
